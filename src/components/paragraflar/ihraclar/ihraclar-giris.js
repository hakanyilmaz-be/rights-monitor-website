import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import AnimatedGradientText from "../../animated-gradient-text/AnimatedGradientText";
import "./ihraclar-text.css";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const IhraclarGiris = () => {
  const { t, i18n } = useTranslation();
  const [a5Value, setA5Value] = useState(0);
  const [a6Value, setA6Value] = useState(0);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=1944929832&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(Number(data[0][0]));
          }
          if (data.length > 0) {
            setA6Value(Number(data[1][0]));
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
      className="d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="fw-bold mt-5 baslik">
          {i18n.language === "tr" ? (
            <AnimatedGradientText>
              <CountUp style={{ color: "red" }} start={0} end={a6Value} duration={5} />
              {" "}Meslek grubundan en az{" "}
              <CountUp start={0} end={a5Value} duration={5} />{" "}
              kişi ihraç edilmiştir.
            </AnimatedGradientText>
          ) : (
            <AnimatedGradientText>
              At least{" "}
              <CountUp start={0} end={a5Value} duration={5} />{" "}
              people were dismissed from{" "}
              <CountUp style={{ color: "red" }} start={0} end={a6Value} duration={5} />{" "}
              occupational groups.
            </AnimatedGradientText>
          )}
        </h1>
        <h2 className="text-white"> </h2>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            {t('dismissed_paragraph_1')}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default IhraclarGiris;
