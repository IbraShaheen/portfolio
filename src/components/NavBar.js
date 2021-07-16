import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

function NavBar() {
  return (
    <div >
      <nav
        id="nbar"
        className="navbar navbar-light nb "
        style={{
          backgroundColor: "black",
          justifyContent: "flex-start",
          boxShadow: "3px 3px 10px cyan",
          position: "fixed",
          zIndex: "2",
          width: "100%",
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div
          type="button"
          // className="btn btn-outline-info"
          className="nItem"

          onClick={() => scrollTo("#about")}
  
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
          Experience
        </div>
        &nbsp; &nbsp;|&nbsp;&nbsp;&nbsp;
        <div
          type="button"
          // className="btn btn-outline-info"
          className="nItem"
          onClick={() => scrollTo("#project")}
        >
          Project
        </div>
        
      </nav>
    </div>
  );
}

export default NavBar;
