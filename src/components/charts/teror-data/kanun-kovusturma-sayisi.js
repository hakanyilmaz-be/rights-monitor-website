import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next';

const KanunKovusturmaSayisi = () => {
  const { t } = useTranslation();

  const [a2Value, setA2Value] = useState('');
  const [b2Value, setB2Value] = useState('');
  const [c2Value, setC2Value] = useState('');
  const [d2Value, setD2Value] = useState('');

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=1653365026&single=true&output=csv";

      axios.get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[1][14]);
            if (data.length > 1) {
              setB2Value(data[2][14]);
            }
            if (data.length > 1) {
              setC2Value(data[3][14]);
            }
            if (data.length > 1) {
              setD2Value(data[4][14]);
            }
          }
        })
        .catch(error => {
          console.error('Error fetching CSV data:', error);
        });
    };

    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
    return rows.slice(1);  // Başlık satırını atla
  }

  const data = [
    [t('kanunc.category'), 'TCK 309-316', { role: 'annotation' }, 'TFK', { role: 'annotation' }, 'TMK', { role: 'annotation' }],
    ['', parseFloat(a2Value), a2Value, parseFloat(b2Value), b2Value, parseFloat(c2Value), c2Value],
  ];

  const options = {
    title: t('kanunc.nonProsecutionTitle'),
    chartArea: { width: '50%', height: '70%' }, 
    vAxis: {
      minValue: 0,
    },
    hAxis: {
      title: `${t('kanunc.totalCount')}: ${d2Value}`,
      titleTextStyle: { bold: true }
    },
    legend: { position: 'bottom', maxLines: 3 },
    colors: ['#acba19', '#0a236d', '#ea0963'],
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 12,
        auraColor: 'none',
        color: '#555',
      },
    },
  };

  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="430px"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default KanunKovusturmaSayisi;
