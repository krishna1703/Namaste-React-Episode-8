import React, { useEffect } from "react";
import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link, To } from "react-router-dom";

const Header = () => {

  const [login, Setlogin] = useState("Login")



  return (
    <div className="header">
      <div className="food-logo">
        <img src={LOGO_LINK} />
      </div>
      <div>

      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li> 
          <Link to="/cart">cart</Link>
          </li>


          <button className="log-in" onClick={() => {
            login == "Login" ? Setlogin("Logout") : Setlogin("Login")

          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
