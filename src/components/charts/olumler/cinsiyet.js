import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

function Cinsiyet() {
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");
  const [c2Value, setC2Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv";

      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[1][0]);
            if (data.length > 1) {
              setB2Value(data[1][1]);
            }
            if (data.length > 1) {
              setC2Value(data[1][2]);
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
    return rows.slice(1); // Başlık satırını atla
  }

  const data = [
    ["Category", "Value"],
    ["Erkekler", parseFloat(a2Value)],
    ["Kadınlar", parseFloat(b2Value)],
    ["Çocuklar", parseFloat(c2Value)],
  ];

  const options = {
    title: "Cinsiyetlere Göre Dağılım Grafiği",
    is3D: true,
    legend: { position: "bottom" },
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default Cinsiyet;
