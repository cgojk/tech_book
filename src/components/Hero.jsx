import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/pattern-light-bg.svg";
import imageIntro from "../assets/images/image-hero-mobile.webp";
import imageTablet from "../assets/images/image-hero-tablet.webp";
import imageDesktop from "../assets/images/image-hero-desktop.webp";

import logo from "../assets/images/logo.svg";
import avatars from "../assets/images/image-avatars.webp";
import stars from "../assets/images/icon-star.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import Testimonials from "./Testimonials";





export default function Hero(){
    return (
 <section className="hero__section pattern__glow ">
   
       <header className="hero__header container">
        <img src={logo} className="logo-image" loading="lazy" alt="A  book with a logo " />
        
       </header>
    <div className="hero container">
  
     
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
                  <Testimonials />
            </div>
           
      

            <div className="image__hero">
                <picture className="image__hero">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={imageDesktop}
                        />

                        <source
                            media="(min-width: 710px)"
                            srcSet={imageTablet}
                        />

                        <img
                            src={imageIntro}
                            alt="Illustration of people reading books"
                        />
                        </picture>
           
                </div>
         </div>

     </div>
          
    
       
</section>

  );
}
