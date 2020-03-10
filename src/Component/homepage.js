import React from "react";
import "./homepage.css";
import image from "../images/image.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div id="page">
          <div id="content">
            <img className="team-img1" alt="profile" src={image} />
            <h1>Manju KC</h1>
            <div className="home-para">
            <p>
              I am a Full Stack Developer with a passion for solving problems. I
              have proficiency in HTML5, CSS3, SaaS, Bootstrap, Vanilla
              JavaScript, JQuery, React, React-Native, Redux, Nodejs, Axios,
              GraphQL, Python, Django, Sqlite3.
            </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="icon-text">Find me on...</h2>
          <div className="icons">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Manjukcthapa"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/manju-kc-440a40ba/"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
