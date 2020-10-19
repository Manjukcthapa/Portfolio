import React from "react";
import { Link } from "react-router-dom";
import Resume from "../../public/ManjuResume.pdf";

function Header() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <nav>
        <Link to={"/"}>
          <span>About</span>
        </Link>
        <Link to={"/Project"} className="nav-link">
          <span>Projects</span>
        </Link>
        <Link to={"/Education"} className="nav-link">
          <span>Education</span>
        </Link>
        <Link to={"/Contact"} className="nav-link">
          <span>Contact</span>
        </Link>
        <a className="resume" href={Resume}>
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Header;
