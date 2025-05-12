import React from "react";
import { useTranslation } from 'react-i18next';
import "./kiskac.css";
import { Col, Row } from "react-bootstrap";
import LookerStudioIframeKitlesel from "../../locker-studio/locker-studio-iframe-kitlesel";

const KiskacBakan = () => {
  const { t } = useTranslation();

  return (
    <>
     <Row>
     <Col lg={7}>
      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('kiskacbakantitle')}</h2>
    
      <p className="small-paragraph">
        {t('kiskacbakan-p1')}{" "} 
      </p>
    <p className="small-paragraph">
        {t('kiskacbakan-p2')}{" "} 
      </p>
      <ul className="small-paragraph">
        <li>- {t('kiskacbakan-p3')}</li>
        <li>- {t('kiskacbakan-p4')}</li>
      </ul>
      </Col>
       <Col lg={5}>
       <LookerStudioIframeKitlesel/>
      </Col>

      <Col lg={12}>
      <p className="small-paragraph">
        {t('kiskacbakan-p5')}{" "} 
      </p>
      <ul className="small-paragraph">
        <li>- {t('kiskacbakan-p6')}</li>
        <li>- {t('kiskacbakan-p7')}</li>
        <li>- {t('kiskacbakan-p8')}</li>
        <li>- {t('kiskacbakan-p9')}</li>
        <li>- {t('kiskacbakan-p10')}</li>
      </ul>
      <p className="small-paragraph">
        {t('kiskacbakan-p11')}{" "} 
      </p>
          <ul className="small-paragraph">
        <li>- {t('kiskacbakan-p12')}</li>
        <li>- {t('kiskacbakan-p13')}</li>
      </ul>
     <p className="small-paragraph">
        {t('kiskacbakan-p14')}{" "} 
      </p>
      </Col>

 <Col lg={12}>
  <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('kiskacbakandegerlendirme')}</h2>
  <p className="small-paragraph">
        {t('kiskacbakan-p15')}{" "} 
      </p>
        <p className="small-paragraph">
        {t('kiskacbakan-p16')}{" "} 
      </p>
        <p className="small-paragraph">
        {t('kiskacbakan-p17')}  <sup>10</sup>{" "} {t('kiskacbakan-p18')}
      </p>
        <p className="small-paragraph">
        {t('kiskacbakan-p19')}<sup>11</sup>{" "} {t('kiskacbakan-p20')}{" "} {t('kiskacbakan-p21')}<sup>12</sup>{" "} {t('kiskacbakan-p22')}<sup>13</sup>{" "}   {t('kiskacbakan-p23')}{" "} 
      </p>
      
      <p className="small-paragraph">
        {t('kiskacbakan-p24')}{" "} 
      </p>

      <h5 className="mt-2" style={{ fontWeight: "bold" }}>{t('kiskacbakantitle-3')}</h5>

   <p className="small-paragraph">
        {t('kiskacbakan-p25')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p26')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p27')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p28')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p29')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p30')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p31')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p32')}{" "} 
      </p>
         <p className="small-paragraph">
        {t('kiskacbakan-p33')}{" "} 
      </p>

      <h2 className="mt-2" style={{ fontWeight: "bold" }}>{t('kiskacbakantitle-4')}</h2>

         <p className="small-paragraph">
        {t('kiskacbakan-p34')}{" "} 
      </p>

 </Col>

</Row>
    </>
  );
};

export default KiskacBakan;
