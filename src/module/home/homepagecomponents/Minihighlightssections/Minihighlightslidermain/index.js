import React, { useState, useEffect } from "react";
import "./Minihighlightslider.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Minighiglightsimage1 from "../../../../../assets/minihighlightsimage/Minighiglightsimage1.webp";
import Minighiglightsimage2 from "../../../../../assets/minihighlightsimage/Minighiglightsimage2.png";
import Minighiglightsimage3 from "../../../../../assets/minihighlightsimage/Minighiglightsimage3.webp";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick, currentSlide, slideCount } = props;
  return (
    <div
      className={`${className} ${
        currentSlide === slideCount - 3 ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      <span className="scroll-arrow"></span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick, currentSlide } = props;
  return (
    <div
      className={`${className} ${currentSlide === 0 ? "hidden" : ""}`}
      onClick={onClick}
    >
      <span className="scroll-arrow"></span>
    </div>
  );
}

function Minihighlightslider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isResponsive) {
      const preventScroll = (e) => {
        e.preventDefault();
      };

      document
        .querySelector(".Minihighlights-slider-main")
        .addEventListener("wheel", preventScroll, { passive: false });

      return () => {
        document
          .querySelector(".Minihighlights-slider-main")
          .removeEventListener("wheel", preventScroll);
      };
    }
  }, [isResponsive]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow currentSlide={currentSlide} slideCount={3} />,
    prevArrow: <SamplePrevArrow currentSlide={currentSlide} />,
    beforeChange: (current, next) => setCurrentSlide(next),
    draggable: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="Minihighlights-slider-main">
      <Slider {...settings}>
        <div>
          <div className="Minihighlights-slider-box-main">
            <div className="Minihighlights-slider-box-image">
              <img src={Minighiglightsimage1} alt="Minighiglightsimage1" />
            </div>
            <div className="Minihighlights-slider-box-details-main">
              <h2>LOW MILEAGE LEASE</h2>
              <h3>$399/MO FOR 36 MONTHS, $3,819 DUE AT SIGNING.</h3>
              <div className="shop-link-main">
                <Link to={"/"}>shop now</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Minihighlights-slider-box-main">
            <div className="Minihighlights-slider-box-image">
              <img src={Minighiglightsimage2} alt="Minighiglightsimage2" />
            </div>
            <div className="Minihighlights-slider-box-details-main">
              <h2>THE MINI CARD</h2>
              <h3>FILL UP ON POINTS, PERKS, AND MORE.</h3>
              <div className="shop-link-main">
                <Link to={"/"}>shop now</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Minihighlights-slider-box-main">
            <div className="Minihighlights-slider-box-image">
              <img src={Minighiglightsimage3} alt="Minighiglightsimage3" />
            </div>
            <div className="Minihighlights-slider-box-details-main">
              <h2>MINI FINANCIAL SERVICES</h2>
              <h3>UP TO $1,000 OFF SELECT 2024 MINI MODELS.</h3>
              <div className="shop-link-main">
                <Link to={"/"}>shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div
        className={`scroll-wrap-left ${currentSlide === 0 ? "hidden" : ""}`}
      ></div>
      <div
        className={`scroll-wrap-right ${currentSlide === 2 ? "hidden" : ""}`}
      ></div>
    </div>
  );
}

export default Minihighlightslider;