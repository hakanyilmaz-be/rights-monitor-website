import React from "react";
import { useTranslation } from 'react-i18next';
import "./page-text-2024.css";
import { Col, Row } from "react-bootstrap";

const P2024YargiAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
     <Row>
     <Col lg={12}>
      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('p2024yargi_title')}</h2>
      <p className="small-paragraph">
        {t('informant_yargi2024-1')}
      </p>
      <p className="small-paragraph">
        {t('informant_yargi2024-2')}
      </p>
      </Col>
      
</Row>
    </>
  );
};

export default P2024YargiAciklama;
