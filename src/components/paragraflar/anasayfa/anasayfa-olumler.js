import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import "./anasayfa-text.css"

const AnasayfaOlumler = () => {
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
    <>

      <h2 className="text-center gradient-text" style={{ fontSize: "6.2rem" }}>
        <CountUp start={700} end={a5Value} duration={5} />
      </h2>
      <h6  className="text-center gradient-text" style={{ fontSize: "1.4rem" }}>Toplam Ölen Kişi Sayısı</h6>
      <p style={{paddingLeft:"6%"}}  className="mt-4">
        2016’dan bugüne kadar Gülen Hareketi ile bağlantılı olmakla suçlanan en
        az {a5Value} kişi hayatını kaybetmiştir. <span style={{color:"red"}}><b> Hayatını kaybeden kişilerden en az
        65'i çocuktur.</b></span>
      </p>
    </>
  );
};

export default AnasayfaOlumler;
