import React, { useState } from "react";
import "./ModelsDropdown.scss";

import Dropdownicon from "../../../assets/icons/dropdown";
import Dropdowncar1 from "../../../assets/dropdowncars/dropdowncar1.png";
import Dropdowncar2 from "../../../assets/dropdowncars/dropdowncar2.png";
import Dropdowncar3 from "../../../assets/dropdowncars/dropdowncar3.png";
import Dropdowncar4 from "../../../assets/dropdowncars/dropdowncar4.png";
import Dropdowncar5 from "../../../assets/dropdowncars/dropdowncar5.png";
import Closeicon from "../../../assets/icons/close.svg";

import ModelDropdownBox1 from "./Modelinnerdropdowns/ModelDropdownBox1";
import ModelDropdownBox2 from "./Modelinnerdropdowns/ModelDropdownBox2";
import ModelDropdownBox3 from "./Modelinnerdropdowns/ModelDropdownBox3";
import ModelDropdownBox4 from "./Modelinnerdropdowns/ModelDropdownBox4";
import ModelDropdownBox5 from "./Modelinnerdropdowns/ModelDropdownBox5";


import Explorefirstimage from "../../../assets/dropdowncars/explorefirst.png";
import Exploresecondimage from "../../../assets/dropdowncars/exploretwo.png";
import Explorethirdimage from "../../../assets/dropdowncars/explorethree.png";
import ExploreModelDropwns1 from "./ExploreModelinnerdropdowns/ExploreModelDropwns1";
import ExploreModelDropwns2 from "./ExploreModelinnerdropdowns/ExploreModelDropwns2";
import ExploreModelDropwns3 from "./ExploreModelinnerdropdowns/ExploreModelDropwns3";



const ModelsDropdown = ({ isOpen, onClick, className }) => {
    const [openBox, setOpenBox] = useState(null);
    const [lastOpenBox, setLastOpenBox] = useState(null);

    const handleMouseEnter = (boxNumber) => {
        setOpenBox(boxNumber);
        setLastOpenBox(boxNumber);
    };

    const handleCloseClick = () => {
        onClick();
        setOpenBox(null);
        setLastOpenBox(null);
    };

    return (
        <div>
            <div className={`header-content ${className}`} onClick={onClick}>
                <span>MODELS</span>
                <Dropdownicon />
            </div>
            <div>
                {isOpen && (
                    <div className="ModelsDropdown-content">
                        <div className="ModelsDropdown-content-rl">
                            <div className="model-side-one">
                                <h1>Available models</h1>
                                <div className="ModelDropdown-cars-content-main">
                                    <div
                                        className={`ModelDropdown-car-box box1 ${openBox === 1 || lastOpenBox === 1 ? "ModelDropdown-car-box-active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(1)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar1} alt="Dropdowncar1" />
                                        </div>
                                        <p>Countryman S ALL4</p>
                                    </div>
                                    <div
                                        className={`ModelDropdown-car-box box2 ${openBox === 2 || lastOpenBox === 2 ? "ModelDropdown-car-box-active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(2)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar2} alt="Dropdowncar2" />
                                        </div>
                                        <p>JCW Countryman ALL4</p>
                                    </div>
                                    <div
                                        className={`ModelDropdown-car-box box3 ${openBox === 3 || lastOpenBox === 3 ? "ModelDropdown-car-box-active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(3)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar3} alt="Dropdowncar3" />
                                        </div>
                                        <p>Cooper 2 Door</p>
                                    </div>
                                    <div
                                        className={`ModelDropdown-car-box box4 ${openBox === 4 || lastOpenBox === 4 ? "ModelDropdown-car-box-active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(4)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar4} alt="Dropdowncar4" />
                                        </div>
                                        <p>Cooper S 4 Door</p>
                                    </div>
                                    <div
                                        className={`ModelDropdown-car-box box5 ${openBox === 5 || lastOpenBox === 5 ? "ModelDropdown-car-box-active" : ""}`}
                                        onMouseEnter={() => handleMouseEnter(5)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar5} alt="Dropdowncar5" />
                                        </div>
                                        <p>Convertible</p>
                                    </div>
                                </div>
                                <ModelDropdownBox1 isOpen={openBox === 1 || lastOpenBox === 1} />
                                <ModelDropdownBox2 isOpen={openBox === 2 || lastOpenBox === 2} />
                                <ModelDropdownBox3 isOpen={openBox === 3 || lastOpenBox === 3} />
                                <ModelDropdownBox4 isOpen={openBox === 4 || lastOpenBox === 4} />
                                <ModelDropdownBox5 isOpen={openBox === 5 || lastOpenBox === 5} />
                                <ExploreModelDropwns1 isOpen={openBox === 6 || lastOpenBox === 6} />
                                <ExploreModelDropwns2 isOpen={openBox === 7 || lastOpenBox === 7} />
                                <ExploreModelDropwns3 isOpen={openBox === 8 || lastOpenBox === 8} />
                            </div>
                            <div className="model-side-two">
                                <div className="Close-icon" onClick={handleCloseClick}>
                                    <img src={Closeicon} alt="Closeicon" />
                                </div>

                                <div className="Explore-model-main">
                                    <h1>EXPLORE</h1>
                                    <div className="Explore-model-inner-main">
                                        <div className={`ModelDropdown-car-box box6 ${openBox === 6 || lastOpenBox === 6 ? "ModelDropdown-car-box-active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(6)}>
                                            <div className="ModelDropdwon-car">
                                                <img src={Explorefirstimage} alt="Explorefirstimage" />
                                            </div>
                                            <p>2025 New MINI Family</p>
                                        </div>
                                        <div className={`ModelDropdown-car-box box7 ${openBox === 7 || lastOpenBox === 7 ? "ModelDropdown-car-box-active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(7)}>
                                            <div className="ModelDropdwon-car">
                                                <img src={Exploresecondimage} alt="Exploresecondimage" />
                                            </div>
                                            <p>John Cooper Works</p>
                                        </div>
                                        <div className={`ModelDropdown-car-box box8 ${openBox === 8 || lastOpenBox === 8 ? "ModelDropdown-car-box-active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(8)}>
                                            <div className="ModelDropdwon-car">
                                                <img src={Explorethirdimage} alt="Explorethirdimage" />
                                            </div>
                                            <p>Outgoing 2024 Models</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )}
            </div >
        </div >
    );
};

export default ModelsDropdown;