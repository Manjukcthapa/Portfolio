import React from "react";
import "./homepage.css";
function Skills() {
  return (
    <div>
      <h1 className="skills">Skills</h1>
      <div className="maindiv">
        <div className="seconddiv">
          <h3>Frontend</h3>
          <h4>HTML</h4>
          <p>css</p>
          <p>Java Scritp</p>
          <p>React</p>
          <p>Redux</p>
          <p>Bootstrape</p>
        </div>

        <div className="thirddiv">
          <h3>Backend</h3>
          <p>Node JS</p>
          <p>Sqlite3</p>
          <p>Postgres</p>
          <p>Pgadmin</p>
          <p>Database</p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
