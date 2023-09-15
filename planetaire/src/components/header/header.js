import React, { useState, useEffect } from 'react';
import './header.css';
import { useRef } from 'react';
// import signIdle from "../../assets/sign-idle.webp"
// import signHover from "../../assets/sign-hover.webp"
import LanguageSwitch from '../language-switch/language-switch';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Header() {

    const { t } = useTranslation();

    return (
        <>
            <div className="container-header">
                <LanguageSwitch />
                <div className="menu">
                    <Link to="/" className="menu-option">Planetary</Link>
                    <Link to="/tales" className="menu-option">Tales</Link>
                    <Link to="/play" className="menu-option">Play</Link>
                </div>
            </div>
            <div className="container-divider"><hr class="rounded"></hr></div>
        </>
    );
};

export default Header;