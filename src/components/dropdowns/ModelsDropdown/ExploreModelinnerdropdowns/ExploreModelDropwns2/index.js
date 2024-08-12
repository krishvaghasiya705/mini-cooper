import React from "react";
import "./ExploreModelDropwns2.scss";

import Minicooperracesimage from "../../../../../assets/dropdowncars/miniracescars.jpg";
import Jcwlogo from "../../../../../assets/dropdowncars/jcwlogo.png";

const ExploreModelDropwns2 = ({ isOpen }) => (
    <div className={`ExploreModelDropwns2-one-drop-one box1 ${isOpen ? 'open' : ''}`}>
        <div className="ModelDropdowncar-one-drop1">
            <div className="ModelDropdowncar-one-drop1-bg">
                <img src={Minicooperracesimage} alt="Minicooperracesimage" />
            </div>
            <div className="Dropdownbox1-inner-main">
                <div className="Dropdown-content-box1">
                    <div className="Dropdown-content1">
                        <img src={Jcwlogo} alt="Jcwlogo" />
                        <h1>GET YOUR HEART RACING</h1>
                    </div>
                    <div className="Dropdown-content2">
                        <button>see the full linup</button>
                        <button>view inventory</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ExploreModelDropwns2;