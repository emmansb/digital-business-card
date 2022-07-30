import React from "react";
import emmans from "../image/emmans b.jpg"
import email from "../image/Icon.png"
import linkedIn from "../image/linkedin.png"

export default function Info() {
    return (
        <div className="info--div">
             <img src={emmans} 
             alt="emmans-img" 
             className="emmans--img"/>
             <h1 className="name">Adekiitan Abiodun</h1>
             <h4 className="title">Frontend Developer</h4>
             <button className="button1">
                <img src={email} alt="email-icon" 
                className="email--icon"/>
                <p className="email--text">
                    <a href="#">Email</a>
                    </p>
                </button>
             <button className="button2">
                <img src={linkedIn} alt="linkedin-icon" 
                className="linkedin--icon"/>
                <p className="linkedin--text">
                    <a href="https://www.linkedin.com/in/abiodun-adekiitan-763a518a/">LinkedIn</a>
                    </p>
                </button>
        </div>
    )
}