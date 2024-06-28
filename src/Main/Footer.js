// src/components/Header.js
import React, { useState, useEffect } from 'react';
import MainFooter from './MainFooter';
import MobileFooter from './MobileFooter';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer>
            {isMobile ? <MobileFooter /> : <MainFooter />}
        </footer>
    );
};

export default Footer;
