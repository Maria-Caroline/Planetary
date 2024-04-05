import './planetary.css';

import Modal from "react-modal";
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import sun from '../../assets/planets/sun_planet.png'
import sun_illustatrion from '../../assets/illustrations/sun_illustration.png'

import mercury from '../../assets/planets/mercury_planet.png'
import mercury_illustatrion from '../../assets/illustrations/mercury_illustration.png'

import moon from '../../assets/planets/moon_planet.png'
import moon_illustatrion from '../../assets/illustrations/moon_illustration.png'

import venus from '../../assets/planets/venus_planet.png'
import venus_illustatrion from '../../assets/illustrations/venus_illustration.png'

import earth from '../../assets/planets/earth_planet.png'
import earth_illustatrion from '../../assets/illustrations/earth_illustration.png'

import pluto from '../../assets/planets/pluto_planet.png'

import mars from '../../assets/planets/mars_planet.png'

import jupiter from '../../assets/planets/jupiter_planet.png'

import saturn from '../../assets/planets/saturn_planet.png'

import uranus from '../../assets/planets/uranus_planet.png'

import neptune from '../../assets/planets/neptune_planet.png'

import Header from '../../components/header/header';
import info_holder from '../../assets/support_material/info_holder.png'
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
        <>
            <><Header />
            <div className="planetary-container">
                <div className="circle orbit9">
                    <img onClick={() => openModal('Pluto')} src={pluto} alt={t('Pluto')} className="pluto" />
                    <Modal className="modal-planets" isOpen={planetModals['Pluto'] || false} onRequestClose={() => closeModal('Pluto')}>
                        <p>{t('Pluto')}</p>
                        <button onClick={() => closeModal('Pluto')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit8">
                    <img onClick={() => openModal('Neptune')} src={neptune} alt={t('Neptune')} className="uranus" />
                    <Modal className="modal-planets" isOpen={planetModals['Neptune'] || false} onRequestClose={() => closeModal('Neptune')}>
                        <p>{t('Neptune')}</p>
                        <button onClick={() => closeModal('Neptune')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit7">
                    <img onClick={() => openModal('Uranus')} src={uranus} alt={t("Uranus")} className="uranus" />
                    <Modal className="modal-planets" isOpen={planetModals['Uranus'] || false} onRequestClose={() => closeModal('Uranus')}>
                        <p>{t('Uranus')}</p>
                        <button onClick={() => closeModal('Uranus')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit6">
                    <img onClick={() => openModal('Saturn')} src={saturn} alt={t("Saturn")} className="saturn" />
                    <Modal className="modal-planets" isOpen={planetModals['Saturn'] || false} onRequestClose={() => closeModal('Saturn')}>
                        <p>{t('Saturn')}</p>
                        <button onClick={() => closeModal('Saturn')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit5">
                    <img onClick={() => openModal('Jupiter')} src={jupiter} alt={t("Jupiter")} className="planet" />
                    {planetModals["Jupiter"] === true && (
                        <div className='modal-planets-background'>

                            <div className='modal-planets' isOpen={planetModals['Jupiter'] || false} onRequestClose={() => closeModal('Jupiter')}>
                                <p>{t('Jupiter')}</p>
                                <button onClick={() => closeModal('Jupiter')}>Fechar</button>
                            </div>
                        </div>
                    )}

                </div>

                <div className="circle orbit4">
                    <img onClick={() => openModal('Mars')} src={mars} alt={t("Mars")} className="earth" />
                    <Modal className="modal-planets" isOpen={planetModals['Mars'] || false} onRequestClose={() => closeModal('Mars')}>
                        <p>{t('Mars')}</p>
                        <button onClick={() => closeModal('Mars')}>Fechar</button>
                    </Modal>
                </div>

                <div className="circle orbit3">
                    <img onClick={() => openModal('Earth')} src={earth} alt={t("Earth")} className="earth" />
                    

                    <img onClick={() => openModal('Moon')} src={moon} alt={t("Moon")} className="moon" />
                </div>
                {planetModals["Earth"] === true && (
                        <div className='modal-planets-background'>
                            <div className="modal-planets" isOpen={planetModals['Earth'] || false} onRequestClose={() => closeModal('Earth')}>

                                <div className="container-character-illustration-small">
                                    <img src={earth_illustatrion} alt={t("Earth")} className="character-illustration-smaller" />
                                </div>

                                <div className='container-character-infos'>
                                    <div className='box-character-infos'>
                                        <div className='character-infos'>
                                            <p className='character-atribute'>{t('Earth')}</p>
                                            <p className='character-atribute'>{t('earth-description')}</p>
                                            <p className='character-atribute'>{t('weapon')}: {t('none')}</p>
                                        </div>
                                        <img src={info_holder} alt={t("")} className="info-holder" />
                                    </div>
                                    <div >
                                        <button className='close-modal-button' onClick={() => closeModal('Earth')}>Fechar</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                {planetModals["Moon"] === true && (
                    <div className='modal-planets-background'>
                        <div className="modal-planets" isOpen={planetModals['Moon'] || false} onRequestClose={() => closeModal('Moon')}>
                            <div className="container-character-illustration-small">
                                <img src={moon_illustatrion} alt={t("Moon")} className="character-illustration-small" />
                            </div>
                            <div className='container-character-infos'>
                                <div className='box-character-infos'>
                                    <div className='character-infos'>
                                        <p className='character-atribute'><strong>{t('Moon')}</strong></p>
                                        <p className='character-atribute'>{t('moon-description')}</p>
                                        <p className='character-atribute'><strong>{t('weapon')}</strong>: {t('moon-weapon')}</p>
                                    </div>
                                    <img src={info_holder} alt={t("")} className="info-holder" />
                                </div>
                                <div >
                                    <button className='close-modal-button' onClick={() => closeModal('Moon')}>Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="circle orbit2">
                    <img onClick={() => openModal('Venus')} src={venus} alt={t("Venus")} className="venus" />
                </div>
                {planetModals["Venus"] === true && (
                    <div className='modal-planets-background'>
                        <div className="modal-planets" isOpen={planetModals['Venus'] || false} onRequestClose={() => closeModal('Venus')}>
                            <div className="container-character-illustration-small">
                                <img src={venus_illustatrion} alt={t("Venus")} className="character-illustration-small" />
                            </div>
                            <div className="container-character-infos">
                                <div className='box-character-infos'>
                                    <div className='character-infos'>
                                        <p className='character-atribute' >{t('Venus')}</p>
                                        <p className='character-atribute'>{t('venus-description')}</p>
                                        <p className='character-atribute'><strong>{t('weapon')}</strong>: {t('none')}</p>
                                    </div>
                                    <img src={info_holder} alt={t("")} className="info-holder" />
                                </div>
                                <div >
                                    <button className='close-modal-button' onClick={() => closeModal('Venus')}>Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="circle orbit1">
                    <img onClick={() => openModal('Mercury')} src={mercury} alt={t("Mercury")} className="mercury" />
                </div>
                {planetModals["Mercury"] === true && (
                    <div className='modal-planets-background'>
                        <div className="modal-planets" isOpen={planetModals['Mercury'] || false} onRequestClose={() => closeModal('Mercury')}>
                            <div className="container-character-illustration-small">
                                <img src={mercury_illustatrion} alt={t("Sun")} className="character-illustration-small" />
                            </div>
                            <div className="container-character-infos">
                                <div className='box-character-infos'>
                                    <div className='character-infos'>
                                        <p className='character-atribute'><strong>{t('Mercury')}</strong></p>
                                        <p className='character-atribute'>{t('mercury-description')}</p>
                                        <p className='character-atribute'><strong>{t('weapon')}</strong>: {t('mercury-weapon')}</p>
                                    </div>
                                    <img src={info_holder} alt={t("")} className="info-holder" />
                                </div>
                                <div>
                                    <button className='close-modal-button' onClick={() => closeModal('Mercury')}>{t('close')}</button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}


                <img onClick={() => openModal('Sun')} src={sun} alt={t("Sun")} className="sun" />
                {planetModals["Sun"] === true && (
                    <div className='modal-planets-background'>
                        <div className="modal-planets" isOpen={planetModals['Sun'] || false} onRequestClose={() => closeModal('Sun')}>
                            <div className="container-character-illustration">
                                <img src={sun_illustatrion} alt={t("Sun")} className="character-illustration" />
                            </div>
                            <div className="container-character-infos">
                                <div className='box-character-infos'>
                                    <div className='character-infos'>
                                        <p className='character-atribute'><strong>{t('Sun')}</strong></p>
                                        <p className='character-atribute'>{t('sun-description')}</p>
                                        <p className='character-atribute'><strong>{t('weapon')}</strong>: {t('sun-weapon')}</p>
                                    </div>
                                    <img src={info_holder} alt={t("")} className="info-holder" />
                                </div>
                                <div>
                                    <button className='close-modal-button' onClick={() => closeModal('Sun')}>{t('close')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div></>
        </>
    );
};

export default Planetary;