import React from "react";
import "./dropdown.scss";
import Dropdownicon from "../../../assets/icons/dropdown";

const CommunityDropdown = ({ isOpen, onClick, className }) => {
    return (
        <div>
            <div className={`header-content ${className}`} onClick={onClick}>
                <span>COMMUNITY</span>
                <Dropdownicon />
            </div>
            {isOpen && <div className="Community-dropdown-content">
                <div className="Community-dropdown">
                    <div className="Community-dropdown-main-flx">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default CommunityDropdown;