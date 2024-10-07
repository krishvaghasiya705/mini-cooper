import React from "react";
import "./minihighlightsection.scss";

import Minihighlightslider from "./Minihighlightslidermain";

function Minihighlightsection() {

  return (
    <div className="Minihighlightsection-main">
      <div className="Minihighlightsection-container">
        <div className="Minihighlightsection-title">
          <p>MINI HIGHLIGHTS</p>
          <h1>So MINI reasons to get one.</h1>
        </div>

        <Minihighlightslider />
      </div>
    </div>
  );
}

export default Minihighlightsection;
