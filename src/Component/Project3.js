import React from "react";
import images2 from "../images/nci.png";
import "./project.css";

class Project3 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="project1">
            <div></div>
            <div>
              <img className="projectimg" src={images2} />
            </div>

            <div className="projectlink">
              <button className="button1">
                <a clasName="link" href="https://github.com/intlChildNutrition">
                  GitHub
                </a>
              </button>
              <button className="button1">
                <a
                  clasName="secondlink"
                  href="https://icn-tracking.netlify.com/dashboard"
                >
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project3;
