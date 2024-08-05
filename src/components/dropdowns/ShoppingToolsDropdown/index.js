import React from "react";
import "./dropdown.scss";
import Dropdownicon from "../../../assets/icons/dropdown";

const ShoppingToolsDropdown = ({ isOpen, onClick, className }) => {
    return (
        <div className={`header-content ${className}`} onClick={onClick}>
            <span>SHOPPING TOOLS</span>
            <Dropdownicon />
            {isOpen && <div className="dropdown-content">Shopping Tools Content</div>}
        </div>
    );
};

export default ShoppingToolsDropdown;