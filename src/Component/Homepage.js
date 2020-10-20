import React from "react";
import "./homepage.css";
import image from "../images/image.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-img">
        <img className="team-img1" alt="profile" src={image} />
        </div>
        <div className="homepage-context">
          <h1 className="homepage-about">About Me</h1>
          <p className="about-me">
            I am a Full Stack Developer with a passion for solving problems. I
            recently completed Lambda School, a 9-month coding academy. During
            my free time, I love to go hiking, camping, fishing as well as love
            to attend local meetups. I am available for fulltime employment and
            can start immediately. I am currently located in Atlanta, GA but
            willing to relocate.
          </p>
          <h1 className="homepage-about">Skills</h1>
          <p className="aboutme">
            HTML | CSS | SASS | JavaScript | React | React Hooks | Redux |
            Responsive Design | Styled Component| Node JS | Python | Sqlite3 |
            Postgres | Express | Knex | Jest | Heroku | Netlify
          </p>

          <h2 className="icon-text homepage-about">Find me on...</h2>
          <div className="home-icon">
            <li className="home-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Manjukcthapa"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </li>
            <li className="home-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/manjukc/"
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
