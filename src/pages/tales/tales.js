import React from 'react';
import './tales.css';
import Header from '../../components/header/header';
import Orion from '../../components/constellations/orion/orion';

function Tales() {

    return (
        <>
            <Header />
            <div className='tales-container'>
                <div className="earth-adventure">
                    <Orion />
                </div>
            </div>
        </>
    );
};

export default Tales;