import React from "react";
import "./ExploreModelDropwns1.scss";

import MiniBlueimage from "../../../../../assets/dropdowncars/bluemini.avif";
import MiniWhiteimage from "../../../../../assets/dropdowncars/whitemini.avif";
import { Link } from "react-router-dom";

const ExploreModelDropwns1 = ({ isOpen }) => (
    <div className={`ExploreModelDropwns1-one-drop-one box1 ${isOpen ? 'open' : ''}`}>
        <div className="ExploreModelDropwns1main">
            <div className="ExploreModelDropwns1boxsideone">
                <span>THE NEW MINI FAMILY</span>
                <h1>MEET YOUR NEXT MINI.</h1>
                <p>Step into a new world of wanderlust—one that’s MINIer than ever. Our next generation of models is a more immersive experience with breakthrough design that’s built for tomorrow but very much ready for today.</p>
                <button>explore the lineup</button>
            </div>
            <div className="ExploreModelDropwns1boxsidetwo">
                <div className="ExploreModelDropwns1boxsidetwoBluemini">
                    <img src={MiniBlueimage} alt="MiniBlueimage" />
                    <p>THE ALL-NEW MINI <br />COOPER S 4 DOOR</p>
                    <Link to={"/"} >learn more</Link>
                </div>

                <div className="ExploreModelDropwns1boxsidetwoWhitemini">
                    <img src={MiniWhiteimage} alt="MiniWhiteimage" />
                    <p>THE NEW ALL-ELECTRIC <br />MINI COUNTRYMAN SE ALL4</p>
                    <Link to={"/"} >learn more</Link>
                </div>
            </div>
        </div>
    </div>
);

export default ExploreModelDropwns1;