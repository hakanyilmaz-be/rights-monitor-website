import React from "react";
import { useTranslation } from 'react-i18next';
import "./page-text-2024.css";
import { Col, Row } from "react-bootstrap";
import Kitlesel2024 from "../../charts/2024/kitlesel-2024";
import Cezaevleri2024 from "../../charts/2024/cezaevi-2024";

const P2024CezaeviAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
     <Row>
     <Col lg={6}>
      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('p2024cezaevi_title')}</h2>
      <p className="small-paragraph">
        {t('informant_cezaevi2024-1')}{" "} 

        {t('informant_cezaevi2024-2')}{" "}
      </p>
   
      
      </Col>
       <Col lg={6}>
        <Cezaevleri2024/>
      </Col>
</Row>
    </>
  );
};

export default P2024CezaeviAciklama;
