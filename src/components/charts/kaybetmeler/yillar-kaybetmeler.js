import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const YillarKaybetmeler = () => {
  const [data, setData] = useState([
    ['Year', 'Vaka Sayısı'],
    ['2016', 0],
    ['2017', 0],
    ['2018', 0],
    ['2019', 0],
    ['2020', 0],
    ['2021', 0],
  ]);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmvOl769rwKcc4YZn5O_UzYEapzgjUe5QG1bDyJDy2QxooD70jm7BXOgoyj3DJwDWfnorpMqT3c6gf/pub?gid=832798037&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const parsedData = parseCSV(response.data);
          if (parsedData.length > 0) {
            setData([
              ['Year', 'Vaka Sayısı'],
              ['2016', parseFloat(parsedData[0][1])],
              ['2017', parseFloat(parsedData[1][1])],
              ['2018', parseFloat(parsedData[2][1])],
              ['2019', parseFloat(parsedData[3][1])],
              ['2020', parseFloat(parsedData[4][1])],
              ['2021', parseFloat(parsedData[5][1])],
            ]);
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
    <div>
   
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={{
        title: 'Yıllara Göre Değişim Grafiği',
          hAxis: {
            title: 'Yıl',
          },
          vAxis: {
            title: 'Değer',
          },
          legend: { position: 'bottom' },
          animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
          },
        }}
      />
     
    </div>
  );
};

export default YillarKaybetmeler;
