import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

function Meslek() {
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
    ['Category', 'Asker/Polis', { role: 'annotation' }, 'Sivil', { role: 'annotation' }],
    ['', parseFloat(a2Value), a2Value, parseFloat(b2Value), b2Value],
  ];

  const options = {
    title: 'Asker/Polis ve Sivil Can Kayıpları',
    chartArea: { width: '50%' },
    hAxis: {
      minValue: 0,
    },
    vAxis: {
      title: 'Kategori',
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
