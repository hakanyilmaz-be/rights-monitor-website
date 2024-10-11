import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next';

function Meslek() {
  const { t } = useTranslation(); 
  const [a2Value, setA2Value] = useState('');
  const [b2Value, setB2Value] = useState('');

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv";

      axios.get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[0][6]);
            if (data.length > 1) {
              setB2Value(data[0][7]);
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
    [
      'Category', 
      t('meslek.soldier_police'), 
      { role: 'annotation' }, 
      t('meslek.civilian'), 
      { role: 'annotation' }
    ],
    ['', parseFloat(a2Value), a2Value, parseFloat(b2Value), b2Value],
  ];

  const options = {
    title: t('meslek.title'), // Çeviri kullanılarak başlık
    chartArea: { width: '50%' },
    hAxis: {
      minValue: 0,
    },
    vAxis: {
      title: t('meslek.category'),
    },
    legend: { position: 'bottom' },
    colors: ['#57A6A1', '#577B8D'],  
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
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default Meslek;
