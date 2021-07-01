import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <>
      <header className="center">
        <img src={logo} alt="img" />
        <h1>Dogs Zoon</h1>
      </header>
    </>
  );
};

export default Header;
