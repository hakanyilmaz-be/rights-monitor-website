import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import { useTranslation } from 'react-i18next';  // Çeviri için i18next kullanımı
import "./hassas-text.css";

const HassasGiris = () => {
  const { t } = useTranslation();  // useTranslation hook'u ile çeviri fonksiyonunu kullanıyoruz.
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");
  const [c2Value, setC2Value] = useState("");
  const [d2Value, setD2Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=1891916443&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(Number(data[6][8]));
            if (data.length > 1) {
              setB2Value(Number(data[7][8]));
            }
            if (data.length > 1) {
              setC2Value(Number(data[8][8]));
            }
            if (data.length > 1) {
              setD2Value(Number(data[9][8]));
            }
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
          <h1 className="text-white fw-bold mt-5" style={{ fontSize: "2.5rem" }}>
            {t('sensitive_groups')}
          </h1>
         
          <p className="small-paragraph">
            {t('sensitive_groups_description_1')}
          </p>
          <p className="small-paragraph">
            {t('sensitive_groups_description_2')}
          </p>
          <p className="small-paragraph">
            {t('sensitive_groups_description_3')}
          </p>
          <p className="small-paragraph">
            {t('sensitive_groups_description_4')}
          </p>
          <p className="small-paragraph">
            {t('sensitive_groups_description_5')}
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center p-5 desktop-margin-top"
          >
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>{t('pregnant_women')}: {a2Value} {t('people')}</h5>
            <ProgressBar 
              completed={a2Value} 
              bgColor="#4caf50"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "
            />
          </div>
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>{t('patients')}: {b2Value} {t('people')}</h5>
            <ProgressBar 
              completed={b2Value} 
              bgColor="#b84f21"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "

            />
          </div>
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>{t('disabled_people')}: {c2Value} {t('people')}</h5>
            <ProgressBar 
              completed={c2Value} 
              bgColor="#4c6faf"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "

            />
          </div>
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>{t('elderly_people')}: {d2Value} {t('people')}</h5>
            <ProgressBar 
              completed={d2Value} 
              bgColor="#af4caf"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "

            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HassasGiris;
