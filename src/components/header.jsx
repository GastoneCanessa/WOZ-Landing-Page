import { Navigation } from "./navigation";
import React from "react";
import { TypewriterText } from "./TypewriterText";
import { CalendlyPopup } from "./CalendlyPopup";


export const Header = (props) => {

  const titles = ["Surf", "Wing Foil", "Kite Surf", "Sup", "Pump Foil", "Surf Skate", "eFoil"];

  return (
    <header id="header">

      <div className="intro">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="https://videos.pexels.com/video-files/32583203/13893873_2560_1440_24fps.mp4" type="video/mp4" />
          Il tuo browser non supporta il video HTML5.
        </video>
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
      <div className="introtwo">
        <div className="introtwo-content">
          <div className="introtwo-text">
            <h2>Prenota ora, non perdere l’occasione di vivere un’esperienza unica!</h2>
          </div>
          <div className="introtwo-button">
            <CalendlyPopup />
          </div>
        </div>
      </div>
    </header>
  );
};
