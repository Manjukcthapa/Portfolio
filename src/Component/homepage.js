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
        <div>
          <h1>Manju KC</h1>
          <p>I am Software Developer</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
