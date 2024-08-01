import React from "react";
import "./ModelDropdownBox3.scss";

import dropdowncarbg3 from "../../../../../assets/dropdowncars/dropdowncarbg3.avif"
import { Link } from "react-router-dom";

const ModelDropdownBox3 = ({ isOpen }) => (
    <div className={`ModelDropdowncar-one-drop-three box1 ${isOpen ? 'open' : ''}`}>
        <div className="ModelDropdowncar-one-drop1">
            <div className="ModelDropdowncar-one-drop1-bg">
                <img src={dropdowncarbg3} alt="dropdowncarbg3" />
            </div>
            <div className="Dropdownbox1-inner-main">
                <div className="Dropdownbox1-inner-container">
                    <div className="Dropdown-content-box1">
                        <div>
                            <h1>THE STREET-
                                <br />
                                LEGAL GO-KART.</h1>
                            <p>Starting MSRP</p>
                            <div className="price-text"><span>$28,950</span></div>
                            <div className="MSRP-div">
                                <p>MSRP as shown <span>$35,895</span></p>
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

export default ModelDropdownBox3;