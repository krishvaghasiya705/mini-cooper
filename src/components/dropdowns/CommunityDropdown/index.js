import React from "react";
import "./dropdown.scss";
import { Link } from "react-router-dom";
import Dropdownicon from "../../../assets/icons/dropdown";

import Globalrootimage from "../../../assets/dropdowncars/globalrootimage.png";
import Whyminiimage from "../../../assets/dropdowncars/whyminiimage.png";

const CommunityDropdown = ({ isOpen, onClick, className }) => {
  return (
    <div className={isOpen ? "header-content-main-active" : "header-content-main"}>
      <div className={`header-content ${className}`} onClick={onClick}>
        <span>COMMUNITY</span>
        <Dropdownicon />
      </div>
      {isOpen && (
        <div className="Community-dropdown-content">
          <div className="Community-dropdown">
            <div className="Community-dropdown-main-flx">
              <div className="Community-dropdown-items-one">
                <div className="Community-dropdown-items-one-card-one">
                  <img src={Globalrootimage} alt="Globalrootimage" />
                  <div className="Community-dropdown-items-one-card-one-details">
                    <p>MINI heritage</p>
                    <div className="roots-pera-main">
                      <h2>Our Roots to the Road </h2>
                    </div>

                    <div className="Learn-button-main">
                      <Link to={"/"}>
                        <button>learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="Community-dropdown-items-one-card-one" id="Community-dropdown-items-one-card-two">
                  <img src={Whyminiimage} alt="Whyminiimage" />
                  <div className="Community-dropdown-items-one-card-one-details">
                    <p>ABOUT US</p>
                    <div className="roots-pera-main">
                      <h2>Why MINI</h2>
                    </div>

                    <div className="Learn-button-main">
                      <Link to={"/"}>
                        <button>explore</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Shopping-dropdown-side-two">
                <div className="Shopping-dropdown-side-two-inner">
                  <div className="Shopping-dropdown-side-two-inner-one">
                    <div className="Shopping-dropdown-side-two-inner-one-title">
                      <p>WHY MINI</p>
                    </div>
                    <div className="Shopping-dropdown-side-two-inner-one-title">
                      <Link to={"/"}>
                        <span>Find A Motoring Club</span>
                      </Link>
                    </div>
                    <div className="Shopping-dropdown-side-two-inner-one-title">
                      <Link to={"/"}>
                        <span>MINI Takes The States</span>
                      </Link>
                    </div>
                    <div className="Shopping-dropdown-side-two-inner-one-title">
                      <Link to={"/"}>
                        <span>Parts and Accessories</span>
                      </Link>
                    </div>
                    <div className="Shopping-dropdown-side-two-inner-one-title">
                      <Link to={"/"}>
                        <span>MINI Motorsports</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityDropdown;
