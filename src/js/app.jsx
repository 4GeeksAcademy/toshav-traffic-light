import React, { useState, useEffect } from "react";
import "./styles.css";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  
  return (
    <div className="traffic-light">
      <div
        className={`light red ${light === "red" ? "active" : ""}`}
        onClick={()=> setLight('red')}
      ></div>
      <div
        className={`light yellow ${light === "yellow" ? "active" : ""}`}
        onClick={()=> setLight('yellow')}
      ></div>
      <div
        className={`light green ${light === "green" ? "active" : ""}`}
        onClick={()=> setLight('green')}
      ></div>
    </div>
  );
};

export default TrafficLight
  