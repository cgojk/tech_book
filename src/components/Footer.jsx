import React from "react";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import arrow from "../assets/images/icon-arrow-down.svg";
import blueskyIcon from "./../assets/images/logo-bluesky.svg";
import linkedinIcon from "./../assets/images/logo-linkedin.svg";

export default function Footer(){
    return (
        <section className="footer">
            
            <div className="wrapper__footer">
                <h2 className="title__footer">Ready to debug your reading list?</h2>
                <Link to="/review memberships" className="btn btn-footer"> <span> Review membership options </span>
                <img src ={arrow} alt="Arrow pointing down" className="arrow-image" />
                </Link>
                <Testimonials />
            </div>
            
          <div className="footerlinks"> 
               <p className="footer__copyright">© 2026 Tech Book Club.</p> 
                <ul className="footer__nav">
                    <li><Link to="/bluesky"><img src={blueskyIcon} alt="Bluesky" /></Link></li>
                    <li><Link to="/linkedin"><img src={linkedinIcon} alt="LinkedIn" /></Link></li>
                </ul>

         </div>

            
        </section>
    )
    };