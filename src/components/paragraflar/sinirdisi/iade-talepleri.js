import React from "react";
import { useTranslation } from "react-i18next";
import "./sinirdisi-text.css";
import { Col, Row } from "react-bootstrap";
import iadeTalebi from "../../../assets/img/iade-talebi.png";

const IadeTalepleri = () => {
  const { t } = useTranslation(); // Çeviri hook'u

  return (
    <>
      <Row>
        <Col lg={8}>
          <h2 style={{ fontWeight: "bold" }}>{t("government_requests_title")}</h2>
          <p className="small-paragraph">
            {t("government_requests_paragraph1_part1")} &nbsp;
            <a href="https://www.state.gov/wp-content/uploads/2022/03/313615_TURKEY-2021-HUMAN-RIGHTS-REPORT.pdf" target="_blank">
              {t("government_requests_paragraph1_link")}
            </a>
            {t("government_requests_paragraph1_part2")}
            &nbsp;
            <a href="https://freedomhouse.org/report/transnational-repression/turkey" target="_blank">
              {t("government_requests_paragraph2_link")}
            </a>
            .
          </p>
          <p className="small-paragraph">{t("government_requests_paragraph3")}</p>
        </Col>
        <Col className="iade-gorsel" lg={4}>
          <img alt={t("image_alt_text")} src={iadeTalebi} className="img-fluid" />
          <p className="text-center" style={{ fontSize: "10px" }}>
            {t("image_caption")}
          </p>
        </Col>
        <Col lg={12}>
          <p className="small-paragraph mt-2">{t("government_requests_paragraph4")}</p>
        </Col>
      </Row>
    </>
  );
};

export default IadeTalepleri;
