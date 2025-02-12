import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import "./anasayfa-text.css";
import "./buton.css";
import { useNavigate } from 'react-router-dom';

const AnasayfaKaybetmeler = () => {
  const { t, i18n  } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");
  const [a7Value, setA7Value] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const handleButtonClick = () => {
    if (i18n.language === 'en') {
      navigate('/en/missing-people');
    } else {
      navigate('/tr/kaybedilenler');
    }
  };


  const gradientTextStyle = {
    background: "linear-gradient(to left, #ffa19e, #8ec3ff)",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounting) {
          setIsCounting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isCounting]);

  function parseCSV(csvText) {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(",").map((cell) => cell.trim()));
    return rows.slice(1); // Başlık satırını atla
  }

  return (
    <Container ref={ref}>
      <Row>
        <h2 className="text-center text-white" style={{ fontSize: "2.4rem" }}>
          {t('still_missing')}
        </h2>

        <Col lg={4}>
          <div className="text-center text-white">
            <h2 style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}>
              {isCounting && <CountUp start={700} end={a5Value} duration={5} />}{" "}
              <span style={{ fontSize: "1.2rem" }}>{t('days')}</span>
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
              Sunay Elmas
            </h6>
          </div>
        </Col>
        <Col lg={4}>
          <div className="text-center text-white">
            <h2 style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}>
              {isCounting && <CountUp start={700} end={a6Value} duration={5} />}{" "}
              <span style={{ fontSize: "1.2rem" }}>{t('days')}</span>
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
              Ayhan Oran
            </h6>
          </div>
        </Col>
        <Col lg={4}>
          <div className="text-center text-white">
            <h2 style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}>
              {isCounting && <CountUp start={700} end={a7Value} duration={5} />}{" "}
              <span style={{ fontSize: "1.2rem" }}>{t('days')}</span>
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
              Yusuf Bilge Tunç
            </h6>
          </div>
        </Col>
      </Row>
      <p className="mt-5 text-white">
        {t('forced_disappearances_text')}
      </p>
      <div className="buttons">
        <button className="btn-hover color-5" onClick={handleButtonClick}>
          {t('forced_disappearances_button')}
        </button>
      </div>
    </Container>
  );
};

export default AnasayfaKaybetmeler;
