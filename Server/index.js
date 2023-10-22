//const variable=required("package_name")

const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const mysql=require("mysql")
const crypto=require("crypto")
const { request } = require("http")

var storeex=express()
storeex.use(cors())
storeex.use(bodyparser.json())
storeex.use(express.json())
storeex.use(bodyparser.urlencoded({extended:true}))
storeex.use(express.static('public'))

let localdb=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Bharathi@1234',
    database:'kgm'
})
localdb.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("DB Connected")
    }
})

storeex.get('/getoneservice/:sno',(request,response)=>{
    let {sno} = request.params
    let getonequerry = 'select * from project_details where sno=?'
    localdb.query(getonequerry, [sno],(error,result)=>{
        if(error){
            response.send({ "status" : "error"})
        }
        else{
            response.send(result)
        }
    })
})

storeex.get('/getoneuser/:user_id',(request,response)=>{
    let {user_id} = request.params
    let getonequerry = 'select * from project_details where user_id=?'
    localdb.query(getonequerry, [user_id],(error,result)=>{
        if(error){
            response.send({ "status" : "error"})
        }
        else{
            response.send(result)
        }
    })
})


storeex.get('/getall',(request,responce)=>{
    const selectquery='select * from kgm.project_details'
    localdb.query(selectquery,(error,result)=>{
        if(error){
            responce.send(error)
            console.log(error)
        }
        else{
            responce.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getallservicestatus',(request,response)=>{
    let getbookquerry = 'select * from kgm.book_details'
    localdb.query(getbookquerry,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getalluserservice',(request,responce)=>{
    const selectquery='select * from kgm.book_details'
    localdb.query(selectquery,(error,result)=>{
        if(error){
            responce.send(error)
            console.log(error)
        }
        else{
            responce.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getallservice',(request,responce)=>{
    const selectquery='select * from kgm.project_details'
    localdb.query(selectquery,(error,result)=>{
        if(error){
            responce.send(error)
            console.log(error)
        }
        else{
            responce.send(result)
            console.log(result)
        }
    })
})

storeex.get('/view',(request,response)=>{
    const selectquery='select * from kgm.project_details'
    localdb.query(selectquery,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/read/:user_id',(request,response)=>{
    const selectquery='select * from project_details where user_id=?'
    const user_id = request.params.user_id;
    localdb.query(selectquery,[user_id],(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.post('/register',(request,response)=>{
   
    var sno=crypto.randomUUID();
    var dates=new Date();
    var cdate=dates.toISOString().slice(0,10)
    console.log(cdate);

    let {fname,lname,phone,email,password,gender,role}=request.body
    let insertQuery=`insert into project_details(user_id,first_name,last_name,phone_number,
    email,password,gender,role,created_by,updated_by,created_date,updated_date)values('${sno}',?,?,?,?,?,?,?,'${sno}','${sno}','${cdate}','${cdate}')`
    localdb.query(insertQuery,[fname,lname,phone,email,password,gender,role],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }else{
            response.send({"status":"success"})
            console.log(result)
        }
    })
})

storeex.post('/addbookservice',(request,response)=>{
   
    var sno=crypto.randomUUID();

    let {name,email,contact,pickup,address,service,bookstatus,paymentstatus,bikemodel}=request.body

    let bookingQuery=`insert into book_details(bookid,name,email,contact,pickup,address,service,bookstatus,paymentstatus,bikemodel)values('${sno}',?,?,?,?,?,?,?,?,?)`
    localdb.query(bookingQuery,[name,email,contact,pickup,address,service,bookstatus,paymentstatus,bikemodel],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log(result)
        }
    })
})

storeex.post('/addbookorder',(request,response)=>{
   
    var orderid=crypto.randomUUID();

    let {email,address,contact}=request.body

    let orderQuery=`insert into order_details(orderid,email,address,contact)values('${orderid}',?,?,?)`
    localdb.query(orderQuery,[email,address,contact],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log(result)
        }
    })
})

storeex.post('/login',(request,response)=>{
    let{email,password}=request.body
    let loginquery='select * from project_details where email=?'
    localdb.query(loginquery,[email],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else if(result.length>0){
            let dbemail=result[0].email
            let dbpassword=result[0].password
            let id=result[0].user_id
            let role=result[0].role
            if(dbemail===email && dbpassword===password){
                response.send({"status":"success","id":id,"role":role})
            }
            else{
                response.send({"status":"invalid"})
            }
        }else{
            response.send({"status":"empty_set"})
        }
    })
})

storeex.get('/getone/:user_id',(request,response)=>{
    let {user_id} = request.params
    let getonequerry='select * from project_details where user_id=?'
    localdb.query(getonequerry,[user_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send(result)
        }
    })  
})
storeex.get('/Usergetone/:id',(request,response)=>{
    let {user_id} = request.params
    let getonequerry='select * from project_details where user_id=?'
    localdb.query(getonequerry,[user_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send(result)
        }
    })  
})

storeex.get('/getoneprofile/:id',(request,response)=>{
    let {user_id} = request.params
    let getonequerry='select * from project_details where user_id=?'
    localdb.query(getonequerry,[user_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send(result)
        }
    })  
})

storeex.post('/update/:user_id',(request,responce)=>{
    let {user_id}=request.params
    let {first_name,last_name,phone_number,email,password,gender,role}=request.body
    let updatequery='update project_details set first_name=?,last_name=?,phone_number=?,email=?,password=?,gender=?,role=? where user_id=?'
    localdb.query(updatequery,[first_name,last_name,phone_number,email,password,gender,role,user_id],(error,result)=>{
        if(error){
            responce.send({"status" : "error"})
            console.log(error)
        }
        else{
            responce.send({"status" : "success"})
        }
    })
})
storeex.post('/updateuserservice/:bookid',(request,responce)=>{
    let {bookid}=request.params
    let {name,email,contact,pickup,address,service,bookstatus,paymentstatus,bikemodel}=request.body
    let updatequery='update book_details set name=?,email=?,contact=?,pickup=?,address=?,bookstatus=?,paymentstatus=?,service=?,bikemodel=? where bookid=?'
    localdb.query(updatequery,[name,email,contact,pickup,address,service,bookstatus,bookid,paymentstatus,bikemodel],(error,result)=>{
        if(error){
            responce.send({"status" : "error"})
            console.log(error)
        }
        else{
            responce.send({"status" : "success"})
            console.log(result)
        }
    })
})

storeex.delete('/delete/:user_id',(request,response)=>{
    let {user_id}=request.params
    let deleteQuery='delete from project_details where user_id=?'

    localdb.query(deleteQuery, [user_id], (error, result) => {
        if (error) {
            console.error("Error deleting user:", error);
            return response.send({ status: "error", message: "An error occurred while deleting the user." });
        }
        if (result.affectedRows === 0) {
            return response.send({ status: "not_found", message: "User not found." });
        }
        return response.send({ status: "success", message: "User deleted successfully." });
    });
})

storeex.post('/UpdateService', (request, response) => {

    let { productimage, productname, productprice, quantity, rating } = request.body

    let productquery = 'insert into kgm.admin_product(productimage,productname,productprice,quantity,rating)values(?,?,?,?,?)'
    localdb.query(productquery, [productimage, productname, productprice, quantity, rating], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

storeex.get('/getallproduct', (request, response) => {
    let writequery = 'select * from kgm.admin_product'
    localdb.query(writequery, (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.send(result)
        }
    })
})

storeex.get('/getone/:productname', (request, response) => {
    let { productname } = request.params
    console.log(productname)
    let getonequery = 'select * from admin_product where productname = ?'
    localdb.query(getonequery, [productname], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send(result)
            console.log(result)
        }
    })
})

storeex.post('/getoneuserservice/:bookid',(request,response)=>{
    let {bookid} = request.params
    console.log(bookid)
    let getonequerry = 'select * from book_details where bookid=?'
    localdb.query(getonequerry, [bookid],(error,result)=>{
        if(error){
            response.send({ "status" : "error"})
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result  )
        }
    })
})

storeex.post('/adminproductdelete', (request, response) => {
    let productname = request.body.productname
    let deletequery = 'delete from kgm.admin_product where productname=?'
    localdb.query(deletequery, [productname], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})

storeex.put('/updateproduct/:productname', (request, response) => {
    let { productprice, quantity, rating, productname } = request.body
    let updatequery = 'update kgm.admin_product set productprice=?,quantity=?,rating=? where productname = ?'
    localdb.query(updatequery, [productprice, quantity, rating, productname], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
            console.log(result)
        }
    })
})

storeex.listen(3005,()=>{
    console.log("your port is running in 3005")
})