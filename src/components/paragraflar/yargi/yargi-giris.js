import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // i18next kullanımı

const YargiGiris = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu alıyoruz

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row
        className="justify-content-center align-items-center"
        style={{ paddingLeft: "2rem", paddingRight: "1rem" }}
      >
        <h1 className="text-white mt-5">{t('yargi.baslik')}</h1>

        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            {t('yargi.paragraf1')}
          </p>
          <p className="small-paragraph text-white">
            {t('yargi.paragraf2')}
          </p>
          <p className="small-paragraph text-white">
            {t('yargi.paragraf3')}
          </p>
          <p className="small-paragraph text-white">
            {t('yargi.paragraf4')}
          </p>
          <p className="small-paragraph text-white">
            {t('yargi.paragraf5')}
          </p>
          <p className="small-paragraph text-white">
            {t('yargi.zamanCizelgesi')}
          </p>
          <ul className="small-paragraph text-white">
            <li>{t('yargi.madde1')}</li>
            <li>{t('yargi.madde2')}</li>
            <li>{t('yargi.madde3')}</li>
            <li>{t('yargi.madde4')}</li>
            <li>{t('yargi.madde5')}</li>
            <li>{t('yargi.madde6')}</li>
            <li>{t('yargi.madde7')}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default YargiGiris;
