import React from 'react';
import './tales.css';
import { useTranslation } from 'react-i18next';
import Header from '../../components/header/header';
import Orion from '../../components/constellations/orion/orion';

function Tales() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="yey">
            <Orion  />
            </div>
        </>
    );
};

export default Tales;