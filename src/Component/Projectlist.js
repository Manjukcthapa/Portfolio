import React, { Component } from "react";
import data from "./data/data.js";
import "./project.css";

class ProjectList extends Component {
  render() {
    return (
      <div>
        
        <h1 className="project-heading">Projects</h1>
        <div className="project-map">
          {data.map((post, id) => {
            return (
              <div className="project-div">
                <div className="project-context">
                  <div className="project-maintilte">
                <h1>{post.title}</h1>
                </div>
                <p className="project-header" className="paragraph">
                  {post.contain}
                </p>
                <p>
                  <ul className="items">
                    {post.responsibility.map((item) => {
                      return <p>{item}</p>;
                    })}
                  </ul>
                </p>
                <p className="project-header paragraph ">{post.technology}</p>

                <a href={post.githublink}>
                  <button className="link-button">Github</button>
                </a>
                <a href={post.livelink}>
                  <button className="link-button">LiveLink</button>
                </a>
                </div>
                <div className="project-imgdiv">
                <img className="project-img" src={post.img}></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
