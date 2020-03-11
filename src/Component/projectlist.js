import React, { Component } from "react"
import data from "../Component/data/data.js"

class ProjectList extends Component {
    render(){
        return(
           <div>
               <h1>hello</h1>
               {data.map((post, id) => {
                   return <div>
                       <img src={post.img}></img>
                       <h1>{post.contain}</h1>
                       <h1>{post.githublink}</h1>
                       <h1>{post.livelink}</h1>
                   </div>
               })

               }
           </div>
        )
    }
}

export default ProjectList