import React from "react";
import { useTranslation } from "react-i18next";
import "./sinirdisi-text.css";
import { Col, Row } from "react-bootstrap";
import interpol from "../../../assets/img/interpol.png";
import interpolDocument from "../../../assets/img/interpol-document.png";

const InterpolAciklama = () => {
  const { t } = useTranslation(); // Çeviri hook'u

  return (
    <>
      <Row>
        <Col className="interpol-resmi" lg={4}>
          <img alt="interpol" src={interpol} className="img-fluid" />
          <a href="https://www.patreon.com/posts/adam-kacirmalara-58333013?l=de" target="_blank">
            <img alt="interpol-document" src={interpolDocument} className="img-fluid" />
          </a>
          <p className="text-center" style={{ fontSize: "10px" }}>
            {t("interpol_image_caption")}
          </p>
        </Col>
        <Col lg={8}>
          <h2 style={{ fontWeight: "bold" }}>{t("interpol_title")}</h2>
          <p className="small-paragraph">
            {t("interpol_paragraph1")}
          </p>
          <p className="small-paragraph">
            {t("interpol_paragraph2")}
          </p>
        </Col>
        <Col lg={12}>
          <p className="small-paragraph mt-3">
            {t("interpol_paragraph3_part1")}&nbsp;
            <a href="https://www.birgun.net/haber/interpol-773-feto-suphelisi-icin-kirmizi-bulten-talebini-reddetti-347202" target="_blank">
              {t("interpol_paragraph3_link")}
            </a>
            &nbsp;{t("interpol_paragraph3_part2")}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default InterpolAciklama;
