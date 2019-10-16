import React from "react";
import "./homepage.css";
import image from "../images/image.jpg"



class HomePage extends React.Component {
  render() {
    return (
      <div  id="page">
        <div  id="content">
          <img className="team-img1" alt='profile' src={image} />
          <h1>Manju KC</h1>
          <p className="para">Full Stack Developer</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
