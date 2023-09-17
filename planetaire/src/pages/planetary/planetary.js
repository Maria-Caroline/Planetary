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

    //modal não funciona
    return (
        <><Header />
            <div className="container-planetary">
                <div className="circle orbit9">
                    <img onClick={openLampModal} src={sun} alt={t("Pluto")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
                    </Modal>
                </div>
                <div className="circle orbit8">
                    <img onClick={openLampModal} src={sun} alt={t("Neptune")} className="planet" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
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

                    <img onClick={openLampModal} src={moon} alt={t("Moon")} className="moon" />
                    <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                        <p>hi lorena</p>
                        <button onClick={closeLampModal}></button>
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

                <img className="sun" alt={t("Sun")} onClick={openLampModal} src={sun} />
                <Modal className="somethingModal" isOpen={isLampModalOpen} onRequestClose={closeLampModal} >
                    <p>hi lorena</p>
                    <button onClick={closeLampModal}></button>
                </Modal>
            </div>
        </>
    );
};

export default Planetary;