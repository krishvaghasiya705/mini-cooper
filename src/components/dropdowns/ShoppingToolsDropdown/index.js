import React from "react";
import "./dropdown.scss";
import Dropdownicon from "../../../assets/icons/dropdown";
import { Link } from "react-router-dom";

const ShoppingToolsDropdown = ({ isOpen, onClick, className }) => {
  return (
    <div className={isOpen ? "header-content-main-active" : "header-content-main"}>
      <div className={`header-content ${className}`} onClick={onClick}>
        <span>SHOPPING TOOLS</span>
        <Dropdownicon />
      </div>
      {isOpen && (
        <div className="Shopping-dropdown-main">
          <div className="Shopping-dropdown-side-one">
            <p>Explore Local Inventory</p>
            <h1>Find Your Next MINI Online</h1>
            <form>
              <label>Enter Your ZIP Code</label>
              <input type="number" placeholder="" />
              <div className="Form-buttons">
                <button>shop now</button>
                <button>shop pre-owned</button>
              </div>
            </form>
          </div>
          <div className="Shopping-dropdown-side-two">
            <div className="Shopping-dropdown-side-two-inner">
              <div className="Shopping-dropdown-side-two-inner-one">
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <p>Resources</p>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>MINI services</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Find A Dealer</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Schedule A Test Drive</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Estimate Your Trade-In</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Estimate Payment</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>MINI Connected</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Buy A MINI Online</span>
                  </Link>
                </div>
              </div>
              <div className="Shopping-dropdown-side-two-inner-one">
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <p>Offers & Financing</p>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Military Program</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Corporate Sales</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>MINI Financial Services</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Lease & Financing Plans</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Apply for Financing</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>Special Offers</span>
                  </Link>
                </div>
                <div className="Shopping-dropdown-side-two-inner-one-title">
                  <Link to={"/"}>
                    <span>MINI App</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingToolsDropdown;
