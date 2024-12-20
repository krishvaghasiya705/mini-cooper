import React from "react";
import "./Herobanner.scss";

import Herobannerimage from "../../../../assets/image/herobannerimage.avif";

function Herobanner() {
  return (
    <div>
      <div className="Herobanner-main">
        <div className="HerobannerBackgroundMain">
          <img src={Herobannerimage} alt="Herobannerimage" />
        </div>
        <div className="HerobannerDetailsMain">
          <div className="Herobanner-Container">
            <div className="Herobanner-content-main">
              <div>
                <span>SPECIAL OFFERS</span>
                <h1>RACE IN FOR EXCEPTIONAL LEASE AND FINANCE OFFERS.</h1>
                <p>The all-new MINI family has arrived! Drive off in the latest MINI Cooper 2 Door or MINI Countryman with exceptional lease and finance offers. Hurry in, offers end September 3, 2024.</p>
                <div className="Herobanner-buttons-main">
                  <button>VIEW OFFERS</button>
                  <button>SEARCH INVENTORY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herobanner;
