import React from "react";
import "./homepage.css";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="second-div">
          <nav className="nav">
            <a>Home</a>
            <a>About</a>
            <a>Portfolio</a>
            <a>contact</a>
          </nav>
        </div>
        <div className="aboutinfo">
           <h1>Manju KC</h1>
           <p>Full Stack Developer</p>
       </div>
      </div>
    );
  }
}

export default HomePage;
