import React from "react";
import "./dropdown.scss";
import Dropdownicon from "../../../assets/icons/dropdown";

import SecondDropdownbackgroundimage from "../../../assets/dropdowncars/secondropdownminicooperbqackground.webp";
import Miniusaevicon from "../../../assets/icons/MINIUSAEVlogo.svg";
import { Link } from "react-router-dom";

const ElectricDropdown = ({ isOpen, onClick, className }) => {
  return (
    <div className={isOpen ? "header-content-main-active" : "header-content-main"}>
      <div className={`header-content ${className}`} onClick={onClick}>
        <span>ELECTRIC</span>
        <Dropdownicon />
      </div>
      <div>
        {isOpen && (
          <div className="Second-Dropdown-Main">
            <div className="Second-Dropdown-Main-rl-main">
              <div className="Second-dropdown-background-image">
                <img src={SecondDropdownbackgroundimage} alt="SecondDropdownbackgroundimage" />
              </div>
              <div className="Second-dropdown-ab-main">
                <div>
                  <div className="Mini-usa-ev-logo">
                    <img src={Miniusaevicon} alt="Miniusaevicon" />
                  </div>
                  <h1>ELECTRIC BEYOND EXPECTATIONS.</h1>
                  <div className="eva-buttons-main">
                    <div className="buttons-flx-one">
                      <button>explore mini electric</button>
                      <div>
                        <h2>Electric Hardtop 2-Door</h2>
                        <p>
                          A stylish and sustainable all-electric hatchback. <span>Price as shown: $36,700</span>
                        </p>
                        <Link to={"/"}>learn more</Link>
                      </div>
                    </div>
                    <div className="buttons-flx-two">
                      <button>build your own</button>
                      <h2>$30,900</h2>
                      <p>Starting MSRP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectricDropdown;
