import React from "react";
import "./ModelDropdownBox4.scss";

import dropdowncarbg4 from "../../../../../assets/dropdowncars/dropdowncarbg4.avif"
import { Link } from "react-router-dom";

const ModelDropdownBox4 = ({ isOpen }) => (
    <div className={`ModelDropdowncar-one-drop-four box4 ${isOpen ? 'open' : ''}`}>
        <div className="ModelDropdowncar-one-drop1">
            <div className="ModelDropdowncar-one-drop1-bg">
                <img src={dropdowncarbg4} alt="dropdowncarbg4" />
            </div>
            <div className="Dropdownbox1-inner-main">
                <div className="Dropdownbox1-inner-container">
                    <div className="Dropdown-content-box1">
                        <div>
                            <h1>MINI HANDLING,
                                <br />
                                MORE HANDLES.</h1>
                            <p>Starting MSRP</p>
                            <div className="price-text"><span>$33,200</span></div>
                            <div className="MSRP-div">
                                <p>MSRP as shown <span>$40,300</span></p>
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

export default ModelDropdownBox4;
