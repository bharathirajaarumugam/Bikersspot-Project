import React from "react";
import nature from '../Asserts/Recat-first-image.jpg';
export default function Welcome() {
    return (
        <>
            <img src={nature} className="col-lg-6" />
            <h1>To Kgisl</h1>
            <h2>micro College</h2>
            <h3>Saravanampatti</h3>
            <div class="card-body" className="col-lg-3">
                <img src="https://c4.wallpaperflare.com/wallpaper/596/453/207/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Black Man</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">View</a>
                    </div>
            </div>
        </>
    );
}