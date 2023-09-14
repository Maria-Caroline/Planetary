import React, { useState, useEffect, useTransition } from 'react';
import './language-switch.css';
import { useTranslation } from 'react-i18next';

import i18n from '../../i18n/index'; // Importe o objeto i18n do seu arquivo de inicialização

function LanguageSwitch() {
  const { t } = useTranslation();

  const LanguageOptions = [
    {
      name: "Português",
      value: "pt"
    },
    {
      name: "Français",
      value: "fr"
    },
    {
      name: "English",
      value: "en"
    }
  ];

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switch">
      {LanguageOptions.map(LanguageOption => (
        <button
          className={`language-button ${i18n.language === LanguageOption.value ? 'selected' : ''}`}
          key={LanguageOption.value}
          onClick={() => handleLanguageChange(LanguageOption.value)}
        >
          <span className="button-text">{LanguageOption.name}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitch;
