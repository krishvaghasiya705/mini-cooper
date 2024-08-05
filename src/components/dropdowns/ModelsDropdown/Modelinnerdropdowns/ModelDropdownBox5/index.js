import React from "react";
import "./ModelDropdownBox5.scss";
import { Link } from "react-router-dom";


import Dropdowncarbg from "../../../../../assets/dropdowncars/dropdowncarbg5.jpg";
import Dropdowncar1 from "../../../../../assets/dropdowncars/dropdowncarforbg.jpg";

import Pricetagicon from "../../../../../assets/icons/pricetag.png";
import Bookmarkicon from "../../../../../assets/icons/bookmarkwithstar.png";


const ModelDropdownBox5 = ({ isOpen }) => (
    <div className={`ModelDropdowncar-one-drop-five box5 ${isOpen ? 'open' : ''}`}>
        <div className="Modelfive-backgroundmain">
            <div className="Modelfive-back-ground">
                <img src={Dropdowncarbg} alt="Dropdowncarbg" />
                <div className="Dropdowncar1">
                    <img src={Dropdowncar1} alt="Dropdowncar1" />
                </div>
            </div>

            <div className="Modelfive-content-main">
                <div className="Modelfive-container">
                    <h1>SLEEKER, SPORTIER, SUNNIER THAN EVER</h1>
                    <p>Starting at $35,700</p>
                    <p>MSRP as shown $39,645</p>
                </div>
            </div>
            <div className="Modelfive-side-nav-main">
                <div>
                    <button>EXPLORE ALL</button>
                    <button>BUILD YOUR OWN</button>

                    <div className="Current-inventory">
                        <Link to={"/"}>
                            <img src={Pricetagicon} alt="Pricetagicon" />
                            <p>Current Inventory</p>
                        </Link>
                    </div>
                    <div className="Shop-certified">
                        <Link to={"/"}>
                            <img src={Bookmarkicon} alt="Bookmarkicon" />
                            <p>Current Inventory</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ModelDropdownBox5;
