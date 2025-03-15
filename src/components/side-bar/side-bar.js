import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // useParams kaldırıldı
import { useTranslation } from 'react-i18next';
import logo from "../../assets/img/logo.png";
import "./side-bar.css";
import backgroundVideo from "../../assets/video/video.m4v";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import AppInstallPrompt from "../AppInstallPrompt"; // AppInstallPrompt bileşenini içe aktarın
import { MdOutlineMobileFriendly } from "react-icons/md";
import LanguageSwitcher from "../LanguageSwitcher";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const installRef = useRef(null); // AppInstallPrompt içindeki butonu referans olarak tutar

  const [expanded, setExpanded] = useState(false); // Menünün açık/kapalı durumunu takip eder
  const [isMobile, setIsMobile] = useState(false); // Cihazın mobil olup olmadığını takip eder
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // 992px'den küçükse mobil olarak kabul edilir
    };

    checkMobile();
    window.addEventListener('resize', checkMobile); // Ekran boyutu değiştiğinde kontrol et

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded); // Menü durumunu tersine çevirir
  };

  const handleNavClick = () => {
    setExpanded(false); // Bir menü öğesine tıklandığında menüyü kapatır
  };

  const handleInstallClick = () => {
    if (installRef.current) {
      installRef.current.click(); // Butona tıklama simülasyonu
    }
  };

  const { t, i18n } = useTranslation(); // i18n.language ile varsayılan dil

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
        case "/2024-almanak":
          return "/en/2024-almanac";
        default:
          return `/en${path}`; // Diğer yollar için varsayılan İngilizce rota
      }
    }

    // Dil Türkçe ise orijinal yollar döndürülür
    return `/tr${path}`;
  };

  return (
    <div>
      <video autoPlay loop muted className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar expand="lg" className="admin-navbar" variant="dark" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to={getLocalizedPath("")}>
            <img alt="Turkey Rights Monitor" src={logo} className="img-fluid " />
          </Navbar.Brand>
          <Dropdown.Divider />
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse className="navbar-menu" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={getLocalizedPath("")} className={currentPath === `/${i18n.language}` ? "active" : ""} onClick={handleNavClick}>
                {t('home')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/kitlesel-gozaltilar")} className={currentPath === getLocalizedPath("/kitlesel-gozaltilar") ? "active" : ""} onClick={handleNavClick}>
                {t('mass_detentions')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/iskenceler")} className={currentPath === getLocalizedPath("/iskenceler") ? "active" : ""} onClick={handleNavClick}>
                {t('torture')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/olumler")} className={currentPath === getLocalizedPath("/olumler") ? "active" : ""} onClick={handleNavClick}>
                {t('right_to_life_violations')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/hassasgruplar")} className={currentPath === getLocalizedPath("/hassasgruplar") ? "active" : ""} onClick={handleNavClick}>
                {t('vulnerable_groups')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/ihraclar")} className={currentPath === getLocalizedPath("/ihraclar") ? "active" : ""} onClick={handleNavClick}>
                {t('dismissals')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/illegal-iade")} className={currentPath === getLocalizedPath("/illegal-iade") ? "active" : ""} onClick={handleNavClick}>
                {t('illegal_extradition')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/kaybedilenler")} className={currentPath === getLocalizedPath("/kaybedilenler") ? "active" : ""} onClick={handleNavClick}>
                {t('forced_disappearances')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/sosyal-ekonomik-hak-ihlali")} className={currentPath === getLocalizedPath("/sosyal-ekonomik-hak-ihlali") ? "active" : ""} onClick={handleNavClick}>
                {t('social_economic_rights_violations')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/cezaevi-hak-ihlali")} className={currentPath === getLocalizedPath("/cezaevi-hak-ihlali") ? "active" : ""} onClick={handleNavClick}>
                {t('prison_rights_violations')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/kapatilankurumlar")} className={currentPath === getLocalizedPath("/kapatilankurumlar") ? "active" : ""} onClick={handleNavClick}>
                {t('closed_institutions')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/teror-sucu-istatistikleri")} className={currentPath === getLocalizedPath("/teror-sucu-istatistikleri") ? "active" : ""} onClick={handleNavClick}>
                {t('terror_crime_statistics')}
              </Nav.Link>
              <Nav.Link as={Link} to={getLocalizedPath("/yargi-bagimsizligi")} className={currentPath === getLocalizedPath("/yargi-bagimsizligi") ? "active" : ""} onClick={handleNavClick}>
                {t('judicial_independence')}
              </Nav.Link>

              <Nav.Link as={Link} to={getLocalizedPath("/2024-almanak")} className={currentPath === getLocalizedPath("/2024-almanak") ? "active" : ""} onClick={handleNavClick}>
                {t('almanac_2024')}
              </Nav.Link>

              <Nav.Link
                href="https://database.turkeyrightsmonitor.com/echr/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                {t('echr_data')}
              </Nav.Link>

              <Nav.Link
                href="https://database.turkeyrightsmonitor.com/un-reports/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                {t('un_data')}
              </Nav.Link>
           
              <LanguageSwitcher /> 
            

              {/* Yalnızca mobilde gösterilecek "Uygulamayı Yükle" linki */}
              {isMobile && (
                deferredPrompt ? (
                  <Nav.Link onClick={handleInstallClick}>
                    <MdOutlineMobileFriendly /> {t('install_app')}
                  </Nav.Link>
                ) : (
                  <Nav.Link onClick={handleInstallClick}>
                    <div className="install-instructions text-white">
                      <MdOutlineMobileFriendly /> {t('install_app')}
                      <p className="text-white mt-2" style={{ fontSize: "9px" }}>{t('install_instructions')}</p>
                    </div>
                  </Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AppInstallPrompt onClick={installRef} /> {/* Bileşeni sayfada kullanın */}
    </div>
  );
};

export default SideBar;
