import React from "react";
import facebook from "../image/Facebook Icon.png"
import github from "../image/GitHub Icon.png"
import instagram from "../image/Instagram Icon.png"
import Twitter from "../image/Twitter Icon.png"

export default function Footer() {
    return (
        <div className="footer--container">


            <a href="https://twitter.com/mynameisemmansb">
           <img src={Twitter} 
             alt="twitter-img" 
             className="icon--img"/>
            </a>

            <a href="#">
            <img src={facebook} 
             alt="facebook-img" 
             className="icon--img"/>
             </a>



            <a href="#">
            <img src={instagram} 
             alt="instagram-img" 
             className="icon--img"/>
            </a>


            <a href="https://github.com/emmansb">
            <img src={github} 
             alt="github-img" 
             className="icon--img"/>
             </a>
        </div>
    )
}