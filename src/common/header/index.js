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

export default function Header() {
  const [dropdowns, setDropdowns] = useState({
    models: false,
    electric: false,
    shoppingTools: false,
    community: false,
  });

  useEffect(() => {
    const body = document.body;
    if (Object.values(dropdowns).some(isOpen => isOpen)) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [dropdowns]);

  const toggleDropdown = (key) => {
    setDropdowns((prevState) => {
      const newDropdowns = { models: false, electric: false, shoppingTools: false, community: false };
      newDropdowns[key] = !prevState[key];
      return newDropdowns;
    });
  };

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
            <ModelsDropdown
              isOpen={dropdowns.models}
              onClick={() => toggleDropdown("models")}
            />
            <ElectricDropdown
              isOpen={dropdowns.electric}
              onClick={() => toggleDropdown("electric")}
            />
            <div className="header-content">
              <span>BUILD</span>
            </div>
            <ShoppingToolsDropdown
              isOpen={dropdowns.shoppingTools}
              onClick={() => toggleDropdown("shoppingTools")}
            />
            <CommunityDropdown
              isOpen={dropdowns.community}
              onClick={() => toggleDropdown("community")}
            />
          </div>
          <div className="header-content-two">
            <div className="header-certified-content">
              <img src={Certifiedlogo} alt="Certifiedlogo" />
              <span>Certified Pre-Owned</span>
            </div>
            <div className="header-certified-contentsc">
              <Usericon />
              <span>Login</span>
              <div className="dropdownicon">
                <Dropdownicon />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}