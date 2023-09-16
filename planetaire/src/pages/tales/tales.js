import React, { useState, useEffect, useTransition } from 'react';
import './tales.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
// import lilysmall from '../../assets/lily.webp'
// import lilybigger from '../../assets/lily-bigger.webp'
// import lilymedium from '../../assets/lily-medium.webp'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Header from '../../components/header/header';

function Tales() {
    const { t } = useTranslation();

    return (
        <><Header /></>

    );
};

export default Tales;