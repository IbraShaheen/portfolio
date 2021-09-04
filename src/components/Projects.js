import React from "react";

function Projects() {
  return (
    <center id="project">
      <div className="card mb-3" style={{ maxWidth: "98%" }}>
        <div className="row no-gutters">
          <div className="col-md-4"></div>

          <div className="card-body">
            <br />

            <p className="card-title">PROJECTS</p>
            <br />
            <h3>Guide book</h3>
            <p className="card-text about">
              {" "}
              Guide book is created to help you to find and book your tour guide
              for your next trip, it was built using React.JS and Tailwind for
              the front-end, while for the back-end we used Express and MongoDB
              as the database.
            </p>
            <br/>
          </div>
        </div>
      </div>
      ‏
    </center>
  );
}

export default Projects;
