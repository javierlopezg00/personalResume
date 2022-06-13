import React from "react";
import '../styles/Footer.css';
import { Link } from "react-router-dom";

function Footer({ text, linkTo }){
    return(
    <Link to= {`/${linkTo}`} >
        <div className='footer' >
            <p>{text}</p>
        </div>
    </Link>
    );
}
export default Footer;