import './planetary.css';

import Modal from "react-modal";
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';

import sun from '../../assets/planets/sun_planet.png'
import sun_illustatrion from '../../assets/illustrations/sun_illustration.png'

import moon from '../../assets/planets/moon_planet.png'
import moon_illustatrion from '../../assets/illustrations/moon_illustration.png'

import venus from '../../assets/planets/venus_planet.png'
import venus_illustatrion from '../../assets/illustrations/venus_illustration.png'

import earth from '../../assets/planets/earth_planet.png'
import earth_illustatrion from '../../assets/illustrations/earth_illustration.png'


import Header from '../../components/header/header';
import info_holder from '../../assets/support_material/temporary_info_holder.png'
function Planetary() {
    const [showSplash, setShowSplash] = useState(true);
    const { t } = useTranslation();
    const [planetModals, setPlanetModals] = useState({});
    console.log(localStorage.getItem('splashShown'));

    useEffect(() => {
        // Defina um temporizador para esconder a splash page após 5-6 segundos

        // const hasSplashShownBefore = localStorage.getItem('splashShown');
        // if (hasSplashShownBefore === null) {
        const splashTimer = setTimeout(() => {
            setShowSplash(false);
            localStorage.setItem('splashShown', 'false');
            console.log(localStorage.getItem('splashShown'));

        }, 3000);

        return () => clearTimeout(splashTimer);
        // }
    }, []);



    const openModal = (planetName) => {
        setPlanetModals({ ...planetModals, [planetName]: true });
    };


    const closeModal = (planetName) => {
        setPlanetModals({ ...planetModals, [planetName]: false });
    };

    return (
        <>
            <><Header /><div className="container-planetary">
                <div className="circle orbit9">
                    <img onClick={() => openModal('Pluto')} src={sun} alt={t('Pluto')} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Pluto'] || false} onRequestClose={() => closeModal('Pluto')}>
                        <p>{t('Pluto')}</p>
                        <button onClick={() => closeModal('Pluto')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit8">
                    <img onClick={() => openModal('Neptune')} src={sun} alt={t('Neptune')} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Neptune'] || false} onRequestClose={() => closeModal('Neptune')}>
                        <p>{t('Neptune')}</p>
                        <button onClick={() => closeModal('Neptune')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit7">
                    <img onClick={() => openModal('Uranus')} src={sun} alt={t("Uranus")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Uranus'] || false} onRequestClose={() => closeModal('Uranus')}>
                        <p>{t('Uranus')}</p>
                        <button onClick={() => closeModal('Uranus')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit6">
                    <img onClick={() => openModal('Saturn')} src={sun} alt={t("Saturn")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Saturn'] || false} onRequestClose={() => closeModal('Saturn')}>
                        <p>{t('Saturn')}</p>
                        <button onClick={() => closeModal('Saturn')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit5">
                    <img onClick={() => openModal('Jupiter')} src={sun} alt={t("Jupiter")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Jupiter'] || false} onRequestClose={() => closeModal('Jupiter')}>
                        <p>{t('Jupiter')}</p>
                        <button onClick={() => closeModal('Jupiter')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit4">
                    <img onClick={() => openModal('Mars')} src={sun} alt={t("Mars")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Mars'] || false} onRequestClose={() => closeModal('Mars')}>
                        <p>{t('Mars')}</p>
                        <button onClick={() => closeModal('Mars')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit3">
                    <img onClick={() => openModal('Earth')} src={earth} alt={t("Earth")} className="earth" />
                    <Modal className="modal-planets" isOpen={planetModals['Earth'] || false} onRequestClose={() => closeModal('Earth')}>

                        <div className="container-character-illustration-small">
                            <img src={earth_illustatrion} alt={t("Earth")} className="character-illustration-smaller" />
                        </div>

                        <div className='container-character-infos'>
                            <div className='box-character-infos'>
                                <div className='character-infos'>
                                    <p>{t('Earth')}</p>
                                    <p>{t('earth-description')}</p>
                                    <p>{t('weapon')}: {t('none')}</p>
                                    <p>{t('based-animal')}: {t('earth-animals')}</p>
                                </div>
                                <img src={info_holder} alt={t("")} className="info-holder" />
                            </div>
                            <div className='close-modal-button'>
                                <button onClick={() => closeModal('Earth')}>Fechar</button>
                            </div>

                        </div>
                    </Modal>
                    <img onClick={() => openModal('Moon')} src={moon} alt={t("Moon")} className="moon" />
                    <Modal className="modal-planets" isOpen={planetModals['Moon'] || false} onRequestClose={() => closeModal('Moon')}>

                        <div className="container-character-illustration-small">
                            <img src={moon_illustatrion} alt={t("Moon")} className="character-illustration-small" />
                        </div>
                        <div className='container-character-infos'>
                            <div className='box-character-infos'>
                                <div className='character-infos'>
                                    <p>{t('Moon')}</p>
                                    <p>{t('moon-description')}</p>
                                    <p>{t('weapon')}: {t('moon-weapon')}</p>
                                    <p>{t('based-animal')}: {t('moon-animals')}</p>
                                </div>
                                <img src={info_holder} alt={t("")} className="info-holder" />
                            </div>
                            <div className='close-modal-button'>
                                <button onClick={() => closeModal('Moon')}>Fechar</button>
                            </div>
                        </div>

                    </Modal>
                </div>

                <div className="circle orbit2">
                    <img onClick={() => openModal('Venus')} src={venus} alt={t("Venus")} className="venus" />
                    <Modal className="modal-planets" isOpen={planetModals['Venus'] || false} onRequestClose={() => closeModal('Venus')}>
                        <div className="container-character-illustration-small">
                            <img src={venus_illustatrion} alt={t("Venus")} className="character-illustration-small" />
                        </div>
                        <div className="container-character-infos">
                            <div className='box-character-infos'>
                                <div className='character-infos'>
                                    <p>{t('Venus')}</p>
                                    <p>{t('venus-description')}</p>
                                    <p>{t('weapon')}: {t('none')}</p>
                                    <p>{t('based-animal')}: {t('venus-animals')}</p>
                                </div>
                                <img src={info_holder} alt={t("")} className="info-holder" />
                            </div>
                            <div className='close-modal-button'>
                                <button onClick={() => closeModal('Venus')}>Fechar</button>
                            </div>
                        </div>
                    </Modal>
                </div>

                <div className="circle orbit1">
                    <img onClick={() => openModal('Mercury')} src={sun} alt={t("Mercury")} className="planet" />
                    <Modal className="modal-planets" isOpen={planetModals['Mercury'] || false} onRequestClose={() => closeModal('Mercury')}>
                        <p>{t('Mercury')}</p>
                        <button onClick={() => closeModal('Mercury')}>Fechar</button>
                    </Modal>
                </div>


                <img onClick={() => openModal('Sun')} src={sun} alt={t("Sun")} className="sun" />
                <Modal className="modal-planets" isOpen={planetModals['Sun'] || false} onRequestClose={() => closeModal('Sun')}>
                    <div className="container-character-illustration">
                        <img src={sun_illustatrion} alt={t("Sun")} className="character-illustration" />
                    </div>
                    <div className="container-character-infos">
                        <div className='box-character-infos'>
                            <div className='character-infos'>
                                <h3>{t('Sun')}</h3>
                                <p>{t('sun-description')}</p>
                                <p>{t('weapon')}: {t('sun-weapon')}</p>
                                <p>{t('based-animal')}: {t('sun-animals')}</p>
                            </div>
                            <img src={info_holder} alt={t("")} className="info-holder" />
                        </div>
                        <div className='close-modal-button'>
                            <button onClick={() => closeModal('Sun')}>Fechar</button>
                        </div>
                    </div>
                </Modal>

            </div></>
        </>
    );
};

export default Planetary;