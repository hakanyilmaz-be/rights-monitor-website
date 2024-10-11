import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./sinirdisi-text.css";

const SinirDisiGiris = () => {
  const { t } = useTranslation(); // Çeviri hook'u
  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");
  const [a4Value, setA4Value] = useState("");
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkIwP6tKmO6tKBjet3T5c4kgg9laweJMsrZ_XAWnyF-0yfX1Z2y4ARRTCuKQkKcDKQSOsC-gbSiotN/pub?gid=422544153&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA1Value(data[0][0]);
          }
          if (data.length > 0) {
            setA2Value(data[1][0]);
          }
          if (data.length > 0) {
            setA3Value(data[2][0]);
          }
          if (data.length > 0) {
            setA4Value(data[4][0]);
          }
          if (data.length > 0) {
            setA5Value(data[5][0]);
          }
          if (data.length > 0) {
            setA6Value(data[6][0]);
          }
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(",").map((cell) => cell.trim()));
    return rows.slice(1); // Başlık satırını atla
  }

  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center ilk-giris pb-5"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white fw-bold mt-5" style={{ fontSize: "2.6rem" }}>
          {t("illegal_deportation_title")}
        </h1>
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            {t("illegal_deportation_paragraph1")}
          </p>
          <p className="small-paragraph text-white">
            {t("illegal_deportation_paragraph2")}
          </p>
          <p className="small-paragraph text-white">
            {t("illegal_deportation_paragraph3")}
          </p>
          <p className="small-paragraph text-white">
            {t("illegal_deportation_paragraph4")}
          </p>
          <p className="small-paragraph text-white">
            {t("illegal_deportation_paragraph5")}
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center desktop-margin-top"
        >
          <div className="first-data">
            <h4 className="header-first text-center">
              {t("illegal_cases_title")}
            </h4>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">{a1Value} {t("different_cases")}</div>
                <div className="i-title-item">{a2Value} {t("different_countries")}</div>
                <div className="i-title-item">{a3Value} {t("people")}</div>
              </div>
            </div>
          </div>
          <div className="second-data">
            <h4 className="text-white text-center">{t("rejected_requests_title")}</h4>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">{a4Value} {t("different_cases")}</div>
                <div className="i-title-item">{a5Value} {t("different_countries")}</div>
                <div className="i-title-item">{a6Value} {t("people")}</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SinirDisiGiris;
