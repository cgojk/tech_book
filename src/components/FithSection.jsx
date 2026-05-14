import react from "react";
import stars from "./../assets/images/icon-star.svg";



export default function FithSection(){
    return (
 <section className="section__testimonials">
       <div className="wrapper__testimonial">     
              <img src={stars} alt="Stars pattern" className="stars__pattern" />
              <img src={stars} alt="Stars pattern" className="stars__pattern" />
              <img src={stars} alt="Stars pattern" className="stars__pattern" />
              <img src={stars} alt="Stars pattern" className="stars__pattern" />
              <img src={stars} alt="Stars pattern" className="stars__pattern" />
        </div>
         <div className="testimonial__content">
                  <blockquote>"This book cluc transformed my 
                        technical reading from a solitary activity into an enriching community
                        experience. The discussions are gold!".</blockquote>
                      <p className="testimonial__author">- Sarah Chen, Software Architect</p>
         </div>
 </section>

  );
}