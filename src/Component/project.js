import React from "react";


class Projects extends React.Component {

    render() {
    return(
  <div>
      <div>
    <h2>Picasso</h2>
    </div>
    <div>
      <p>
        This was the project I was assigned on my first build week at Lambda
        School. My part of this was to create a marketing page that linked over
        via a button to a React app created by the Front-End and Back-End
        Engineers. On the Home tab, I designed a marketing page to 'sell our
        app' to the consumer. 
        <br />
        <br />
        On the About page, I was given the chance to write a statement, which
        was submitted by the team. I added real Github links, and used the
        photos from Github as well. I enjoyed building the accordion. It is a
        reusable accordion in the about page of my website that takes in an
        image, title, name, and bio. With all components, the accordion
        successfully hides and shows the appropriate content at the appropriate
        time.
      </p>
    </div>
    <div>
      <a href="https://github.com/buildweekpicasso/manjuLanding">GitHub</a>
      <a href="https://picasso-manju.now.sh/">Live Site</a>
    </div>
    </div>
    
    )
    }
  
}

export default Projects;
