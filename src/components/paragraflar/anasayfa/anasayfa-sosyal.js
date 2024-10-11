import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import CountUp from "react-countup"; 
import "./buton.css";
import { useNavigate } from 'react-router-dom';

const AnasayfaSosyal = () => {
  const { t, i18n } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const [isCounting, setIsCounting] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (i18n.language === 'en') {
      navigate('/en/socio-economic-rights-violations');
    } else {
      navigate('/tr/sosyal-ekonomik-hak-ihlali');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounting) {
          setIsCounting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isCounting]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center ilk-giris"
      ref={ref}
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white mt-5 sosyal-baslik">
          {t('social_and_economic_rights_violations')}
        </h1>

        <div style={{ height: "20px" }}></div>
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            {t('social_economic_rights_description')}
          </p>
          <div className="buttons mb-4">
            <button className="btn-hover color-5" onClick={handleButtonClick}>
              {t('social_economic_rights_button')}
            </button>
          </div>
        </Col>
        <Col lg={6} className="text-start intro">
          <div className="info-box-container">
            <div className="info-box box1">
              <p className="title">{t('incident_count')}</p>
              {isCounting && (
                <CountUp className="count" start={0} end={58} duration={5} />
              )}
            </div>
            <div className="info-box box2">
              <p className="description">
                {t('incident_description')}
              </p>
            </div>
          </div>
          <div className="info-box-container mt-3">
            <div className="info-box box1">
              <p className="title">{t('institution_count')}</p>
              {isCounting && (
                <CountUp className="count" start={0} end={30} duration={5} />
              )}
            </div>
            <div className="info-box box2">
              <p className="description">
                {t('institution_description')}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AnasayfaSosyal;
