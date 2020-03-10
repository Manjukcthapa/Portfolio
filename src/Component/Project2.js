import React from 'react';
import images from "../images/wanderlust.png";
import "./project.css";

class Projects2 extends React.Component {

    render(){
        return(
            <div className = "projectdiv-main">
            <div className="secondproject">
            <div className="project1">
              <div>
                <img className="projectimg" src={images} />
              </div>

              <div className="projectlink">
                <button className="button1">
                  <a
                    clasName="link"
                    href="https://github.com/wanderlust-bw"
                  >
                    GitHub
                  </a>
                </button>
                <button className="button1">
                  <a
                    clasName="secondlink"
                    href="https://wonderlust-manju.herokuapp.com/SignUp"
                  >
                    Live Site
                  </a>
                </button>
              </div>
            </div>
          </div>ˇ
        </div>
        )
    }


}

export default  Projects2;