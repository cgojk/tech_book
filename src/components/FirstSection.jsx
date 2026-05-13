import React from "react";
import ticks from "../assets/images/icon-check.svg";
import imageReading from "../assets/images/image-read-together-mobile.webp";




export default function FirstSection(){
    return (
 <section className="section__reading">
       <div className="wrapper__reading">      
            <h1 className="title__reading">Read Together, grow together</h1>
                    <ul className="reasonsreading__content">
                            <li className="reason__item"><img src={ticks} alt="Check icon" />Monthly curated tech reads selected by industry experts</li>
                            <li className="reason__item"><img src={ticks} alt="Check icon" />Virtual and in-person meetups 
                                    for deep-dive discussions
                            </li>
                            <li className="reason__item"><img src={ticks} alt="Check icon" />Early access to new tech book releases</li>
                            <li className="reason__item"><img src={ticks} alt="Check icon" />Author Q&A sessions with tech thought leaders</li>

                        </ul>
        </div>

        <div className="image__reading">
            <img src={imageReading} alt="Illustration of people reading books together" />
        </div>
            
   
       
</section>

  );
}