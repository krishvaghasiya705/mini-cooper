import React from "react";
import "./ExploreModelDropwns2.scss";

import dropdowncarbg1 from "../../../../../assets/dropdowncars/dropdowncarbg1.avif"
import { Link } from "react-router-dom";

const ExploreModelDropwns2 = ({ isOpen }) => (
    <div className={`ModelDropdowncar-one-drop-one box1 ${isOpen ? 'open' : ''}`}>
        <div className="ModelDropdowncar-one-drop1">
            <div className="ModelDropdowncar-one-drop1-bg">
                <img src={dropdowncarbg1} alt="dropdowncarbg1" />
            </div>
            <div className="Dropdownbox1-inner-main">
                <div className="Dropdownbox1-inner-container">
                    <div className="Dropdown-content-box1">
                        <div>
                            <h1>THE ALL-WHEEL, ALL-STAR.</h1>
                            <p>Starting MSRP</p>
                            <div className="price-text"><span>$38,900</span></div>
                            <div className="MSRP-div">
                                <p>MSRP as shown <span>$39,800</span></p>
                            </div>
                        </div>

                        <div className="expore-button-and-build-button-main">
                            <div>
                                <button>EXPLORE</button>
                                <button>BUILD YOUR OWN</button>
                                <div className="View-link">
                                    <Link to={"/"}>View Current Inventory</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ExploreModelDropwns2;