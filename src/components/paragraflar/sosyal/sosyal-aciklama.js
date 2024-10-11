import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./sosyal-text.css";
import khk from "../../../assets/img/khk.jpg";

const SosyalAciklama = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 style={{ fontWeight: "bold" }}>{t("sosyalAciklama.title")}</h2>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <p className="small-paragraph">
            {t("sosyalAciklama.intro")}
          </p>
          <ul className="small-paragraph">
            <li>
              <b>{t("sosyalAciklama.financialRestrictions.title")}</b>
              <ul>
                <li>{t("sosyalAciklama.financialRestrictions.example1")}</li>
                <li>{t("sosyalAciklama.financialRestrictions.example2")}</li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col>
          <img
            alt={t("sosyalAciklama.imageAlt")}
            src={khk}
            className="img-fluid mt-2 mb-2"
            style={{ borderRadius: "8px" }}
          />
        </Col>
      </Row>
      <ul className="small-paragraph">
        <li>
          <b>{t("sosyalAciklama.employment.title")}</b>
          <ul>
            <li>{t("sosyalAciklama.employment.detail")}</li>
          </ul>
        </li>
        <li>
          <b>{t("sosyalAciklama.education.title")}</b>
          <ul>
            <li>{t("sosyalAciklama.education.detail1")}</li>
            <li>{t("sosyalAciklama.education.detail2")}</li>
          </ul>
        </li>
        <li>
          <b>{t("sosyalAciklama.socialRights.title")}</b>
          <ul>
            <li>{t("sosyalAciklama.socialRights.detail1")}</li>
            <li>{t("sosyalAciklama.socialRights.detail2")}</li>
          </ul>
        </li>
        <li>
          <b>{t("sosyalAciklama.supportDeprivation.title")}</b>
          <ul>
            <li>{t("sosyalAciklama.supportDeprivation.detail1")}</li>
            <li>{t("sosyalAciklama.supportDeprivation.detail2")}</li>
          </ul>
        </li>
      </ul>

      <Row>
        <Col>
          <h2 className="mt-5" style={{ fontWeight: "bold" }}>
            {t("sosyalAciklama.internationalLawTitle")}
          </h2>
          <p className="small-paragraph">
            {t("sosyalAciklama.internationalLawParagraph1")}
          </p>
          <p className="small-paragraph">
            {t("sosyalAciklama.internationalLawParagraph2")}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default SosyalAciklama;
