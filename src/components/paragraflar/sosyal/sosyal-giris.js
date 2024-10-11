import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./sosyal-text.css";
import CountUp from "react-countup";

const SosyalGiris = () => {
  const { t } = useTranslation();

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white mt-5 sosyal-baslik">
          {t("sosyalGiris.title")}
        </h1>

        <h2 className="text-white"> </h2>
        <div style={{ height: "20px" }}></div>
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            {t("sosyalGiris.introText")}
          </p>
        </Col>
        <Col lg={6} className="text-start intro">
          <div className="info-box-container">
            <div className="info-box box1">
              <p className="title">{t("sosyalGiris.caseCountTitle")}</p>
              <CountUp className="count" start={0} end={58} duration={5} />
            </div>
            <div className="info-box box2">
              <p className="description">
                {t("sosyalGiris.caseCountDescription")}
              </p>
            </div>
          </div>
          <div className="info-box-container mt-3">
            <div className="info-box box1">
              <p className="title">{t("sosyalGiris.institutionCountTitle")}</p>
              <CountUp className="count" start={0} end={30} duration={5} />
            </div>
            <div className="info-box box2">
              <p className="description">
                {t("sosyalGiris.institutionCountDescription")}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SosyalGiris;
