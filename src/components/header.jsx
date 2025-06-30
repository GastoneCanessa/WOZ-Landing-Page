import { Navigation } from "./navigation";
import React from "react";
import { TypewriterText } from "./TypewriterText";

export const Header = (props) => {
  
  const titles = ["Surf", "Wing Foil", "Kite Surf", "Sup", "Pump Foil", "Surf Skate"];

  return (
    <header id="header">
      
      <div className="intro">
        <Navigation />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <TypewriterText words={titles} typingSpeed={150} pause={1000} />
                </h1>
                {/* <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1> */}
                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
