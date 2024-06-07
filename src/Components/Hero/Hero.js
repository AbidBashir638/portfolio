import React from "react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building degital experiences that inspire</h2>
        <p>
          passinate fronend developer | Transforming ideas inti seemless and
          visually stuning web solution
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="assests/image/logo.jpg" />
          </div>
          <img src="assests/image/logo512.png" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="assests/image/CSS3.svg" />
          </div>
          <div className="tech-icon">
            <img src="assests/image/javaScript.svg" />
          </div>
          <div className="tech-icon">
            <img src="assests/image/React.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};
