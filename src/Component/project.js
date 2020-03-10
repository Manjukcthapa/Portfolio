import React from "react";
import "./project.css";
import images1 from "../images/mympy.png";
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project3"



class Projects extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="pro"> My Projects</h1>
          </div>
         
         <div className='buildproject'>
         <div className = "projectdiv-main" >
          <div className="projectwork">
            <div className="project1">
              <div>
                <img className="projectimg" src={images1} />
              </div>

              <div className="projectlink">
                <button className="button1">
                  <a clasName="link" href="https://github.com/mympy-dreamers">
                    GitHub
                  </a>
                </button>
                <button className="button1">
                  <a
                    clasName="secondlink"
                    href="https://mympydreamers.netlify.com/"
                  >
                    Live Site
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>
          <div classname="newtab">
          <Project2/>
          </div>
          <div>
          <Project3/>
          </div>
          <div>
          <Project4/>
          </div>

          </div>

      </div>
    );
  }
}

export default Projects;
