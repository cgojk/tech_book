import React from "react";
import { Link } from "react-router-dom";
import ticks from "../assets/images/icon-check.svg";

import Membership from "./Membership";
import Membershipdata from "../Membershipdata.js";





 export default function FourSection(){
return (
    <section className="section__membership container">
        <div className="wrapper__memberships">      
             <h2 className="title__membership">Membership Options</h2>
                <ul className="membership__content">
                    {Membershipdata.map((membership) => (
                        <Membership
                        key={membership.id}
                        id={membership.id}
                        title={membership.title}
                        price={membership.price}
                        membershipDescription={membership.membershipDescription}
                        features={membership.features}
                        cta={membership.cta}
                        linkto={membership.linkto}


                         
                            />
                    ))}

                </ul>
            </div>
        </section>
    )
}


