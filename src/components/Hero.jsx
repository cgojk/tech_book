import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/pattern-light-bg.svg";
import imageIntro from "../assets/images/image-hero-mobile.webp";
import logo from "../assets/images/logo.svg";
import avatars from "../assets/images/image-avatars.webp";
import stars from "../assets/images/icon-star.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import Testimonials from "./Testimonials";





export default function Hero(){
    return (
 <section className="hero__section pattern__glow">
   
       <header>
        <img src={logo} className="logo-image" loading="lazy" alt="A  book with a logo " />
        
       </header>
    <div className="hero ">
  
     
        <div className="wrapper__hero-content ">
           
            <div className="info__hero">
                <h1 className="title__hero">Join the ultimate tech book club</h1>
                <p className="hero_text">
                Turn your reading time into learning time with fellow tech enthusiasts. 
                Get curated recommendations, join vibrant discussions, 
                and level up your skills one chapter at a time.
                </p>
                <Link to="/review memberships" className="btn btn-primary"> <span> Review membership options </span>
                <img src ={arrow} alt="Arrow pointing down" className="arrow-image" />
                </Link>
            </div>
             <Testimonials />
            <div className="image__hero">
            <img src={imageIntro} alt="Illustration of people reading books" />
                
            </div>

         </div>
          
    </div>
       
</section>

  );
}
