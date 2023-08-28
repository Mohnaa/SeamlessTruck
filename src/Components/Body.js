import React from "react";
import Card from "./Card";

function Body() {
  return (
    <div className="body">
      <div className="flex bgcolor justify-center">
        <Card img="./user.png" num="20" str="TOTAL STUDENTS" />
        <Card img="./tick.png" num="15" str="PRESENT TODAY" />
        <Card img="./cross.png" num="05" str="ABSENT TODAY" />
      </div>
      <div className="graphs flex justify-center flex-align">
        <div className="text-align">
          <img
            src="./total-att.png"
            className="line-chart"
            alt="Total Attendance Report"
          ></img>
        </div>

        <div className="pie">
          <img
            src="./pie-chart.png"
            className="pie-chart"
            alt="Students By Gender"
          ></img>
        </div>
      </div>

      <div className="flex flex-align justify-center body-bottom">
        <div className="attendant">
          <h4 className="align">Top 5 Attendant</h4>
          <div className="flex">
            <div className="mr">
              <p>Mohnaa</p>
              <p>Arya</p>
              <p>Rishita</p>
              <p>Saloni</p>
              <p>Swati</p>
            </div>
            <div className="mr">
              <p>RA2011003010108</p>
              <p>RA2311003011210</p>
              <p>RA2011003010567</p>
              <p>RA2011003010345</p>
              <p>RA20110030101567</p>
            </div>
            <div>
              <p>100%</p>
              <p>100%</p>
              <p>50%</p>
              <p>67%</p>
              <p>56%</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="att-perc.png"
            className="bar-graph"
            alt="Attendance Percentage"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Body;
