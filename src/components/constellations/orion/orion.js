import React, { useState } from 'react';
import './orion.css';
import { useTranslation } from 'react-i18next';

import orion from "../../../assets/constellations/orion.png"
import holder from "../../../assets/support_material/temporary-tale-holder.png"
//earth's adventure

function Orion() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
                <div className='constellation-container'>
                <div className='constellation-info'>
                    <div>
                        <div className='constellation-stars' onClick={() => setIsModalOpen('true')}>
                            <img src={orion} className="orion" />
                            <div class="glowing-effect star-orion-1"></div>
                            <div class="glowing-effect star-orion-2"></div>
                            <div class="glowing-effect star-orion-3"></div>
                            <div class="glowing-effect star-orion-4"></div>
                            <div class="glowing-effect star-orion-5"></div>
                            <div class="glowing-effect star-orion-6"></div>
                        </div>
                        <div className={`constellation-name-box ${isModalOpen ? 'show' : ''}`}>
                            <p className='constellation-name'>Earth's Amazing Adventure</p>
                        </div>
                    </div>
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

                </div>
            </div>

        </>

    );
}

export default Orion;