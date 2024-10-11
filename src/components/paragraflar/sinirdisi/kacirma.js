import React from "react";
import { useTranslation } from "react-i18next";
import "./sinirdisi-text.css";
import { Col, Row } from "react-bootstrap";
import profileInandi from "../../../assets/img/inandi.jpg";

const KacirmaAciklama = () => {
  const { t } = useTranslation(); // Çeviri hook'u

  return (
    <>
      <Row>
        <Col lg={4}>
          <img alt="Orhan Inandi" src={profileInandi} className="img-fluid" />
          <p className="text-center" style={{ fontSize: "10px" }}>
            {t("inandi_caption")}
          </p>
        </Col>
        <Col lg={8}>
          <h2 className="alt-baslik" style={{ fontWeight: "bold" }}>
            {t("illegal_abductions_titlea")}
          </h2>
          <p className="small-paragraph">{t("illegal_abductions_paragraph1")}</p>
          <p className="small-paragraph">{t("illegal_abductions_paragraph2")}</p>
        </Col>
        <Col lg={12} style={{ paddingTop: "1rem" }}>
          <p className="small-paragraph">{t("illegal_abductions_paragraph3")}</p>
          <p className="small-paragraph">{t("illegal_abductions_paragraph4")}</p>
          <p className="small-paragraph">{t("illegal_abductions_paragraph5")}</p>
          <p className="small-paragraph">{t("illegal_abductions_paragraph6")}</p>
          <p className="small-paragraph">{t("illegal_abductions_paragraph7")}</p>
          <h2 className="alt-baslik" style={{ fontWeight: "bold" }}>
            {t("international_response_title")}
          </h2>
          <p className="small-paragraph">{t("international_response_paragraph1")}</p>
          <p className="small-paragraph">{t("international_response_paragraph2")}</p>
          <p className="small-paragraph">
            {t("international_response_paragraph3")} &nbsp;
            <a href="https://pace.coe.int/en/files/32999/html" target="_blank">
              {t("international_response_link_text")}
            </a>
            {t("international_response_paragraph3_continued")}
          </p>
          <p className="small-paragraph">
            {t("freedom_house_report_part1")} &nbsp;
            <a
              href="https://freedomhouse.org/report/transnational-repression"
              target="_blank"
            >
              {t("freedom_house_report_link")}
            </a>{" "}
            {t("freedom_house_report_part2")}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default KacirmaAciklama;
