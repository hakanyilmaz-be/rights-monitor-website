import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./iskence-charts.css";

function Yas() {
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");
  const [c2Value, setC2Value] = useState("");
  const [d2Value, setD2Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=1306632659&single=true&output=csv";

      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[1][7]);
            if (data.length > 1) {
              setB2Value(data[2][7]);
            }
            if (data.length > 1) {
              setC2Value(data[3][7]);
            }
            if (data.length > 1) {
              setD2Value(data[4][7]);
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

  const totalValue =
    parseFloat(a2Value) +
    parseFloat(b2Value) +
    parseFloat(c2Value) +
    parseFloat(d2Value);

  const data = [
    ["Category", "Value"],
    [
      `Çocuklar (${((parseFloat(a2Value) / totalValue) * 100).toFixed(1)}%)`,
      parseFloat(a2Value),
    ],
    [
      `Kadınlar (${((parseFloat(b2Value) / totalValue) * 100).toFixed(1)}%)`,
      parseFloat(b2Value),
    ],
    [
      `Erkekler (${((parseFloat(c2Value) / totalValue) * 100).toFixed(1)}%)`,
      parseFloat(c2Value),
    ],
    [
      `Bilinmiyor (${((parseFloat(d2Value) / totalValue) * 100).toFixed(1)}%)`,
      parseFloat(d2Value),
    ],
  ];

  const options = {
    title: "",
    is3D: true,
    legend: { position: "bottom", alignment: "center", maxLines: 3 },
    chartArea: { width: "100%", height: "80%" },
    sliceVisibilityThreshold: 0,
    pieSliceText: "percentage",
  };

  return (
    <div className="Yas-chart mt-5" style={{ textAlign: "center" }}>
      <div className="chart-titlea">Cinsiyetlere Göre Dağılım Grafiği</div>
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

export default Yas;
