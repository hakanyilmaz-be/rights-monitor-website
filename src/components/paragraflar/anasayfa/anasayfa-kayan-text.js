import React, { useEffect, useState } from "react";
import axios from "axios";
import "./anasayfa-text.css"


const AnasayfaKayanText = () => {
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
    <>
          <div className="first-data">
            <h5 className="header-first11">
              Uluslararası Hukuka Aykırı Şekilde Türkiye'ye Götürülme Vakaları
            </h5>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item11"> {a1Value} farklı olayda</div>
                <div className="i-title-item11">{a2Value} farklı ülkeden</div>
                <div className="i-title-item11">{a3Value} kişi</div>
              </div>
            </div>
          </div>


    </>
  );
};

export default AnasayfaKayanText;
