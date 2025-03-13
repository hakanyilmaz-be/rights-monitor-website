import React from "react";
import { useTranslation } from 'react-i18next';
import "./page-text-2024.css";
import { Col, Row } from "react-bootstrap";
import Kitlesel2024 from "../../charts/2024/kitlesel-2024";

const P2024KitleselAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
     <Row>
     <Col lg={6}>
      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('p2024kitlesel_title')}</h2>
      <p className="small-paragraph">
        {t('informant_kitlesel2024-1')}{" "} 

        {t('informant_kitlesel2024-2')}{" "}

        {t('informant_kitlesel2024-3')}

      </p>
   
      <h3 className="mt-2" >{t('p2024kitlesel_title-2')}</h3>

      <p className="small-paragraph">
        {t('informant_kitlesel2024-4')}
      </p>
      </Col>
       <Col lg={6}>
        <Kitlesel2024/>
      </Col>
</Row>
    </>
  );
};

export default P2024KitleselAciklama;
