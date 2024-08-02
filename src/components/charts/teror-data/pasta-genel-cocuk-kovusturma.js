import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./chart-title.css"


function PastaGenelCocukKovusturma() {
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");
  const [c2Value, setC2Value] = useState("");
  const [d2Value, setD2Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=620615788&single=true&output=csv";

      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[1][19]);
            if (data.length > 1) {
              setB2Value(data[2][19]);
            }
            if (data.length > 1) {
              setC2Value(data[3][19]);
            }
            if (data.length > 1) {
              setD2Value(data[4][19]);
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

  const formatNumber = (number) => {
    return new Intl.NumberFormat('tr-TR').format(number);
  };

  const data = [
    ["Category", "Value"],
    ["Mahkumiyet", parseFloat(a2Value)],
    ["Beraat", parseFloat(b2Value)],
    ["Hükmün Açıklanmasının Geriye Bırakılması", parseFloat(c2Value)],
  ];

  const options = {

    is3D: true,
    legend: { position: "bottom", alignment: "center", maxLines: 3 },
    chartArea: { width: "100%", height: "80%" },
  };

  return (
    <div style={{ textAlign: 'center' }}>
    <p className="chart-title2"><strong>Çocuklara Yönelik Yürütülen Kovusturma Kararlarının Dağılımı</strong></p>

      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="250px"
      />
     <p style={{ textAlign: 'center' }}>
  <b>Toplamda <span style={{ color: 'red' }}>{formatNumber(d2Value)}</span> çocuk hakkında kamu davası açılmıştır.</b>
</p>


    </div>
  );
}

export default PastaGenelCocukKovusturma;
