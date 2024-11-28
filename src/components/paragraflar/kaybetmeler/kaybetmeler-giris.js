import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next"; // i18n için import
import "./kaybetmeler-text.css";


const KaybetmelerGiris = () => {
  const { t } = useTranslation(); // Çeviri hook'u
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");
  const [a7Value, setA7Value] = useState("");

  const gradientTextStyle = {
    background: "linear-gradient(270deg, #ffe985, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmvOl769rwKcc4YZn5O_UzYEapzgjUe5QG1bDyJDy2QxooD70jm7BXOgoyj3DJwDWfnorpMqT3c6gf/pub?gid=276250322&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][4]);
          }
          if (data.length > 0) {
            setA6Value(data[1][4]);
          }
          if (data.length > 0) {
            setA7Value(data[25][4]);
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
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white fw-bold mt-5" style={{ fontSize: "3rem" }}>
          {t("zorla_kaybedilmeler")} {/* Başlık çevirisi */}
        </h1>
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            {t("zorla_kaybedilme_paragraph_1")} {/* 1. Paragraf çevirisi */}
          </p>
          <p className="small-paragraph text-white">
            {t("zorla_kaybedilme_paragraph_2")} {/* 2. Paragraf çevirisi */}
          </p>
          <p className="small-paragraph text-white">
            {t("zorla_kaybedilme_paragraph_3")} {/* 3. Paragraf çevirisi */}
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center desktop-margin-top"
        >
          <h2 style={{ ...gradientTextStyle, fontSize: "2.4rem" }}>
            {t("hala_kayip")} {/* Hala kayıp metni */}
          </h2>
          <div>
            <h2
              className="text-white"
              style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}
            >
              <CountUp start={700} end={a5Value} duration={5} />{" "}
              <span style={{ fontSize: "1.2rem" }}>{t("gundur")}</span> {/* Gün sayısı */}
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
              Sunay Elmas {/* Kayıp kişi ismi */}
            </h6>
          </div>
          <div>
            <h2
              className="text-white"
              style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}
            >
              <CountUp start={700} end={a6Value} duration={5} />{" "}
              <span style={{ fontSize: "1.2rem" }}>{t("gundur")}</span> {/* Gün sayısı */}
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
              Ayhan Oran {/* Kayıp kişi ismi */}
            </h6>
          </div>
          <div>
            <h2
              className="text-white"
              style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}
            >
              <CountUp start={700} end={a7Value} duration={5} />{" "}
              <span style={{ fontSize: "1.2rem" }}>{t("gundur")}</span> {/* Gün sayısı */}
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
              Yusuf Bilge Tunç {/* Kayıp kişi ismi */}
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KaybetmelerGiris;
