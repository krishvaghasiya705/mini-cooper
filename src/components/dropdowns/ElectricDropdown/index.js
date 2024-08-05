import React from "react";
import "./dropdown.scss";
import Dropdownicon from "../../../assets/icons/dropdown";

const ElectricDropdown = ({ isOpen, onClick, className }) => {
    return (
        <div className={`header-content ${className}`} onClick={onClick}>
            <span>ELECTRIC</span>
            <Dropdownicon />
            {isOpen && <div className="dropdown-content">Electric Content</div>}
        </div>
    );
};

export default ElectricDropdown;