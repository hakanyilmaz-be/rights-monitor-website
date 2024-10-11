import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import AnimatedGradientText from "../../animated-gradient-text/AnimatedGradientText";
import CountUp from "react-countup"; 
import "./anasayfa-text.css"

const AnasayfaCezaevi = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=2040066483&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][0]);
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

  return (
    <Container>
      <h2 className="gradient-text text-center" style={{ fontSize: "2.7rem" }}>
        {t('prison_rights_violations')}
      </h2>
      <div style={{ height: "30px" }}></div>
      <AnimatedGradientText>
        <p className="text-center" style={{fontSize: "18px"}}>
          {t('prison_rights_violations_text', { a5Value, a6Value })}
        </p>
      </AnimatedGradientText>
    </Container>
  );
};

export default AnasayfaCezaevi;
