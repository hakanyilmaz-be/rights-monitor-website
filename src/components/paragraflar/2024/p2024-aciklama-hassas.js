import React from "react";
import { useTranslation } from 'react-i18next';
import "./page-text-2024.css";
import { Col, Row } from "react-bootstrap";
import Hassas2024 from "../../charts/2024/hassas-2024";
import DataTable2024 from "./data-table2024";

const P2024HassasAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
     <Row>
     <Col lg={12}>
      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('p2024hassas_title')}</h2>
      <p className="small-paragraph">
        {t('informant_hassas2024-1')}{" "} 
      </p>
   
      <h3 className="mt-2" >{t('p2024hassas_title-2')}</h3>

      <p className="small-paragraph">
        {t('informant_hassas2024-2')}
      </p>
      </Col>
      <Col lg={6}>
      <h3 className="mt-2" >{t('p2024hassas_title-3')}</h3>
      <p className="small-paragraph">
        {t('informant_hassas2024-3')}
      </p>
      </Col>
       <Col lg={6}>
        <Hassas2024/>
      </Col>
      <Col lg={12}>
   
      <h3 className="mt-2" >{t('p2024hassas_title-4')}</h3>

      <p className="small-paragraph">
        {t('informant_hassas2024-4')}
      </p>
      </Col>
      <Col lg={12}>
        <DataTable2024/>
      </Col>
      <Col lg={12}>

   <p className="small-paragraph">
     {t('informant_hassas2024-5')}
   </p>
   </Col>
</Row>
    </>
  );
};

export default P2024HassasAciklama;
