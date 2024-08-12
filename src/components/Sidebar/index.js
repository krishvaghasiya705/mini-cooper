import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div>
            <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <div className="sidebar-content">
                    {/* <button onClick={toggleSidebar}>Close</button> */}
                    <div className="sidebar-content-details-main">
                        <div className="sidebar-content-details">
                            <p>ACCOUNT LOGIN</p>
                        </div>
                        <div className="sidebar-content-details">
                            <Link to={"/"}>My Garage</Link>
                        </div>
                        <div className="sidebar-content-details">
                            <Link to={"/"}>MINI Financial Services - Owners Lounge</Link>
                        </div>
                        <div className="sidebar-content-details">
                            <Link to={"/"}>MINI App</Link>
                        </div>
                    </div>

                    <div className="sidebar-content-details-main">
                        <div className="sidebar-content-details">
                            <p>OWNER RESOURCES</p>
                        </div>
                        <div className="sidebar-content-details">
                            <Link to={"/"}>Owner’s Manuals</Link>
                        </div>
                        <div className="sidebar-content-details">
                            <Link to={"/"}>Warranty & Maintenance</Link>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <div className="sidebar-main-body-background-overlay" onClick={toggleSidebar}></div>}
        </div>
    );
}
