import React from "react";
import "./homepage.css";
import image from "../images/image.jpg"
class HomePage extends React.Component {
  render() {
    return (
      <div  id="page">
        <div id="sideBar">
          <nav className="nav">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Portfoloi</a></li>
            <li><a>Contact</a></li>
          </nav>
        </div>
        <div  id="content">
          <images/>
          <img className="team-img1" alt='profile' src={image} />
          <h1>Manju KC</h1>
          <p>Full Stack Developer</p>
        </div>
      
      </div>
    );
  }
}

export default HomePage;
