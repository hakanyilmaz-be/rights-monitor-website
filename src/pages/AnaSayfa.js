import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import trImage from '../assets/img/rights-monitor-tr.jpg';
import enImage from '../assets/img/rights-monitor-en.jpg';
import './AnaSayfa.css'
import TarihselAciklama from '../components/paragraflar/anasayfa/tarihsel-aciklama'
import TarihselResim from '../components/paragraflar/anasayfa/tarihsel-resim'
import TarihselDevami from '../components/paragraflar/anasayfa/tarihsel-devami'
import AnasayfaKitlesel from '../components/paragraflar/anasayfa/anasayfa-kitlesel'
import AnasayfaOlumler from '../components/paragraflar/anasayfa/anasayfa-olumler'
import YillarGrafik from '../components/charts/olumler/yillar-grafik'
import AnasayfaHassas from '../components/paragraflar/anasayfa/anasayfa-hassas'
import "../components/paragraflar/anasayfa/anasayfa-text.css"
import AnasayfaKaybetmeler from '../components/paragraflar/anasayfa/anasayfa-kaybetmeler'
import AnasayfaIhraclar from '../components/paragraflar/anasayfa/anasayfa-ihraclar'
import AnasayfaKacirilmalar from '../components/paragraflar/anasayfa/anasayfa-kacirilmalar'
import AnasayfaSosyal from '../components/paragraflar/anasayfa/anasayfa-sosyal'
import AnasayfaCezaevi from '../components/paragraflar/anasayfa/anasayfa-cezaevi'
import HakIhlaliYillar from '../components/charts/cezaevi/hak-ihlali-yillar'
import KurumlarAciklama from '../components/paragraflar/kapatilankurumlar/kurumlar-aciklama'
import KurumlarGrafik from '../components/charts/kapatilan/kurumlar-grafik'
import AnasayfaTypewriterText from '../components/paragraflar/anasayfa/anasayfa-type-writer-text'
import AnasayfaIstatistik from '../components/paragraflar/anasayfa/anasayfa-istatistik'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import AnasayfaMenu from '../components/side-bar/anasayfa-menu'
import { useTranslation } from 'react-i18next';
import AnasayfaTanitim from '../components/paragraflar/anasayfa/anasayfa-tanitim';
import LanguageSwitcher from '../components/LanguageSwitcher';


