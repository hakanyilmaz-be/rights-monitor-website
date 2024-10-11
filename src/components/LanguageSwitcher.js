import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom'; // Yönlendirme için
import './LanguageSwitcher.css'; 

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams(); // URL'deki dil parametresini al

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}`); // Dil değiştirildiğinde URL'yi güncelle
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('tr')} className="lang-button">
        tr
      </button>
      <p className="separator">|</p>
      <button onClick={() => changeLanguage('en')} className="lang-button">
        eng
      </button>
    </div>
  );
};

export default LanguageSwitcher;
