import React from 'react';
import './tales.css';
import Header from '../../components/header/header';
import Orion from '../../components/constellations/orion/orion';
import Scorpio from '../../components/constellations/scorpio/scorpio';
function Tales() {

    return (
        <>
            <Header />
            <div className='tales-container'>
                <div className="earth-adventure">
                    <Orion />
                </div>
                <div className="moon-sun-love-story">
                    <Scorpio />
                </div>
            </div>
        </>
    );
};

export default Tales;