const AnaSayfa = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleButtonClick1 = () => {
    if (i18n.language === 'en') {
      navigate('/en/prison-rights-violations');
    } else {
      navigate('/tr/cezaevi-hak-ihlali');
    }
  };
  
  const handleButtonClick2 = () => {
    if (i18n.language === 'en') {
      navigate('/en/closed-institutions');
    } else {
      navigate('/tr/kapatilankurumlar');
    }
  };

  const handleButtonClick3 = () => {
    if (i18n.language === 'en') {
      navigate('/en/terror-crime-statistics');
    } else {
      navigate('/tr/teror-sucu-istatistikleri');
    }
  };

  const handleButtonClick4 = () => {
    if (i18n.language === 'en') {
      navigate('/en/judicial-independence');
    } else {
      navigate('/tr/yargi-bagimsizligi');
    }
  };

  const handleButtonClick5 = () => {
    if (i18n.language === 'en') {
      window.open('https://www.solidaritywithothers.com/our-reports-and-publications', '_blank');
    } else {
      window.open('https://tr.solidaritywithothers.com/our-reports-and-publications', '_blank');
    }
  };
  

  const handleButtonClick6 = () => {
    if (i18n.language === 'en') {
      window.open('https://www.solidaritywithothers.com/turkey-rights-monitor/', '_blank');
    } else {
      window.open('https://tr.solidaritywithothers.com/turkey-rights-monitor', '_blank');
    }
  };

  const { t, i18n } = useTranslation();
  const rightsMonitorImage = i18n.language === 'tr' ? trImage : enImage;

  return (
    <div>
      <div className="image-header-container">
        <Image src={rightsMonitorImage} fluid className="centered-image" />
        <div className="homepageheader">
          <img alt="Turkey Rights Monitor" src={logo} className="img-fluid"/>
          <div className='homepagemenu' onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            <span style={{ fontSize: "30px" }}>{t('menu')}</span> <BiMenuAltRight />
          </div>
          <div className='homepagelanguage' style={{ cursor: 'pointer' }}>
             <LanguageSwitcher/>
          </div>
       
          <div className="homepagemenucontent">
            {showMenu && <AnasayfaMenu />}
          </div>
        </div>

        <div className="centered-header3">
          <h1 className="text-center text-white bebas-neue-regular anasayfa-baslik">
            {t('homepage_title')}
          </h1>

          <div className="buttons buton-mobile">
            <button style={{ width: "150px", marginRight: "20px", fontSize: "14px", fontWeight: "400" }} className="btn-hover color-5" onClick={handleButtonClick5}>
              {t('thematic_reports')}
            </button>
            <button style={{ width: "150px", marginRight: "20px", fontSize: "14px", fontWeight: "400" }} className="btn-hover color-5" onClick={handleButtonClick6}>
              {t('weekly_bulletins')}
            </button>
          </div>
        </div>

      </div>

      <div className="lg-only" style={{ height: "50px" }}></div>

      <div className="buttons butons-mobile mobile-only">
        <button style={{ width: "120px", marginRight: "20px", fontSize: "13px", fontWeight: "400" }} className="btn-hover color-5" onClick={handleButtonClick5}>
          {t('thematic_reports')}
        </button>
        <button style={{ width: "120px", marginRight: "0px", fontSize: "13px", fontWeight: "400" }} className="btn-hover color-5" onClick={handleButtonClick6}>
          {t('weekly_bulletins')}
        </button>
      </div>
      <div className="mobile-only" style={{ height: "20px" }}></div>

      <Container style={{ paddingLeft: "5%", paddingRight: "5%" }}>
   
        <TarihselAciklama />
      </Container>
      <div style={{ height: "50px" }}></div>

      <TarihselResim />
      <div style={{ backgroundColor: "#011029" }}>
        <Container style={{ padding: "7%" }}>
          <TarihselDevami />
        </Container>
      </div>
      <Container style={{ padding: "7%" }}>
        <AnasayfaKitlesel />
      </Container>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <AnasayfaHassas />
          </Container>
        </div>
      </div>
      <Container style={{ padding: "5%" }}>
        <Row>
          <h2 className="text-center gradient-text mb-4" style={{ fontSize: "2.7rem" }}>
            {t('right_to_life_violations')}
          </h2>

          <Col lg={4}>
            <AnasayfaOlumler />
          </Col>
          <Col lg={8}>
            <YillarGrafik />
          </Col>
        </Row>
      </Container>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <AnasayfaKaybetmeler />
          </Container>
        </div>
      </div>

      <Container style={{ padding: "5%" }}>
        <AnasayfaKacirilmalar />
      </Container>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <AnasayfaIhraclar />
          </Container>
        </div>
      </div>

      <Container style={{ padding: "7%" }}>
        <AnasayfaCezaevi />
        <HakIhlaliYillar />
        <div className="buttons">
          <button className="btn-hover color-5" onClick={handleButtonClick1}>
            {t('prison_mistreatment')}
          </button>
        </div>
      </Container>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <div style={{ height: "30px" }}></div>
            <AnasayfaSosyal />
          </Container>
        </div>
      </div>

      <Container style={{ padding: "7%" }}>
        <Row>
          <div style={{ height: "80px" }}></div>

          <h2 className="text-center gradient-text mb-5" style={{ fontSize: "2.7rem" }}>
            {t('closed_institutions')}
          </h2>

          <Col lg={6}>
            <KurumlarAciklama />
          </Col>
          <Col lg={6}>
            <KurumlarGrafik />
          </Col>
          <div className="buttons">
            <button className="btn-hover color-5" onClick={handleButtonClick2}>
              {t('closed_seized_institutions')}
            </button>
          </div>
        </Row>
      </Container>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <h2 className="text-center text-white mb-4" style={{ fontSize: "2.7rem" }}>
              {t('terror_crime_statistics')}
            </h2>

            <AnasayfaTypewriterText />
            <AnasayfaIstatistik />
            <div className="buttons">
              <button className="btn-hover color-5" onClick={handleButtonClick3}>
                {t('comprehensive_statistics')}
              </button>
            </div>
          </Container>
        </div>
      </div>

      <Container style={{ padding: "7%" }}>
        <h2 className="text-center mb-4" style={{ fontSize: "2.7rem" }}>
          {t('judicial_independence')}
        </h2>
        <p className="text-center">
          {t('judicial_independence_description')}
        </p>
        <div className="buttons">
          <button className="btn-hover color-5" onClick={handleButtonClick4}>
            {t('judicial_independence_timeline')}
          </button>
        </div>
      </Container>
    </div>
  );
}

export default AnaSayfa
