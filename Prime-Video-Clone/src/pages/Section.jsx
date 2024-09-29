/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Section.css";
import {Link} from "react-router-dom";
// import img from "../../public/images/MLP.jpg";

const Section = (props) => {
  return (
    <section> 
        <div className="sec-left">
            <p className="sec-heading">{props.heading}</p>
            <p className="sec-desc">{props.desc}</p>
            <Link to="/">{props.btn}</Link>
        </div>
        <div className="sec-right">
          <img src={props.img} alt="Movies image" />
        </div>
    </section>
  )
} 

export default Section
