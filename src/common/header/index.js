import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

import Mainlogo from "../../assets/image/mainlogo.svg";
import Certifiedlogo from "../../assets/icons/certifiedlogo.svg";
import Usericon from "../../assets/icons/usericon";
import ModelsDropdown from "../../components/dropdowns/ModelsDropdown";
import ElectricDropdown from "../../components/dropdowns/ElectricDropdown";
import ShoppingToolsDropdown from "../../components/dropdowns/ShoppingToolsDropdown";
import CommunityDropdown from "../../components/dropdowns/CommunityDropdown";
import Dropdownicon from "../../assets/icons/dropdown";
import Sidebar from "../../components/Sidebar";

export default function Header() {
  const [dropdowns, setDropdowns] = useState({
    models: false,
    electric: false,
    shoppingTools: false,
    community: false,
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (Object.values(dropdowns).some((isOpen) => isOpen) || isSidebarOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [dropdowns, isSidebarOpen]);

  const toggleDropdown = (key) => {
    setDropdowns((prevState) => {
      const newDropdowns = {
        models: false,
        electric: false,
        shoppingTools: false,
        community: false,
      };
      newDropdowns[key] = !prevState[key];
      return newDropdowns;
    });
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    setDropdowns({
      models: false,
      electric: false,
      shoppingTools: false,
      community: false,
    });
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      models: false,
      electric: false,
      shoppingTools: false,
      community: false,
    });
  };

  const isDropdownOpen = Object.values(dropdowns).some((isOpen) => isOpen);

  return (
    <div className="Header">
      <header>
        <div className="main-logo">
          <Link to={"/"}>
            <div>
              <div></div>
              <img src={Mainlogo} alt="Mainlogo" />
            </div>
          </Link>
        </div>

        <div className="header-main-content">
          <div className="header-content-one">
            <ModelsDropdown isOpen={dropdowns.models} onClick={() => toggleDropdown("models")} className={dropdowns.models ? "header-content-active" : ""} />
            <ElectricDropdown isOpen={dropdowns.electric} onClick={() => toggleDropdown("electric")} className={dropdowns.electric ? "header-content-active" : ""} />
            <div className="header-content-main">
              <div className="header-content">
                <span>BUILD</span>
              </div>
            </div>
            <ShoppingToolsDropdown isOpen={dropdowns.shoppingTools} onClick={() => toggleDropdown("shoppingTools")} className={dropdowns.shoppingTools ? "header-content-active" : ""} />
            <CommunityDropdown isOpen={dropdowns.community} onClick={() => toggleDropdown("community")} className={dropdowns.community ? "header-content-active" : ""} />
          </div>
          <div className="header-content-two">
            <div className="header-certified-content">
              <img src={Certifiedlogo} alt="Certifiedlogo" />
              <span>Certified Pre-Owned</span>
            </div>
            <div className={`header-certified-contentsc-main ${isSidebarOpen ? "header-certified-contentsc-main-active" : ""}`}>
              <div className={`header-certified-contentsc ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}>
                <div className="usericon">
                  <Usericon />
                </div>
                <span>Login</span>
                <div className="dropdownicon">
                  <Dropdownicon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`dropdown-overlay ${isDropdownOpen ? "active" : ""}`} onClick={closeAllDropdowns}></div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
