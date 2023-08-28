import React, { useState } from "react";
import Navbar from "./Navbar";
import data from "./data.js";
import Footer from "./Footer";

function Attendance() {
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleClick = (index) => {
    const updatedData = [...filteredData];
    updatedData[index].attendance = "Present";
    setFilteredData(updatedData);
    if (!clickedButtons.includes(index)) {
      setClickedButtons([...clickedButtons, index]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" flex justify-center flex-align search-div">
        <input
          className="search"
          type="text"
          placeholder="Search your Reg number here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // console.log(searchText);
            const filteredData = data.filter((res) =>
              res.regNo.includes(searchText)
            );
            setFilteredData(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <b className="flex justify-center black">Students List</b>
      <div className="attendance-table">
        <table>
          <tbody>
            <tr>
              <th className="th">SI. No</th>
              <th className="th">Name</th>
              <th className="th">Reg No</th>
              <th className="th">Mark your attendance here</th>
            </tr>

            {filteredData.map((res, index) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.regNo}</td>
                <td>
                  <button
                    // className={activeButton === index ? "active" : "btn-attendance"}
                    className={
                      clickedButtons.includes(index)
                        ? "active"
                        : "btn-attendance"
                    }
                    onClick={() => handleClick(index)}
                  >
                    {res.attendance}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Attendance;
