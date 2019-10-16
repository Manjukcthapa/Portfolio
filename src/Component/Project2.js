import React from 'react';
import images from "../images/nasa.png";
import "./project.css";

class Projects2 extends React.Component {

    render(){
        return(
            <div>
            <div className="secondproject">
            <div className="project1">
              <div>
                <img className="projectimg" src={images} />
              </div>

              <div className="projectlink">
                <button className="button1">
                  <a
                    clasName="link"
                    href="https://github.com/Manjukcthapa/nasa-photo-of-the-day"
                  >
                    GitHub
                  </a>
                </button>
                <button className="button1">
                  <a
                    clasName="secondlink"
                    href="https://nasa-photo-of-the-day.kcmanjuthapa.now.sh/"
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