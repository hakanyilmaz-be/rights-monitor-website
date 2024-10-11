import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next';

const ToplamKararSayisi = () => {
  const { t } = useTranslation();
  
  const [data, setData] = useState([
    [t('chart.year'), t('chart.personCount')],
    ['2015', 0],
    ['2016', 0],
    ['2017', 0],
    ['2018', 0],
    ['2019', 0],
    ['2020', 0],
    ['2021', 0],
    ['2022', 0],
    ['2023', 0],
  ]);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=1880405891&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const parsedData = parseCSV(response.data);
          if (parsedData.length > 0) {
            setData([
              [t('chart.year'), t('chart.personCount')],
              ['2015', parseFloat(parsedData[15][11])],
              ['2016', parseFloat(parsedData[16][11])],
              ['2017', parseFloat(parsedData[17][11])],
              ['2018', parseFloat(parsedData[18][11])],
              ['2019', parseFloat(parsedData[19][11])],
              ['2020', parseFloat(parsedData[20][11])],
              ['2021', parseFloat(parsedData[21][11])],
              ['2022', parseFloat(parsedData[22][11])],
              ['2023', parseFloat(parsedData[23][11])],
            ]);
          }
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, [t]);

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
          title: t('chart.title'),
          hAxis: {
            title: t('chart.year'),
          },
          vAxis: {
            title: t('chart.value'),
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

export default ToplamKararSayisi;
