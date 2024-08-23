import React, { useState } from "react";
import "./CarchangerSection.scss";

import CarImageone from "../../../../assets/Exploreimages/countrymanminicooper1.png";
import CarImageTwo from "../../../../assets/Exploreimages/countrymanminicooper2.png";
import CarImageThree from "../../../../assets/Exploreimages/countrymanminicooper3.png";
import CarImageFour from "../../../../assets/Exploreimages/countrymanminicooper4.png";
import CarImageFive from "../../../../assets/Exploreimages/countrymanminicooper5.png";

import Countrymanminicooperinterior1 from "../../../../assets/Exploreimages/countrymanminicooperinterior1.jpg";
import Countrymanminicooperexterior2 from "../../../../assets/Exploreimages/countrymanminicooperinterior2.jpg";
import Countrymanminicooperexterior3 from "../../../../assets/Exploreimages/countrymanminicooperinterior3.jpg";
import Countrymanminicooperexterior4 from "../../../../assets/Exploreimages/countrymanminicooperinterior4.jpg";
import Countrymanminicooperexterior5 from "../../../../assets/Exploreimages/countrymanminicooperinterior5.jpg";

function Carchangersection() {
  const [activeCar, setActiveCar] = useState("one");
  const [view, setView] = useState("Exterior");

  const carImages = {
    one: CarImageone,
    two: CarImageTwo,
    three: CarImageThree,
    four: CarImageFour,
    five: CarImageFive,
  };

  const backgroundColors = {
    one: "#BBD780",
    two: "#003016",
    three: "#D78A30",
    four: "#57C4E5",
    five: "#123F94",
  };

  const interiorImages = {
    one: Countrymanminicooperinterior1,
    two: Countrymanminicooperexterior2,
    three: Countrymanminicooperexterior3,
    four: Countrymanminicooperexterior4,
    five: Countrymanminicooperexterior5,
  };

  const carDetails = {
    one: {
      title: "Countryman S ALL4",
      title1: "ALL-WHEEL, ALL-STAR.",
      price: "Starting at $38,900",
      details: ["Built for adventure", "241 horsepower", "ALL4 intelligent all-wheel drive"],
    },
    two: {
      title: "JCW Countryman ALL4",
      title1: "ROOTED IN RACING.",
      price: "Starting at $46,900",
      details: ["Made for speed", "312 horsepower", "0-60 mph in 5.4 seconds"],
    },
    three: {
      title: "Countryman SE ALL4",
      title1: "ELECTRIC AND ECCENTRIC.",
      price: "Starting at $45,200",
      details: ["All-electric SUV", "308 horsepower including temporary boost", "130kW DC Fast charging speed"],
    },
    four: {
      title: "Cooper S 2 Door",
      title1: "RETRO, REINVENTED.",
      price: "Starting at $32,200",
      details: ["Iconic design", "201 horsepower", "221 lb-ft torque"],
    },
    five: {
      title: "Cooper S 4 Door",
      title1: "A FEAT OF FUN.",
      price: "Starting at $32,200",
      details: ["Iconic design", "201 horsepower", "221 lb-ft torque"],
    },
  };

  const handleCarChange = (car) => {
    console.log("Changing car to:", car);
    setActiveCar(car);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className={`Carchangersectionmain ${activeCar}`} style={{ backgroundColor: backgroundColors[activeCar] }}>
      <div className={`Carchangersection-circle-main ${view === "Interior" ? "hidden" : "visible"} ${activeCar}`}></div>

      <div className="Carchangersection-image-container">
        <div className={`Carchangersection-car-main ${view === "Interior" ? "hidden" : "visible"}`}>
          <img src={carImages[activeCar]} alt={`CarImage${activeCar}`} />
        </div>
        <div className={`Carchangersection-car-background-main ${view === "Interior" ? "visible" : "hidden"}`}>
          <img src={interiorImages[activeCar]} alt={`Interior of ${activeCar}`} />
        </div>
      </div>

      <div className="Carchangersection-content">
        <div className="Carchangersection-content-top-main">
          <div className="Carchangersection-content-top-left-side-main">
            <p className={`paragraph-color-${activeCar} ${view === "Interior" ? `interior${["one", "two", "three", "four", "five"].indexOf(activeCar) + 1}` : ""}`}>EXPLORE THE LINEUP</p>
            {["one", "two", "three", "four", "five"].map((car, index) => (
              <div key={car} className={`Carchangersideone ${car} ${activeCar === car ? "Carchangersideoneactive" : ""}`} onClick={() => handleCarChange(car)}>
                <button className={`button-text ${view === "Interior" ? `interior${index + 1}` : ""} ${activeCar}`}>{carDetails[car].title}</button>
              </div>
            ))}
          </div>

          <div className="interior-exterior-button-main">
            <button className={`one ${view === "Exterior" ? "interior-exterior-button-active" : ""}`} onClick={() => handleViewChange("Exterior")}>
              Exterior
            </button>
            <button className={`two ${view === "Interior" ? "interior-exterior-button-active" : ""}`} onClick={() => handleViewChange("Interior")}>
              Interior
            </button>
          </div>
        </div>

        <div className="Carchangersection-content-bottom-main">
          <div className="Carchangersection-data-content">
            <h1 className={`${view === "Interior" ? `interior${["one", "two", "three", "four", "five"].indexOf(activeCar) + 1}` : ""} ${activeCar}`}>{carDetails[activeCar].title1}</h1>
            <div className="cars-detail-and-price">
              <p className={`${view === "Interior" ? `interior${["one", "two", "three", "four", "five"].indexOf(activeCar) + 1}` : ""} ${activeCar}`}>{carDetails[activeCar].price}</p>
              {carDetails[activeCar].details.map((detail, index) => (
                <span className={`${view === "Interior" ? `interior${index + 1}` : ""} ${activeCar}`} key={index}>
                  {detail}
                </span>
              ))}
            </div>
          </div>

          <div className="learn-build-button-main">
            <button className={`learn-build-button-one ${activeCar} ${view === "Interior" ? "interiorbutonchangedfirst" : ""}`}>learn more</button>
            <button className={`learn-build-button-two ${activeCar} ${view === "Interior" ? "interiorbutonchangedsecond" : ""}`}>build your own</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carchangersection;