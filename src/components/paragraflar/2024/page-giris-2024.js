import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AnimatedGradientText from "../../animated-gradient-text/AnimatedGradientText";
import "./page-text-2024.css";
import { useTranslation } from "react-i18next";

const PageGiris2024 = () => {
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
          2024'de Neler Oldu?
            </AnimatedGradientText>
          ) : (
            <AnimatedGradientText>
            What Happened in 2024?
            </AnimatedGradientText>
          )}
        </h1>
        <h2 className="text-white"> </h2>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            {t('p2024_paragraph_1')}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PageGiris2024;
