import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup"; 
import { useTranslation } from "react-i18next";
import "./olumler-text.css";

const OlumlerGiris = () => {
  const { t } = useTranslation();
  const [a5Value, setA5Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][3]);
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
    return rows.slice(1);
  }

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-start">
          <h1 className="text-white fw-bold mt-5" style={{ fontSize: "3rem" }}>
            {t('olumler_giris.title')}
          </h1>
          <p className="small-paragraph text-white">
            {t('olumler_giris.paragraph1')}
          </p>
          <p className="small-paragraph text-white">
            {t('olumler_giris.paragraph2', { count: a5Value })}
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center desktop-margin-top"
        >
          <h2 className="text-white" style={{ fontSize: "6.2rem" }}>
            <CountUp start={700} end={a5Value} duration={5} />
          </h2>
          <h6 className="text-white" style={{ fontSize: "1.4rem" }}>
            {t('olumler_giris.total_deaths')}
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default OlumlerGiris;
