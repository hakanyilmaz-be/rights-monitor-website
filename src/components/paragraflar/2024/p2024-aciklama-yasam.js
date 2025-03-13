import React from "react";
import { useTranslation } from 'react-i18next';
import "./page-text-2024.css";
import { Col, Row } from "react-bootstrap";
import Kitlesel2024 from "../../charts/2024/kitlesel-2024";
import Yasam20241 from "../../charts/2024/yasam-2024-1";
import Yasam20242 from "../../charts/2024/yasam-2024-2";

const P2024YasamAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
     <Row>
     <Col lg={6}>
      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('p2024yasam_title')}</h2>
      <p className="small-paragraph">
        {t('informant_yasam2024-1')}{" "} 
      </p>
   
      </Col>
       <Col lg={6}>
        <Yasam20241/>
      </Col>

      <Col lg={7}>
        <Yasam20242/>
      </Col>

      <Col lg={5}>

           <p className="small-paragraph mt-4">
        {t('informant_yasam2024-2')}
      </p>
      </Col>
    




</Row>
    </>
  );
};

export default P2024YasamAciklama;
