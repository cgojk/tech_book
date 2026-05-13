import React from "react";
import circle from "../assets/images/pattern-circle.png";
import readinggroup from "../assets/images/image-not-average-mobile.webp";




export default function SecondSection(){
    return (
 <section className="section__reading__average">
       <div className="wrapper__reading__average">      
            <h2 className="title__reading_average">Not your average book <span className="circle__pattern">
               
                </span>club</h2>
             
                    <p className="reading__description">Connect with a community that speaks your
                        language - from <strong>Python</strong> to <strong>TypeScript</strong> and everything in between. 
                        Our discussions blend 
                        technical depth with practical applications.</p>
        </div>

        <div className="image__reading">
            <img src={readinggroup} alt="Illustration of people reading books together" />
        </div> 
         
</section>

  );
}