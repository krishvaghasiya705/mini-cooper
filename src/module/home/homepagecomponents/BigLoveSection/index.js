import React from "react";
import "./BigLoveSection.scss";

import BigLoveVideo from "../../../../assets/biglovevideo/Big Love - PFA edit (no sandwhich) 1280x750_2.mp4";

function BigLoveSection() {
  return (
    <div className="Big-Love-Section-main">
      <video src={BigLoveVideo} autoPlay loop muted></video>
    </div>
  );
}

export default BigLoveSection;