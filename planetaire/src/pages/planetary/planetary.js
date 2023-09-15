import React, { useState, useEffect, useTransition } from 'react';
import './planetary.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import sun from '../../assets/planets/temporary-sun.png'
// import lilybigger from '../../assets/lily-bigger.webp'
// import lilymedium from '../../assets/lily-medium.webp'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Header from '../../components/header/header';

function Planetary() {
    const { t } = useTranslation();

    return (
        <><Header />
            <div className="container-planetary">
                <div className="circle orbit1">
                    <img src={sun} alt={t("Mercury")} className="planet" />
                </div>
                <div className="circle orbit2">
                    <img src={sun} alt={t("Venus")} className="planet" />
                </div>
                <div className="circle orbit3">
                    <img src={sun} alt={t("Earth")} className="planet" />
                    <img src={sun} alt={t("Moon")} className="moon" />
                </div>
                <div className="circle orbit4">
                    <img src={sun} alt={t("Mars")} className="planet" />
                </div>
                <div className="circle orbit5">
                    <img src={sun} alt={t("Jupiter")} className="planet" />
                </div>
                <div className="circle orbit6">
                    <img src={sun} alt={t("Saturn")} className="planet" />
                </div>
                <div className="circle orbit7">
                    <img src={sun} alt={t("Uranus")} className="planet" />
                </div>
                <div className="circle orbit8">
                    <img src={sun} alt={t("Neptune")} className="planet" />
                </div>
                <div className="circle orbit9">
                    <img src={sun} alt={t("Pluto")} className="planet" />
                </div>
                <img className="sun" alt={t("Sun")} src={sun} />
            </div>
        </>
    );
};

export default Planetary;