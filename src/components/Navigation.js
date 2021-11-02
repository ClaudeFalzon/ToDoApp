import React from "react";
import logo from "../images/logo.png";

export default function Navigation(props) {
  return (
    <nav>
      <div className="left">
        <img src={logo} alt="logo image" onClick={props.switchPageToHome} />
      </div>
      <div className="right">
        <a onClick={props.switchPageToAbout}>About</a>
      </div>
    </nav>
  );
}
