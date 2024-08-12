import React from "react";
import "./ExploreModelDropwns3.scss";

import Minicooperracesimage from "../../../../../assets/dropdowncars/aallcarsinoneframe.avif";
const ExploreModelDropwns3 = ({ isOpen }) => (
    <div className={`ExploreModelDropwns2-one-drop-one box1 ${isOpen ? 'open' : ''}`}>
        <div className="ModelDropdowncar-one-drop1">
            <div className="ModelDropdowncar-one-drop1-bg">
                <img src={Minicooperracesimage} alt="Minicooperracesimage" />
            </div>
            <div className="Dropdownbox1-inner-main">
                <div className="Dropdown-content-box1">
                    <div className="Dropdown-content1">
                        <h1>EXPLORE OUTGOING 2024 models</h1>
                    </div>
                    <div className="Dropdown-content2">
                        <button>view models</button>
                        <button>view inventory</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ExploreModelDropwns3;