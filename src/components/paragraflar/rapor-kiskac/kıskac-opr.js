import React from "react";
import { useTranslation } from 'react-i18next';
import "./kiskac.css";
import { Col, Row } from "react-bootstrap";
import Hassas2024 from "../../charts/2024/hassas-2024";
import DataTable2024 from "../2024/data-table2024";
import kiskacOpr from "../../../assets/img/kiskacOpr.jpeg"
import kiskacGazete from "../../../assets/img/kiskac-gazete.jpg"
import transferOpr from "../../../assets/img/transferOpr.jpeg"




const KiskacOpr = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <h2 className="mt-2" style={{ fontWeight: "bold" }}>
          {t("pkiskac_title")}
        </h2>
        <Col lg={6}>
          <p className="small-paragraph">
            {t("informant_kiskacp-1")}
            <sup>3</sup>
          </p>

          <p className="small-paragraph">{t("informant_kiskacp-2")}</p>
          <p className="small-paragraph">{t("informant_kiskacp-3")}</p>
        </Col>
        <Col lg={6}>
          <div className="center-image">
            <img
              alt="Kıskaç Operasyonları"
              src={kiskacOpr}
              className="img-fluid"
              style={{ width: "auto", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </Col>
        <Col lg={7}>
          <h3 className="mt-2">{t("pkiskac_title-2")}</h3>

          <p className="small-paragraph">{t("informant_kiskacp-4")}</p>

          <p className="small-paragraph">
            {t("informant_kiskacp-5")}
            <sup>4</sup> {t("informant_kiskacp-6")}
            <sup>5</sup> {t("informant_kiskacp-7")}
            <sup>6</sup>
            {t("informant_kiskacp-8")}
          </p>

          <p className="small-paragraph">{t("informant_kiskacp-9")}</p>
        </Col>

        <Col lg={5}>
          <div className="center-image">
            <img
              alt="Kıskaç Operasyonları"
              src={kiskacGazete}
              className="img-fluid"
              style={{ width: "auto", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </Col>

        <div style={{ height: "20px" }}></div>

        <Col lg={4}>
          <div className="center-image">
            <img
              alt="Kıskaç Operasyonları"
              src={transferOpr}
              className="img-fluid"
              style={{ width: "auto", height: "380px", borderRadius: "10px" }}
            />
          </div>
        </Col>
        <Col lg={8}>
          <p className="small-paragraph">
            {t("informant_kiskacp-10")}
            <sup>7</sup> {t("informant_kiskacp-11")}
            <sup>8</sup> {t("informant_kiskacp-12")}
          </p>
          <p className="small-paragraph">{t("informant_kiskacp-13")}</p>
        </Col>

        <Col lg={12}>
          <h3 className="mt-2">{t("pkiskac_title-3")}</h3>
          <p className="small-paragraph">
          {t("informant_kiskacp-14")}
          </p>
          <p className="small-paragraph">
          {t("informant_kiskacp-15")}
          </p>
            <p className="small-paragraph">
          {t("informant_kiskacp-16")}
          </p>
          <p className="small-paragraph">
          {t("informant_kiskacp-17")}
          </p>
            <p className="small-paragraph">
          {t("informant_kiskacp-18")}
          </p>
          <p className="small-paragraph">
          {t("informant_kiskacp-19")}<sup>9</sup>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default KiskacOpr;
