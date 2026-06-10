import React from "react";

function Counters({ total, completed, pending }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div className="counter-box">
        <h6>Total Tasks</h6>
        <h3 style={{ color: "#c77dff" }}>{total}</h3>
      </div>
      <div className="counter-box" style={{ background: "#7b2cbf" }}>
        <h6>Completed Tasks</h6>
        <h3 style={{ color: "#d1d1d1" }}>{completed}</h3>
      </div>
      <div className="counter-box">
        <h6>Pending Tasks</h6>
        <h3 style={{ color: "#c77dff" }}>{pending}</h3>
      </div>
    </div>
  );
}

export default Counters;
