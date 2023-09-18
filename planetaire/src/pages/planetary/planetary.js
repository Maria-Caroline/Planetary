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
    const [planetModals, setPlanetModals] = useState({});


    const openModal = (planetName) => {
        setPlanetModals({ ...planetModals, [planetName]: true });
    };


    const closeModal = (planetName) => {
        setPlanetModals({ ...planetModals, [planetName]: false });
    };


    return (
        <><Header />
            <div className="container-planetary">
                <div className="circle orbit9">
                    <img onClick={() => openModal('Pluto')} src={sun} alt={t('Pluto')} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Pluto'] || false} onRequestClose={() => closeModal('Pluto')}>
                        <p>Pluto</p>
                        <button onClick={() => closeModal('Pluto')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit8">
                    <img onClick={() => openModal('Neptune')} src={sun} alt={t('Neptune')} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Neptune'] || false} onRequestClose={() => closeModal('Neptune')}>
                        <p>neptune</p>
                        <button onClick={() => closeModal('Neptune')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit7">
                    <img onClick={() => openModal('Uranus')} src={sun} alt={t("Uranus")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Uranus'] || false} onRequestClose={() => closeModal('Uranus')}>
                        <p>uranus</p>
                        <button onClick={() => closeModal('Uranus')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit6">
                    <img onClick={() => openModal('Saturn')} src={sun} alt={t("Saturn")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Saturn'] || false} onRequestClose={() => closeModal('Saturn')}>
                        <p>Saturn</p>
                        <button onClick={() => closeModal('Saturn')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit5">
                    <img onClick={() => openModal('Jupiter')} src={sun} alt={t("Jupiter")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Jupiter'] || false} onRequestClose={() => closeModal('Jupiter')}>
                        <p>Jupiter</p>
                        <button onClick={() => closeModal('Jupiter')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit4">
                    <img onClick={() => openModal('Mars')} src={sun} alt={t("Mars")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Mars'] || false} onRequestClose={() => closeModal('Mars')}>
                        <p>Mars</p>
                        <button onClick={() => closeModal('Mars')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit3">
                    <img onClick={() => openModal('Earth')} src={earth} alt={t("Earth")} className="earth" />
                    <Modal className="modal-planets" isOpen={planetModals['Earth'] || false} onRequestClose={() => closeModal('Earth')}>
                        <p>Earth</p>
                        <button onClick={() => closeModal('Earth')}>Fechar</button>
                    </Modal>
                    <img onClick={() => openModal('Moon')} src={moon} alt={t("Moon")} className="moon" />
                    <Modal className="modal-planets" isOpen={planetModals['Moon'] || false} onRequestClose={() => closeModal('Moon')}>
                        <p>Moon</p>
                        <button onClick={() => closeModal('Moon')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit2">
                    <img onClick={() => openModal('Venus')} src={sun} alt={t("Venus")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Venus'] || false} onRequestClose={() => closeModal('Venus')}>
                        <p>Venus</p>
                        <button onClick={() => closeModal('Venus')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit1">
                    <img onClick={() => openModal('Mercury')} src={sun} alt={t("Mercury")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Mercury'] || false} onRequestClose={() => closeModal('Mercury')}>
                        <p>Mercury</p>
                        <button onClick={() => closeModal('Mercury')}>Fechar</button>
                    </Modal>
                </div>

                <img onClick={() => openModal('Sun')} src={sun} alt={t("Sun")} className="sun" />
                <Modal className="modal-planets" isOpen={planetModals['Sun'] || false} onRequestClose={() => closeModal('Sun')}>
                    <p>Sun</p>
                    <button onClick={() => closeModal('Sun')}>Fechar</button>
                </Modal>
            </div>
        </>
    );
};

export default Planetary;