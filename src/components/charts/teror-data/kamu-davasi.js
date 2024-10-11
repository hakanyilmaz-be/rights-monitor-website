import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next';

const KamuDavasi = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([
    [t('chartb.year'), t('chartb.personCount')],
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
              [t('chartb.year'), t('chartb.personCount')],
              ['2015', parseFloat(parsedData[15][13])],
              ['2016', parseFloat(parsedData[16][13])],
              ['2017', parseFloat(parsedData[17][13])],
              ['2018', parseFloat(parsedData[18][13])],
              ['2019', parseFloat(parsedData[19][13])],
              ['2020', parseFloat(parsedData[20][13])],
              ['2021', parseFloat(parsedData[21][13])],
              ['2022', parseFloat(parsedData[22][13])],
              ['2023', parseFloat(parsedData[23][13])],
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
          title: t('chartb.kamuDavasiTitle'),
          hAxis: {
            title: t('chartb.year'),
          },
          vAxis: {
            title: t('chartb.value'),
          },
          legend: { position: 'bottom' },
          animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
          },
          series: {
            0: { color: '#FF0000' }
          },
        }}
      />
    </div>
  );
};

export default KamuDavasi;
