import React from "react";
import logo from "../images/logo.png";
import userIcon from "../images/user.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex navbar">
      <div className="flex flex-align">
        <img src={logo} className="logo" alt="logo"></img>
        <ul className="ul">
          <Link className="links" to="/">
            <li className="list-items">Overview</li>
          </Link>

          <li className="list-items">
            <Link className="links" to="/attendance">
              Manage Attendance
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-align user-data">
        <img src={userIcon} alt="user" className="user"></img>
        <p>Mohnaa Ghosh</p>
      </div>
    </div>
  );
}

export default Navbar;
