import React from "react";
import "./ModelDropdownBox2.scss";

import dropdowncarbg2 from "../../../../../assets/dropdowncars/dropdowncarbg2.avif"
import { Link } from "react-router-dom";


const ModelDropdownBox2 = ({ isOpen }) => (
    <div className={`ModelDropdowncar-one-drop-two box2 ${isOpen ? 'open' : ''}`}>
        <div className="ModelDropdowncar-one-drop1">
            <div className="ModelDropdowncar-one-drop1-bg">
                <img src={dropdowncarbg2} alt="dropdowncarbg2" />
            </div>
            <div className="Dropdownbox1-inner-main">
                <div className="Dropdownbox1-inner-container">
                    <div className="Dropdown-content-box1">
                        <div>
                            <h1>ROOTED IN RACING.</h1>
                            <p>Starting MSRP</p>
                            <div className="price-text"><span>$46,900</span></div>
                            <div className="MSRP-div">
                                <p>MSRP as shown <span>$48,150</span></p>
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

export default ModelDropdownBox2;
