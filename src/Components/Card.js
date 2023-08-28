import React from "react";
// import present from "../images/tick.png";

function Card({ img, num, str }) {
  return (
    <div className="flex flex-align card">
      <div>
        <img src={img} className="card-img" alt="cards"></img>
      </div>
      <div>
        <p>
          <b>{num}</b>
        </p>
        <p className="gray">{str}</p>
      </div>
    </div>
  );
}

export default Card;
