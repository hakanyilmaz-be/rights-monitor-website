import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import './LanguageSwitcher.css';

// Türkçe ve İngilizce URL'leri eşleyen tablo
const urlMapping = {
  '/tr': '/en',
  '/tr/kitlesel-gozaltilar': '/en/mass-detentions',
  '/tr/iskenceler': '/en/tortures',
  '/tr/olumler': '/en/deaths',
  '/tr/hassasgruplar': '/en/vulnerable-groups',
  '/tr/illegal-iade': '/en/illegal-deportation',
  '/tr/kapatilankurumlar': '/en/closed-institutions',
  '/tr/kaybedilenler': '/en/missing-people',
  '/tr/ihraclar': '/en/dismissals',
  '/tr/cezaevi-hak-ihlali': '/en/prison-rights-violations',
  '/tr/sosyal-ekonomik-hak-ihlali': '/en/socio-economic-rights-violations',
  '/tr/teror-sucu-istatistikleri': '/en/terror-crime-statistics',
  '/tr/yargi-bagimsizligi': '/en/judicial-independence',
  '/en': '/tr',
  '/en/mass-detentions': '/tr/kitlesel-gozaltilar',
  '/en/tortures': '/tr/iskenceler',
  '/en/deaths': '/tr/olumler',
  '/en/vulnerable-groups': '/tr/hassasgruplar',
  '/en/illegal-deportation': '/tr/illegal-iade',
  '/en/closed-institutions': '/tr/kapatilankurumlar',
  '/en/missing-people': '/tr/kaybedilenler',
  '/en/dismissals': '/tr/ihraclar',
  '/en/prison-rights-violations': '/tr/cezaevi-hak-ihlali',
  '/en/socio-economic-rights-violations': '/tr/sosyal-ekonomik-hak-ihlali',
  '/en/terror-crime-statistics': '/tr/teror-sucu-istatistikleri',
  '/en/judicial-independence': '/tr/yargi-bagimsizligi',
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng) => {
    const currentPath = location.pathname;
    const newPath = urlMapping[currentPath] || `/${lng}`; // Eşleme yoksa dilin ana sayfasına yönlendir
    i18n.changeLanguage(lng);
    navigate(newPath);
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
