import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

function NavBar() {
  return (
    <div >
      <nav
        id="nbar"
        className="navbar navbar-light nb "
        style={{
          justifyContent: "flex-start",
          position: "fixed"
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div
          type="button"
          // className="btn btn-outline-info"
          className="nItem"

          onClick={() => scrollTo("#top")}
  
        >
          About
        </div>
        &nbsp; &nbsp;|&nbsp;&nbsp;&nbsp;
        <div
          type="button"
          // className="btn btn-outline-info"
          className="nItem"
          onClick={() => scrollTo("#education")}
        >
          Education
        </div>
        &nbsp; &nbsp;|&nbsp;&nbsp;&nbsp;
        <div
          type="button"
          // className="btn btn-outline-info"
          className="nItem"
          onClick={() => scrollTo("#skill")}
        >
          Skills
        </div>
        &nbsp; &nbsp;|&nbsp;&nbsp;&nbsp;
        <div
          type="button"
          // className="btn btn-outline-info"
          className="nItem"
          onClick={() => scrollTo("#experience")}
        >
          Experiences
        </div>
        &nbsp; &nbsp;|&nbsp;&nbsp;&nbsp;
        <div
          type="button"
          // className="btn btn-outline-info"
          className="nItem"
          onClick={() => scrollTo("#project")}
        >
          Projects
        </div>
        
      </nav>
    </div>
  );
}

export default NavBar;
