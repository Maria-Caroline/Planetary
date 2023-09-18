import React, { useState, useEffect, useTransition } from 'react';
import './planetary.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import Modal from "react-modal";
import sun from '../../assets/planets/sun_planet.png'
import earth from '../../assets/planets/earth_planet.png'
import moon from '../../assets/planets/moon_planet.png'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Header from '../../components/header/header';

function Planetary() {
    const { t } = useTranslation();

    const [isLampModalOpen, setLampModalOpen] = useState(false);
    const [isEarthOpen, setEarthOpen] = useState(false);
    const [isMoonOpen, setMoonOpen] = useState(false);
    const [isSunOpen, setSunOpen] = useState(false);
    const [isPlutoOpen, setPlutoOpen] = useState(false);
    const [isNeptuneOpen, setNeptuneOpen] = useState(false);
    const [isUranusOpen, setUranusOpen] = useState(false);
    const [isSaturnOpen, setSaturnOpen] = useState(false);
    const [isJupiterOpen, setJupiterOpen] = useState(false);

    const openLampModal = () => {
        setLampModalOpen(true);
    };

    const closeLampModal = () => {
        setLampModalOpen(false);
    };

    const openEarth = () => {
        setEarthOpen(true);
    };

    const closeEarth = () => {
        setEarthOpen(false);
    };

    const openSun = () => {
        setSunOpen(true);
    };

    const closeSun = () => {
        setSunOpen(false);
    };

    const openMoon = () => {
        setMoonOpen(true);
    };

    const closeMoon = () => {
        setMoonOpen(false);
    };

    const openPluto = () => {
        setPlutoOpen(true);
    };

    const closePluto = () => {
        setPlutoOpen(false);
    };

    const openNeptune = () => {
        setNeptuneOpen(true);
    };

    const closeNeptune = () => {
        setNeptuneOpen(false);
    };

    return (
        <><Header />
            <div className="container-planetary">
                <div className="circle orbit9">
                    <img onClick={openPluto} src={sun} alt={t("Pluto")} className="planet" />
                    <Modal className="somethingModal" isOpen={isPlutoOpen} onRequestClose={closePluto} >
                        <p>pluto</p>
                        <button onClick={closePluto}></button>
                    </Modal>
                </div>
                <div className="circle orbit8">
                    <img onClick={openNeptune} src={sun} alt={t("Neptune")} className="planet" />
                    <Modal className="somethingModal" isOpen={isNeptuneOpen} onRequestClose={closeNeptune} >
                        <p>neptune</p>
                        <button onClick={closeNeptune}></button>
                    </Modal>
                </div>

                <div className="circle orbit7">
                    <img onClick={openLampModal} src={sun} alt={t("Uranus")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
                    </Modal>
                </div>

                <div className="circle orbit6">
                    <img onClick={openLampModal} src={sun} alt={t("Saturn")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
                    </Modal>
                </div>

                <div className="circle orbit5">
                    <img onClick={openLampModal} src={sun} alt={t("Jupiter")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
                    </Modal>
                </div>

                <div className="circle orbit4">
                    <img onClick={openLampModal} src={sun} alt={t("Mars")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
                    </Modal>
                </div>

                <div className="circle orbit3">
                    <img onClick={openEarth} src={earth} alt={t("Earth")} className="earth" />
                    <Modal className="somethingModal" isOpen={isEarthOpen} onRequestClose={closeEarth} >
                        <p>earth</p>
                        <button onClick={closeEarth}></button>
                    </Modal>

                    <img onClick={openMoon} src={moon} alt={t("Moon")} className="moon" />
                    <Modal className="somethingModal" isOpen={isMoonOpen} onRequestClose={closeMoon} >
                        <p>moon</p>
                        <button onClick={closeMoon}></button>
                    </Modal>

                </div>

                <div className="circle orbit2">
                    <img onClick={openLampModal} src={sun} alt={t("Venus")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
                    </Modal>
                </div>

                <div className="circle orbit1">
                    <img onClick={openLampModal} src={sun} alt={t("Mercury")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi</p>
                        <button onClick={closeLampModal}></button>
                    </Modal>
                </div>

                <img className="sun" alt={t("Sun")} onClick={openSun} src={sun} />
                <Modal className="somethingModal" isOpen={isSunOpen} onRequestClose={closeSun} >
                    <p>sun</p>
                    <button onClick={closeSun}></button>
                </Modal>
            </div>
        </>
    );
};

export default Planetary;