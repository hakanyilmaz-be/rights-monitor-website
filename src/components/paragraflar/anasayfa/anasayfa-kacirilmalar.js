import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import "./anasayfa-text.css"
import AnasayfaKayanText from "./anasayfa-kayan-text";
import axios from "axios";
import "./buton.css"
import { useNavigate } from 'react-router-dom';
import AnasayfaMapSinirDisi from "./anasayfa-map-sinir-disi";

const AnasayfaKacirilmalar = () => {
  const { t, i18n } = useTranslation();
  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (i18n.language === 'en') {
      navigate('/en/illegal-deportation');
    } else {
      navigate('/tr/illegal-iade');
    }
  };


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
    <>
      <Row>
        <h2 className="gradient-text mb-5 text-center" style={{ fontWeight: "bold"}}>{t('illegal_extraditions_title')}</h2>
        <Col className="interpol-resmi" lg={6}>
          <AnasayfaMapSinirDisi/>
        </Col>
        <Col lg={6}>
          <AnasayfaKayanText/>
          <p>
            {t('illegal_extraditions_text', { a1Value, a3Value })}
          </p>
          <div className="buttons">
            <button className="btn-hover color-5" onClick={handleButtonClick}>
              {t('transnational_repression_button')}
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AnasayfaKacirilmalar;
