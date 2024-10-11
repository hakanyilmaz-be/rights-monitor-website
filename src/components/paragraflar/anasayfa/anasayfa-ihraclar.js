import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // i18next kullanımı için import
import AnimatedGradientText from "../../animated-gradient-text/AnimatedGradientText";
import CountUp from "react-countup";
import "./anasayfa-text.css";
import "./buton.css";
import { useNavigate } from "react-router-dom";

const AnasayfaIhraclar = () => {
  const { t, i18n } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");
  const navigate = useNavigate();


  const handleButtonClick = () => {
    if (i18n.language === 'en') {
      navigate('/en/dismissals');
    } else {
      navigate('/tr/ihraclar');
    }
  };


  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=1944929832&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][0]);
          }
          if (data.length > 0) {
            setA6Value(data[1][0]);
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

  const renderSentence = () => {
    if (i18n.language === "tr") {
      return (
        <>
          <CountUp style={{ color: "red" }} start={0} end={a6Value} duration={5} />{" "}
          {t("profession_group")} en az{" "}
          <CountUp start={0} end={a5Value} duration={5} />{" "}
          {t("people_dismissed")}.
        </>
      );
    } else {
      return (
        <>
          At least{" "}
          <CountUp start={0} end={a5Value} duration={5} />{" "}
          {t("people")} have been dismissed from{" "}
          <CountUp style={{ color: "red" }} start={0} end={a6Value} duration={5} />{" "}
          {t("profession_group")}.
        </>
      );
    }
  };

  return (
    <Container>
      <h2 className="text-center text-white mb-4" style={{ fontSize: "2.7rem" }}>
        {t("dismissals")}
      </h2>

      <h3 className="fw-bold mt-5 baslik">
        <AnimatedGradientText>{renderSentence()}</AnimatedGradientText>
      </h3>

      <div style={{ height: "30px" }}></div>

      <p className="text-white">{t("dismissals_context")}</p>
      <div className="buttons">
        <button className="btn-hover color-5" onClick={handleButtonClick}>
          {t("dismissal_statistics")}
        </button>
      </div>
    </Container>
  );
};

export default AnasayfaIhraclar;
