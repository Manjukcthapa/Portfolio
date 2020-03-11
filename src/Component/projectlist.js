import React, { Component } from "react";
import data from "../Component/data/data.js";
import "./project.css"; 

class ProjectList extends Component {
  render() {
    return (
      <div >
        <h1>My Projects</h1>
        {data.map((post, id) => {
          return (
            <div className="project-div">
              <img src={post.img}></img>
              <h1>{post.title}</h1>
              <h1>{post.contain}</h1>
              <h1>{post.technology}</h1>
              <div>
                <a href={post.githublink}>
                  <button>Github</button>
                </a>
              </div>
              <div>
                <a href={post.livelink}>
                  <button>LiveLink</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
