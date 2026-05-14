
import { Link } from "react-router-dom";
import ticks from "./../assets/images/icon-check.svg";

export default function Membership(props) {
    const { title, price, membershipDescription, features, cta, linkto } = props;
    

    return (

                <li className={`membership__item ${props.id === 2 ? "pattern__glow" : ""}`}>
                           <div className="membership__card-starter">
                               <div className="ribbon">
                               <h3 className="membership__title">{title}</h3>
                            </div>
                          <div className="icon__time"><span className="membership__icon"> {price} </span><h4 className="membership__description">{membershipDescription}</h4></div>
                             <ul className="membership__divider">
                                {features.map((feature, index) => (
                                    <li className="check_description" key={index}>
                                        <img src={ticks} alt="Check icon" />
                                        <h4 className="membership__description">{feature}</h4>
                                    </li>
                                ))}
                            </ul>
                         <Link to={linkto} className="btn btn-membership"> {cta}</Link>
                        </div>
                    </li>
            

                    )
            

    
}
