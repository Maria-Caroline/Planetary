import React, {useEffect } from 'react';
import './disclaimer.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Disclaimer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      navigate("/planetary");
    }, 9500);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <div className="container-splash">
      <div className='container-disclaimer'>
        <h3>{t("disclaimer-title")}</h3>
        <p>{t("disclaimer")}</p>
      </div>
    </div>
  );
}

export default Disclaimer;
