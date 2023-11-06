import React from 'react';
import './header.css';
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
                    <Link to="/planetary" className="menu-option">{t("Planetary")}</Link>
                    <Link to="/tales" className="menu-option">{t("Tales")}</Link>
                    <Link to="/play" className="menu-option">{t("Play")} </Link>
                </div>
            </div>
            <div className="container-divider"><hr className="rounded"></hr></div>
        </>
    );
};

export default Header;