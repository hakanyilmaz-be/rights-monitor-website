import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // i18next kütüphanesini ekliyoruz.
import "./kapatilan-text.css";

const TarihselAciklama = () => {
  const { t } = useTranslation(); // useTranslation hook'u ile çeviri işlemi

  return (
    <>
      <Row>
        <Col lg={12}>
          <h2 style={{ fontWeight: "bold" }}>{t('tarihselAciklamaTitle')}</h2>
          <p className="small-paragraph">
            {t('tarihselAciklamaParagraph1')}
          </p>
          <p className="small-paragraph">
            {t('tarihselAciklamaParagraph2')}
          </p>
          <p className="small-paragraph">
            {t('tarihselAciklamaParagraph3')}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default TarihselAciklama;
