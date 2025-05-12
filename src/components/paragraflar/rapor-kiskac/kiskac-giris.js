import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimatedGradientText from "../../animated-gradient-text/AnimatedGradientText";
import "./kiskac.css";
import girisImg from "../../../assets/img/kiskac-giris.jpeg"
import { useTranslation } from "react-i18next";

const KiskacGiris = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="fw-bold mt-5 baslik">
          {i18n.language === "tr" ? (
            <AnimatedGradientText>
            Hukuksuzluğun Yeni İsmi: “Kıskaç”
            </AnimatedGradientText>
          ) : (
            <AnimatedGradientText>
            The New Name of Lawlessness: “Clampdown”
            </AnimatedGradientText>
          )}
        </h1>
       
        <div style={{ height: "30px" }}></div>
         <Col lg={5}>
  <div className="center-image" style={{ display: 'block', textAlign: 'center' }}>
    <img
      alt="Kıskaç Operasyonları"
      src={girisImg}
      className="img-fluid"
      style={{ width: 'auto', height: '200px', marginTop: "-1.5rem", borderRadius: '10px' }}
    />
    <p style={{ fontSize: '0.75rem', color: 'white', marginTop: '0.25rem', padding: '0.1rem 1rem' }}>
      ihraç öğretmen İ.A. Kayseri'de ikamet ettiği adreste gözaltına alındı. Fotoğraf (DHA)
    </p>
  </div>
</Col>


        <Col lg={7} className="text-start">
          <p className="small-paragraph text-white">
            {t('rk_paragraph_1')}<sup>1</sup>  {t('rk_paragraph_2')}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default KiskacGiris;
