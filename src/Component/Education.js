import React from "react";
import "./education.css";

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <h3  className="edu-head">Lambda School of Computer Science</h3>
        <div className="education-header">
        <p className="edu-para">
          Lambda School is a 40 week Full-Time, All-Immersive online bootcamp.
          They break down by the week on what you learn, Units are then broken
          into 4 weeks. At the end of every 3 weeks, the students do a school
          wide build-week where students all over the school come together and
          build a project using the skills they learned over the last 4 weeks,
          repeating the process 4 times making the main portion 16 weeks long!
        </p>
        </div>
        <div className="education-header"> 
        <p className="edu-para">
          After that, students proceed to Lambda Labs where they work on a
          Full-Scale, Real-World Applications and finish them within 8 weeks.
          The beginning is dedicated to planning, then into building after week
          3.
        </p>
        </div>

        <div className="education-header">
        <p className="edu-para">
          Finally, students end in an 8 week Computer Science program. Here they
          cover: Intro to Python and OOP, Algorithms, Data Structures, Hash
          Tables and Blockchains, Graphs and Computer Architecture.
        </p>
        </div>
      </div>
    );
  }
}

export default Education;
