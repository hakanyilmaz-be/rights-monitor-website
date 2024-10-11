import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TerorDataGiris = () => {
  const { t } = useTranslation(); // i18next hook'u

  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row
        className="justify-content-center align-items-center"
        style={{ paddingLeft: "2rem", paddingRight: "1rem" }}
      >
        <h2 className="text-white mt-5">{t('terorDatab.girisTitle')}</h2>

        <h2 className="text-white"> </h2>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            {t('terorDatab.girisDescription')}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TerorDataGiris;
