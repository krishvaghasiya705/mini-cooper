import React from 'react'
import "./Herobanner.scss";

import Herobannerimage from "../../../../assets/image/herobannerimage.avif"

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
                                <h1>MEET THE ALL-NEW MINI FAMILY.</h1>
                                <p>The all-new MINI family has arrived! Drive off in the latest MINI Cooper 2 Door or MINI Countryman with exceptional lease and finance offers. Hurry in, offers end July 31, 2024.</p>
                                <div className="Herobanner-buttons-main">
                                    <button>EXPLORE THE LINEUP</button>
                                    <button>VIEW OFFERS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herobanner;