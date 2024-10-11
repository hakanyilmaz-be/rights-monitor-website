import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next'; // i18n import edildi

const YillarIskence = () => {
  const { t } = useTranslation(); // useTranslation hook'u kullanıldı
  const [data, setData] = useState([
    [t('year'), t('numberOfPeople')],
    ['2014', 0],
    ['2015', 0],
    ['2016', 0],
    ['2017', 0],
    ['2018', 0],
    ['2019', 0],
    ['2020', 0],
    ['2021', 0],
    ['2022', 0],
  ]);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=1306632659&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const parsedData = parseCSV(response.data);
          if (parsedData.length > 0) {
            setData([
              [t('year'), t('numberOfPeople')],
              ['2014', parseFloat(parsedData[1][16])],
              ['2016', parseFloat(parsedData[2][16])],
              ['2017', parseFloat(parsedData[3][16])],
              ['2018', parseFloat(parsedData[4][16])],
              ['2019', parseFloat(parsedData[5][16])],
              ['2020', parseFloat(parsedData[6][16])],
              ['2021', parseFloat(parsedData[7][16])],
              ['2022', parseFloat(parsedData[8][16])],
            ]);
          }
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, [t]); // t fonksiyonunu bağımlılıklara ekledik

  function parseCSV(csvText) {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(",").map((cell) => cell.trim()));
    return rows.slice(1); 
  }

  return (
    <div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          title: t('chartTitle'),
          hAxis: {
            title: t('year'),
          },
          vAxis: {
            title: t('value'),
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

export default YillarIskence;
