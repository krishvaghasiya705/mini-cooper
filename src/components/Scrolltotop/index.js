import React, { useState, useEffect } from 'react';
import './ScrollToTop.scss';
import Scrolltotopicon from "../../assets/icons/Scrolltotopicon.png";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button onClick={scrollToTop} className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            <img src={Scrolltotopicon} alt="Scroll to top icon" />
        </button>
    );
};

export default ScrollToTop;