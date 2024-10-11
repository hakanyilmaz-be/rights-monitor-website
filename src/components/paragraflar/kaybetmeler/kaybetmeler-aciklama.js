import React from "react";
import "./kaybetmeler-text.css";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import VideoComponentKaybetmelerTr from "../../video/kaybetmeler-tr";
import YillarKaybetmeler from "../../charts/kaybetmeler/yillar-kaybetmeler";
import IllerGrafik from "../../charts/kaybetmeler/iller-grafik";

const KaybetmelerAciklama = () => {
  const { t, i18n } = useTranslation();
  const isTurkish = i18n.language === 'tr'; // Check if language is Turkish

  return (
    <>
      <Row>
        <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
          {t("kaybetmelerAciklama.title")}
        </h2>
        <Col lg={4}>
          <p className="small-paragraph">
            {t("kaybetmelerAciklama.paragraph1")}
          </p>
          <p className="small-paragraph">
            {t("kaybetmelerAciklama.paragraph2")}
          </p>
        </Col>
        <Col lg={8}>
          <VideoComponentKaybetmelerTr /> {/* Video changes based on language */}
        </Col>
        <Col lg={12}>
          <p className="small-paragraph">
            {t("kaybetmelerAciklama.paragraph3")}
          </p>
          <p className="small-paragraph">
            {t("kaybetmelerAciklama.paragraph4")}
          </p>
        </Col>
        <Col lg={6}>
          <YillarKaybetmeler />
        </Col>
        <Col lg={6}>
          <div style={{ paddingTop: "1.2rem" }}>
            <p className="small-paragraph">
              {t("kaybetmelerAciklama.paragraph5")}
            </p>
            <p className="small-paragraph">
              {t("kaybetmelerAciklama.paragraph6")}
            </p>
          </div>
        </Col>

        <Col lg={6}>
          <div style={{ paddingTop: "1.2rem" }}>
            <p className="small-paragraph">
              {t("kaybetmelerAciklama.paragraph7")}
            </p>
            <p className="small-paragraph">
              {t("kaybetmelerAciklama.paragraph8")}
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <IllerGrafik />
        </Col>
      </Row>
    </>
  );
};

export default KaybetmelerAciklama;
