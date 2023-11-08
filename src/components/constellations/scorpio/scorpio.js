import React, { useState } from 'react';
import './scorpio.css';
import { useTranslation } from 'react-i18next';

import scorpio from "../../../assets/constellations/scorpio.png"
import holder from "../../../assets/support_material/temporary-tale-holder.png"
//earth's adventure

function Scorpio() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
           <div className='constellation-container'>
                <div className='constellation-info'>
                <div className='teste'>
                        {isModalOpen && (
                            <>
                                <div className='constellation-revealed-tale'>
                                    <div className='constellation-tale'>
                                        <div className='constellation-tale-section-space'>
                                        <div className='constellation-tale-section one'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non pharetra nulla. Suspendisse sit amet accumsan lectus. Maecenas sit amet felis aliquam, sagittis risus eget, sollicitudin risus. Curabitur ac enim ac tortor lobortis tristique ac eu magna. Nulla justo neque, tristique a sapien at, interdum suscipit nisl. In eros libero, eleifend nec sapien lobortis, posuere ornare turpis. Phasellus cursus leo id purus congue, eget efficitur velit convallis. Nunc id porttitor lorem, nec placerat nisi. Suspendisse sed lectus et magna tincidunt pretium id et ipsum.</div>
                                        <div className='constellation-tale-section two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non pharetra nulla. Suspendisse sit amet accumsan lectus. Maecenas sit amet felis aliquam, sagittis risus eget, sollicitudin risus. Curabitur ac enim ac tortor lobortis tristique ac eu magna. Nulla justo neque, tristique a sapien at, interdum suscipit nisl. In eros libero, eleifend nec sapien lobortis, posuere ornare turpis. Phasellus cursus leo id purus congue, eget efficitur velit convallis. Nunc id porttitor lorem, nec placerat nisi. Suspendisse sed lectus et magna tincidunt pretium id et ipsum.</div>
                                        </div>
                                    </div>
                                    <div className='constellation-buttons'>
                                        <button onClick={() => setIsModalOpen(false)} className="back-option">{t("Back")}</button>
                                        <button onClick={() => setIsModalOpen(false)} className="back-option">{t("Back")}</button>
                                    </div>
                                </div>
                                <img src={holder} className='constellation-holder-image' />
                            </>
                        )
                        }
                    </div>
                    <div>
                        <div className='constellation-stars' onClick={() => setIsModalOpen('true')}>
                            <img src={scorpio} className="scorpio" />
                            <div class="glowing-effect star-scorpio-1"></div>
                            <div class="glowing-effect star-scorpio-2"></div>
                            <div class="glowing-effect star-scorpio-3"></div>
                            <div class="glowing-effect star-scorpio-4"></div>
                            <div class="glowing-effect star-scorpio-5"></div>
                            <div class="glowing-effect star-scorpio-6"></div>
                        </div>
                        <div className={`constellation-name-box ${isModalOpen ? 'show' : ''}`}>
                            <p className='constellation-name'>Sun & Moon Love Story</p>
                        </div>
                    </div>
                    

                </div>
            </div>


        </>

    );
}

export default Scorpio;