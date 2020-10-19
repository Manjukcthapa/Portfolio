import React from "react";
import { Link } from "react-router-dom";
import Resume from "../../public/ManjuResume.pdf";
import "./header.css";

function Header() {
  return (
    <div className = "header">
       
      <h1 className="header-h1">My Portfolio</h1>
     
      <nav className = "header-nav">
        <Link className = "header-link" to={"/"}>
          <span>About</span>
        </Link>
        <Link className = "header-link" to={"/Project"}>
          <span>Projects</span>
        </Link>
        <Link className = "header-link" to={"/Education"} >
          <span>Education</span>
        </Link>
        <Link  className = "header-link" to={"/Contact"}>
          <span>Contact</span>
        </Link>
        <a className = "header-link" href={Resume}>
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Header;
