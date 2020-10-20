import React, { Component } from "react";
import data from "./data/data.js";
import "./project.css";

class ProjectList extends Component {
  render() {
    return (
      <div>
        <h1 className="project-heading">My Projects</h1>
        <div className="project-map">
          {data.map((post, id) => {
            return (
              <div className="project-div">
                <img className="project-img" src={post.img}></img>
                <h1 className="project-header project-title">{post.title}</h1>
                <p className="project-header" className="paragraph">
                  {post.contain}
                </p>
                <p>
                  <ul className="items">
                    {post.responsibility.map((item) => {
                      return <li>{item}</li>;
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
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
