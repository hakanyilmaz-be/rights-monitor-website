import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

function PastaKovusturmaCinsiyet() {
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");



  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=945141091&single=true&output=csv";

      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[4][16]);
            if (data.length > 1) {
              setB2Value(data[4][18]);
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
    
    ["Erkekler", parseFloat(b2Value)],
    ["Kadınlar", parseFloat(a2Value)],
  
  ];

  const options = {
    title: "Cinsiyetlere Göre Dağılımı",
    is3D: true,
    legend: { position: "bottom", alignment: "start", maxLines: 3 },
    chartArea: { width: "100%", height: "80%" },
  };

  return (
    <div style={{ textAlign: 'center' }}>
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

export default PastaKovusturmaCinsiyet;
