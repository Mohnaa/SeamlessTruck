import React from "react";
import user from "../images/dp.jpg";
import Card from "./Card";
import Body from "./Body";

function Header() {
  return (
    <div>
      <div className="flex flex-align header">
        <img className="user-pic" src={user} alt="User"></img>
        <div>
          <p className="greet">Hello User! 👋🏻</p>
          <p className="gray">Welcome to SeamlessTrack! <br></br>Have a Wonderful Day Ahead.</p>
        </div>
      </div>
      <Body />
    </div>
  );
}

export default Header;
