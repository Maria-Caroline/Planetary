// SplashPage.js
import './splash-page.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import Header from '../../components/header/header';

const SplashPage = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      navigate("/planetary");
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <div className="splash">
      <img src="caminho-para-sua-logo.png" alt="Logo" />
      <p>Seu breve resumo aqui.</p>
      <p>Seu breve resumo aqui.</p>
      <p>Seu breve resumo aqui.</p>
      <p>Seu breve resumo aqui.</p>
    </div>
  );
}

export default SplashPage;
