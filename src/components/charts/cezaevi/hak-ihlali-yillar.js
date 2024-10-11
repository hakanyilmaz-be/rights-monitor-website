import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import { Chart } from 'react-google-charts';

const HakIhlaliYillar = () => {
    const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=2040066483&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(37, 150)); 
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchCSVData();
    }, []);

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    const chartData = [
        [t('month'), t('event_count')],
        ...dataRows.map(row => [row[0], parseInt(row[1], 10)])
    ];

    const options = {
        title: t('rights_violations_by_month_year'),
        hAxis: { title: t('month') },
        vAxis: { title: t('event_count') },
        legend: 'none',
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
        backgroundColor: '#ffffff',
        colors: ['#e6693e'],
        is3D: true
    };

    return (
        <div style={{marginTop:"-1rem"}}>
            <Chart
                chartType="LineChart"
                width="100%"
                height="350px"
                data={chartData}
                options={options}
            />
        </div>
    );
}

export default HakIhlaliYillar;
