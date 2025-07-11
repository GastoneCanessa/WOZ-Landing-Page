import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default">
      <div className="">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            WAY OUT ZONE
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="" className="page-scroll">
                Wing
              </a>
            </li>
            <li>
              <a href="" className="page-scroll">
                Skate
              </a>
            </li>
              <li>
              <a href="" className="page-scroll">
                Kite
              </a>
            </li>
              <li>
              <a href="" className="page-scroll">
                Surf
              </a>
            </li>
              <li>
              <a href="" className="page-scroll">
                eFoil
              </a>
            </li>
            <li>
              <a href="" className="page-scroll">
                Pumping
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            {/* <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li> */}
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
