import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useTranslation } from 'react-i18next';

function YillarGrafik() {
  const { t } = useTranslation();
  const [rawData, setRawData] = useState(null); 
  const [chartData, setChartData] = useState(null); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchCSVData = async () => {
      const csvUrl =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv';

      try {
        const response = await axios.get(csvUrl);
        const data = parseCSV(response.data);
        setRawData(data);
      } catch (err) {
        console.error('Error fetching CSV data:', err);
        setError(t('data_fetch_error'));
      }
    };

    fetchCSVData();
  }, []); // Sadece bileşen ilk yüklendiğinde çalışır

  // Dil veya ham veri değiştiğinde grafik verisi yeniden işlenir
  useEffect(() => {
    if (rawData) {
      const formattedData = formatDataForChart(rawData);
      setChartData(formattedData);
    }
  }, [rawData, t]); // rawData veya dil değiştiğinde çalışır

  // CSV verisini parse eden fonksiyon
  function parseCSV(csvText) {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(',').map((cell) => cell.trim()));
    return rows.slice(1); // Başlık satırını atla
  }

  // Grafik için veriyi biçimlendiren fonksiyon
  function formatDataForChart(data) {
    const headers = [
      t('year'),
      t('july_15'), //dogru
      t('deathonthewaytoprison'), //dogru
      t('prison_death'), //dogru
      t('other'),
      t('illness_death'), //dogru
      t('suicide'), //dogru
      t('work_accident'), //dogru
      t('escape_death'), //dogru
      t('law_enforcement_death'), //dogru
      t('court_death'),//dogru
      t('suspicious_death'),
      t('traffic_accident')//dogru
    ];

    const formattedData = [headers];

    for (let i = 4; i <= 13; i++) {
      if (data[i]) {
        formattedData.push([
          data[i][0],
          ...data[i].slice(1).map((value) => Number(value) || 0)
        ]);
      }
    }

    // Sıfır değerli sütunları filtreleme
    const nonEmptyColumns = formattedData[0].map((_, colIndex) =>
      formattedData.some(
        (row, rowIndex) => rowIndex > 0 && row[colIndex] > 0
      )
    );

    const filteredData = formattedData.map((row) =>
      row.filter((_, colIndex) => nonEmptyColumns[colIndex])
    );

    return filteredData;
  }

  const colors = [
    '#274182',
    '#3498DB',
    '#E74C3C',
    '#136937',
    '#ff1500',
    '#1ABC9C',
    '#9B59B6',
    '#E67E22',
    '#fee900',
    '#95A5A6',
    '#D35400',
    '#34495E',
    '#7F8C8D',
    '#360042'
  ];

  const options = {
    title: t('deaths_by_year'),
    chartArea: { width: '60%', height: '75%' },
    isStacked: true,
    hAxis: {
      title: t('year'),
      minValue: 0,
      slantedText: true,
      slantedTextAngle: 45
    },
    vAxis: { title: t('total_count') },
    legend: {
      position: 'right',
      maxLines: 3,
      textStyle: {
        fontSize: 10
      }
    },
    colors: colors
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {!error && !chartData && <div>{t('loading')}</div>}
      {chartData && (
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="500px"
          data={chartData}
          options={options}
          loader={<div>{t('loading')}</div>}
        />
      )}
    </div>
  );
}

export default YillarGrafik;
