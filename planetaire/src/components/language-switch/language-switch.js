import React, { useState, useEffect, useTransition } from 'react';
import './language-switch.css';
import { useTranslation } from 'react-i18next';

import i18n from '../../i18n/index'; // Importe o objeto i18n do seu arquivo de inicialização

function LanguageSwitch() {
  const { t } = useTranslation();

  const LanguageOptions = [
    {
      name: "PT",
      value: "pt"
    },
    {
      name: "FR",
      value: "fr"
    },
    {
      name: "EN",
      value: "en"
    }
  ];

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switch">
      <select className="language-dropdown" value={i18n.language} onChange={(e) => handleLanguageChange(e.target.value)}>
        {LanguageOptions.map((LanguageOption) => (
          <option className="language-dropdown-options" key={LanguageOption.value} value={LanguageOption.value}>
            {LanguageOption.name}
          </option>
        ))}
      </select>
    </div>

  );
}

export default LanguageSwitch;
