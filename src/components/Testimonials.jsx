import React from "react";
import stars from "./../assets/images/icon-star.svg";
import avatars from "../assets/images/image-avatars.webp";

export default function Testimonials(){
    return (
        <>

     <div className="testimonials">
                        <div className="testimonial-avatars">
                          <img className="testimonial-avatar" src={avatars} alt="Avatars of book club members" />
                        </div>
                     
     
         <div className="testimonial-info">
                          <ul className="stars">
                            <li><img src={stars} alt="5 star rating" /></li>
                            <li><img src={stars} alt="5 star rating" /></li>
                            <li><img src={stars} alt="5 star rating" /></li>
                            <li><img src={stars} alt="5 star rating" /></li>
                            <li><img src={stars} alt="5 star rating" /></li>
                        </ul>
                        <p className="testimonial-text">200+ developers joind already</p>
                       
        </div>

    </div>
</>

    );
}
