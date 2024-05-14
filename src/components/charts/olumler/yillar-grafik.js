import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

function YillarGrafik() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv";

      axios.get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          const formattedData = formatDataForChart(data);
          setChartData(formattedData);
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

  function formatDataForChart(data) {
    // Veriyi Google Charts formatına dönüştür
    const headers = ['Yıl', ...data[3].slice(1)];
    const formattedData = [headers];
    for (let i = 4; i <= 12; i++) {
      formattedData.push([data[i][0], ...data[i].slice(1).map(value => Number(value) || 0)]);
    }

    // Boş veya 0 olan kategorileri kaldırmak için
    const nonEmptyColumns = [true]; // İlk sütun olan 'Yıl' dahil
    for (let j = 1; j < headers.length; j++) {
      const columnHasValue = formattedData.some((row, index) => index > 0 && row[j] > 0);
      if (columnHasValue) {
        nonEmptyColumns.push(true);
      } else {
        nonEmptyColumns.push(false);
      }
    }

    const filteredData = formattedData.map(row => row.filter((_, index) => nonEmptyColumns[index]));

    return filteredData;
  }

  // Renkleri belirgin ve farklı yapmak için güncellenmiş renk listesi
  const colors = [
    '#274182', '#3498DB', '#E74C3C', '#136937', '#ff1500', '#1ABC9C', '#9B59B6', '#E67E22',
    '#fee900', '#95A5A6', '#D35400', '#34495E', '#7F8C8D'
  ];

  const options = {
    title: 'Yıllara Göre Ölüm Nedenleri',
    chartArea: { width: '40%', height: '75%' }, // ChartArea genişliği azaltıldı
    isStacked: true,
    hAxis: {
      title: '',
      minValue: 0,
      slantedText: true, // Metinlerin eğik görünmesini sağlar
      slantedTextAngle: 45 // Metinlerin eğim açısı
    },
    vAxis: { title: 'Toplam Sayı' },
    legend: {
      position: 'right',
      maxLines: 3,
      textStyle: {
        fontSize: 10
      }
    },
    colors: colors // Renkleri burada kullanıyoruz
  };

  return (
    <div>
      {chartData.length > 1 && (
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="500px"
          data={chartData}
          options={options}
        />
      )}
    </div>
  );
}

export default YillarGrafik;
