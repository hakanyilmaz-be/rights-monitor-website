import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // useTranslation hook'u eklendi
import "./anasayfa-menu.css";
import LanguageSwitcher from "../LanguageSwitcher";

const AnasayfaMenu = () => {
  const { t, i18n } = useTranslation(); // Çeviri ve dil bilgisi için hook

  // Her dil için doğru URL yolunu döndüren yardımcı fonksiyon
  const getLocalizedPath = (path) => {
    // Eğer dil İngilizce ise URL çevirileri yapılır
    if (i18n.language === "en") {
      switch (path) {
        case "/kitlesel-gozaltilar":
          return "/en/mass-detentions";
        case "/iskenceler":
          return "/en/tortures";
        case "/olumler":
          return "/en/deaths";
        case "/hassasgruplar":
          return "/en/vulnerable-groups";
        case "/ihraclar":
          return "/en/dismissals";
        case "/illegal-iade":
          return "/en/illegal-deportation";
        case "/kaybedilenler":
          return "/en/missing-people";
        case "/sosyal-ekonomik-hak-ihlali":
          return "/en/socio-economic-rights-violations";
        case "/cezaevi-hak-ihlali":
          return "/en/prison-rights-violations";
        case "/kapatilankurumlar":
          return "/en/closed-institutions";
        case "/teror-sucu-istatistikleri":
          return "/en/terror-crime-statistics";
        case "/yargi-bagimsizligi":
          return "/en/judicial-independence";
        default:
          return `/en${path}`; // Diğer yollar için varsayılan İngilizce rota
      }
    }

    // Dil Türkçe ise orijinal yollar döndürülür
    return `/tr${path}`;
  };

  return (
    <div className="menu-container2">
      <nav className="navbar-menu2">
        <ul>
          <li><Link to={getLocalizedPath("")} className="nav-link active">{t('home')}</Link></li>
          <li><Link to={getLocalizedPath("/kitlesel-gozaltilar")} className="nav-link">{t('mass_detentions')}</Link></li>
          <li><Link to={getLocalizedPath("/iskenceler")} className="nav-link">{t('torture')}</Link></li>
          <li><Link to={getLocalizedPath("/olumler")} className="nav-link">{t('right_to_life_violations')}</Link></li>
          <li><Link to={getLocalizedPath("/hassasgruplar")} className="nav-link">{t('vulnerable_groups')}</Link></li>
          <li><Link to={getLocalizedPath("/ihraclar")} className="nav-link">{t('dismissals')}</Link></li>
          <li><Link to={getLocalizedPath("/illegal-iade")} className="nav-link">{t('illegal_extradition')}</Link></li>
          <li><Link to={getLocalizedPath("/kaybedilenler")} className="nav-link">{t('forced_disappearances')}</Link></li>
          <li><Link to={getLocalizedPath("/sosyal-ekonomik-hak-ihlali")} className="nav-link">{t('social_economic_rights_violations')}</Link></li>
          <li><Link to={getLocalizedPath("/cezaevi-hak-ihlali")} className="nav-link">{t('prison_rights_violations')}</Link></li>
          <li><Link to={getLocalizedPath("/kapatilankurumlar")} className="nav-link">{t('closed_institutions')}</Link></li>
          <li><Link to={getLocalizedPath("/teror-sucu-istatistikleri")} className="nav-link">{t('terror_crime_statistics')}</Link></li>
          <li><Link to={getLocalizedPath("/yargi-bagimsizligi")} className="nav-link">{t('judicial_independence')}</Link></li>
          <li>
              <a
                href="https://database.turkeyrightsmonitor.com/echr/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {t('echr_data')}
              </a>
            </li>
            <li>
              <a
                href="https://database.turkeyrightsmonitor.com/un-reports/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {t('un_data')}
              </a>
            </li>

          <li><LanguageSwitcher /></li>
        </ul>
      </nav>
    </div>
  );
};

export default AnasayfaMenu;
