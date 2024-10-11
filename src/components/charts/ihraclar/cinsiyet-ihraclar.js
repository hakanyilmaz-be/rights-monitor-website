import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import { useTranslation } from "react-i18next";
import "./ihrac-charts.css";

function CinsiyetIhraclar() {
  const { t } = useTranslation();
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");
  const [c2Value, setC2Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=1944929832&single=true&output=csv";

      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[4][1]);
            if (data.length > 1) {
              setB2Value(data[5][1]);
            }
            if (data.length > 1) {
              setC2Value(data[6][1]);
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
    [t("category"), t("value")],
    [t("men"), parseFloat(a2Value)],
    [t("women"), parseFloat(b2Value)],
    [t("unknown"), parseFloat(c2Value)],
  ];

  const options = {
    title: "",
    is3D: true,
    legend: { position: "bottom", alignment: "center", maxLines: 3 },
    chartArea: { width: "100%", height: "60%" },
  };

  return (
    <div className="cinsiyet-chart mt-4">
      <div className="chart-title">{t("gender_distribution_chart")}</div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="250px"
      />
    </div>
  );
}

export default CinsiyetIhraclar;
