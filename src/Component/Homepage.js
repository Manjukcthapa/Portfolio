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
                I am a Full Stack Developer with a passion for solving problems.
                I recently completed Lambda School, a 9-month coding academy.
                During my free time, I love to go hiking, camping, fishing as
                well as love to attend local meetups. I am available for
                fulltime employment and can start immediately. I am currently
                located in Atlanta, GA but willing to relocate.
              </p>
              <h1>Skills</h1>
              <p>
                HTML | CSS | SASS | JavaScript | React | React Hooks | Redux |
                Responsive Design | Styled Component| Node JS | Python | Sqlite3
                | Postgres | Express | Knex | Jest | Heroku | Netlify
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
