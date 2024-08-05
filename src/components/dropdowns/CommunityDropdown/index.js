import React from "react";
import "./dropdown.scss";
import Dropdownicon from "../../../assets/icons/dropdown";

const CommunityDropdown = ({ isOpen, onClick, className }) => {
    return (
        <div className={`header-content ${className}`} onClick={onClick}>
            <span>COMMUNITY</span>
            <Dropdownicon />
            {isOpen && <div className="dropdown-content">Community Content</div>}
        </div>
    );
};

export default CommunityDropdown;