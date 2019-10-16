import React from "react";
import "./project.css";
import images from "../images/nasa.png";
import images1 from "../images/mympy.png";
import images2 from "../images/nci.png";

class Projects extends React.Component {
  render() {
    return (
      
      <div > 
        <h1 className='pro'>Projects</h1>
      <div className="project1">
       
        <div>
        </div>
        <div>
          <img className="projectimg" src={images1} />
        </div>

        <div className="projectlink">
          <button  className="button1"><a
         
            clasName="link"
            href="https://github.com/mympy-dreamers"
          >
            GitHub
          </a></button>
        <button className="button1">
          <a clasName="secondlink" href="https://mympydreamers.netlify.com/">
            Live Site
          </a></button>
        </div>
      </div>

      <div className="project1">
       
        <div>
        </div>
        <div>
          <img className="projectimg" src={images} />
        </div>

        <div className="projectlink">
          <button  className="button1"><a
         
            clasName="link"
            href="https://github.com/Manjukcthapa/nasa-photo-of-the-day"
          >
            GitHub
          </a></button>
        <button className="button1">
          <a clasName="secondlink" href="https://nasa-photo-of-the-day.kcmanjuthapa.now.sh/">
            Live Site
          </a></button>
        </div>
      </div>
      <div className="project1">
       
        <div>
        </div>
        <div>
          <img className="projectimg" src={images2} />
        </div>

        <div className="projectlink">
          <button  className="button1"><a
         
            clasName="link"
            href="https://github.com/intlChildNutrition"
          >
            GitHub
          </a></button>
        <button className="button1">
          <a clasName="secondlink" href="https://icn-tracking.netlify.com/dashboard">
            Live Site
          </a></button>
        </div>
      </div>
      </div>
    );
  }
}

export default Projects;
