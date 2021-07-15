import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

function NavBar() {
  return (
    <div>
      <nav
      id="nbar"
        className="navbar navbar-light nb"
        style={{
          backgroundColor: "black",
          justifyContent: "flex-end",
          boxShadow:"3px 3px 10px cyan",
          position: "fixed",
          zIndex: "2",
          width: "100%",
        }}
      >
            <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => scrollTo("#project")}
        >
          Projects
        </button>   

        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => scrollTo("#experience")}
        >
          Experience
        </button>


        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => scrollTo("#skill")}
        >
          Skills
        </button>

        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => scrollTo("#education")}
        >
          Education
        </button>

        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => scrollTo("#about")}
        >
          About
        </button>
      </nav>
    </div>
  );
}

export default NavBar;