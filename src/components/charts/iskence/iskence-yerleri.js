import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next'; // i18n import edildi

function IskenceYerleri() {
  const { t } = useTranslation(); // useTranslation hook'u kullanıldı
  const [a2Value, setA2Value] = useState('');
  const [b2Value, setB2Value] = useState('');
  const [c2Value, setC2Value] = useState('');
  const [d2Value, setD2Value] = useState('');
  const [e2Value, setE2Value] = useState('');
  const [f2Value, setF2Value] = useState('');
  const [g2Value, setG2Value] = useState('');

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=1306632659&single=true&output=csv';

      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[1][4]);
            if (data.length > 1) {
              setB2Value(data[2][4]);
            }
            if (data.length > 1) {
              setC2Value(data[3][4]);
            }
            if (data.length > 1) {
              setD2Value(data[4][4]);
            }
            if (data.length > 1) {
              setE2Value(data[5][4]);
            }
            if (data.length > 1) {
              setF2Value(data[6][4]);
            }
            if (data.length > 1) {
              setG2Value(data[7][4]);
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching CSV data:', error);
        });
    };

    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/).map((row) => row.split(',').map((cell) => cell.trim()));
    return rows.slice(1);
  }

  const data = [
    [
      t('category'),
      t('judiciary'),
      { role: 'annotation' },
      t('military'),
      { role: 'annotation' },
      t('police'),
      { role: 'annotation' },
      t('prisons'),
      { role: 'annotation' },
      t('detention'),
      { role: 'annotation' },
      t('otherInstitutions'),
      { role: 'annotation' },
      t('unknown'),
      { role: 'annotation' },
    ],
    [
      '',
      parseFloat(a2Value),
      a2Value,
      parseFloat(b2Value),
      b2Value,
      parseFloat(c2Value),
      c2Value,
      parseFloat(d2Value),
      d2Value,
      parseFloat(e2Value),
      e2Value,
      parseFloat(f2Value),
      f2Value,
      parseFloat(g2Value),
      g2Value,
    ],
  ];

  const options = {
    title: t('tortureLocationsTitle'),
    chartArea: {
      width: '80%', // Grafiğin kapladığı alanı azaltarak legend için yer açın
    },
    hAxis: {
      minValue: 0,
    },
    vAxis: {
      title: t('category'),
    },
    legend: {
      position: 'bottom',
      maxLines: 4, // Legend'ın iki satırda gösterilmesini sağlar
      textStyle: {
        fontSize: 10, // Metin boyutunu ayarlayın
      },
    },
    colors: ['#57A6A1', '#577B8D', '#A1C181', '#FCCA46', '#F4845F', '#5F0F40', '#9A031E'],
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

export default IskenceYerleri;
