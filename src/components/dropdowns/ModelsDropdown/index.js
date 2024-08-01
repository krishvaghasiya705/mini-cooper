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

const ModelsDropdown = ({ isOpen, onClick }) => {
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
            <div className="header-content" onClick={onClick}>
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
                                        className="ModelDropdown-car-box box1"
                                        onMouseEnter={() => handleMouseEnter(1)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar1} alt="Dropdowncar1" />
                                        </div>
                                        <p>Countryman S ALL4</p>
                                    </div>
                                    <div
                                        className="ModelDropdown-car-box box2"
                                        onMouseEnter={() => handleMouseEnter(2)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar2} alt="Dropdowncar2" />
                                        </div>
                                        <p>JCW Countryman ALL4</p>
                                    </div>
                                    <div
                                        className="ModelDropdown-car-box box3"
                                        onMouseEnter={() => handleMouseEnter(3)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar3} alt="Dropdowncar3" />
                                        </div>
                                        <p>Cooper 2 Door</p>
                                    </div>
                                    <div
                                        className="ModelDropdown-car-box box4"
                                        onMouseEnter={() => handleMouseEnter(4)}
                                    >
                                        <div className="ModelDropdwon-car">
                                            <img src={Dropdowncar4} alt="Dropdowncar4" />
                                        </div>
                                        <p>Cooper S 4 Door</p>
                                    </div>
                                    <div
                                        className="ModelDropdown-car-box box5"
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
                            </div>
                            <div className="model-side-two">
                                <div className="Close-icon" onClick={handleCloseClick}>
                                    <img src={Closeicon} alt="Closeicon" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModelsDropdown;