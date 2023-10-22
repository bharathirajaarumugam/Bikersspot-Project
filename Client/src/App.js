import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Signin } from './Project/Login/Login';
import { Signup } from './Project/Signup/Signup';
import { Admin } from './Project/Dashboard/Admin/Admin';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './Project/Welcome/Home';
import { Getfromnode } from './Project/Dashboard/Admin/Getfromnode/Getfromnode';
import { Updatedetails } from './Project/Dashboard/Admin/Update/Update';
import { Read } from './Project/Dashboard/Admin/Read/Read';
import { User } from './Project/Dashboard/User/User';
import { UpdateService } from './Project/Dashboard/Admin/Updateservice/Updateservice';
import { Profile } from './Project/Dashboard/User/Profile';
import { Adminproduct } from './Project/Dashboard/Admin/Updateservice/Adminproduct';
import { Updateproduct } from './Project/Dashboard/Admin/Updateservice/UpdateProduct/Updateproduct';
import { Availableservice } from './Project/Dashboard/User/Availableservice/Availableservice';
import { Bookservice } from './Project/Dashboard/User/Availableservice/Bookservice';
import { Userbookstatus } from './Project/Dashboard/User/Availableservice/Userbookstatus';
import { Viewprofile } from './Project/Dashboard/User/Viewprofile/Viewprofile';
import { Adminservice } from './Project/Dashboard/Admin/Adminservice/Adminservice';
import { Updateuserservice } from './Project/Dashboard/Admin/Adminservice/Updateuserservice';
import { Useravailableproduct } from './Project/Dashboard/User/Availableproduct/Useravailableproduct';
import { UserBookorder } from './Project/Dashboard/User/Userbookorder/Userbookorder';
import { Userproductstatus } from './Project/Dashboard/User/Userstatus/Userproductbookstatus';
import { Userservicestatus } from './Project/Dashboard/User/Userstatus/Userservicebook';

function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Admin/:user_id" element={<Admin/>}/>
        <Route path="/view" element={<Getfromnode/>}/>
        <Route path="/read/:user_id" element={<Read/>}/>
        <Route path="/update/:user_id" element={<Updatedetails/>}/>
        <Route path="/Updateservice" element={<UpdateService/>}/>
        <Route path="/User/:id" element={<User/>}/>
        <Route path="/Viewprofile" element={<Viewprofile/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Useravailableproduct" element={<Useravailableproduct/>}/>
        <Route path="/UserBookorder" element={<UserBookorder/>}/>
        <Route path="/Userservicestatus" element={<Userservicestatus/>}/>
        <Route path="/Userproductstatus" element={<Userproductstatus/>}/>
        <Route path='/Updateservice/:id' element={[<UpdateService/>]}/>
        <Route path='/Adminproduct' element={[<Adminproduct/>]}/>
        <Route path='/Adminservice' element={[<Adminservice/>]}/>
        <Route path='/Updateuserservice/:id' element={[<Updateuserservice/>]}/>
        <Route path='/updateproduct/:id' element={[<Updateproduct/>]}/>
        <Route path='/Availableservice' element={[<Availableservice/>]}/>
        <Route path='/Bookservice' element={[<Bookservice/>]}/>
        <Route path='/Userbookstatus' element={[<Userbookstatus/>]}/>
        
       
        {/* <Route path="/Navbar" element={<Navbar/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
