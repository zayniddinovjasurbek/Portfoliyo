  import React from "react";
  import "./Main.css";
  import CV from "./Black Modern Professional Resume (2).pdf"

  const Main = () => {
    return (
      <div className="main-container">
        <div className="main-info">
          <h2>Hi, I am <br/> Zayniddinov Jasurbek</h2>
          <p>Frontend Developer</p>
          <span className="main-button">
            <a href={CV} download> <button className="Download">Download CV</button></a>
           
            <button className="Learn">Learn More</button>
          </span>
        </div>
        <div className="main-img">
        
        </div>
      </div>
    );
  };

  export default Main;
