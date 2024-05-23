import React, { useState, useEffect } from "react";


const TrafficLight = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const changeLight = () => {
      setLight(prevLight => {
        if (prevLight === "red") return "yellow";
        if (prevLight === "yellow") return "green";
        return "red";
      });
    };

    const interval = setInterval(changeLight, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container text-center traffic-light-container">
      <div className="traffic-light">
        <div className="black-container">
          <div className={`light red ${light === "red" ? "active" : ""}`}></div>
          <div className={`light yellow ${light === "yellow" ? "active" : ""}`}></div>
          <div className={`light green ${light === "green" ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
