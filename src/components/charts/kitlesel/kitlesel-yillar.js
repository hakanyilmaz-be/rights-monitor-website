import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';
import { useTranslation } from 'react-i18next';

const KitleselYillarGrafik = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=734035153&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const rows = parseCSV(response.data);
                const chartData = [[t('kitleselYillarGrafik.year'), t('kitleselYillarGrafik.detentionCount'), t('kitleselYillarGrafik.operationCount')]];
                rows.slice(2, 13).forEach(row => {
                    chartData.push([row[4], parseInt(row[5]), parseInt(row[6])]);
                });
                setData(chartData);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };
        fetchCSVData();
    }, [t]);

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    return (
        <div>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="ComboChart"
                loader={<div>{t('kitleselYillarGrafik.loading')}</div>}
                data={data}
                options={{
                    title: t('kitleselYillarGrafik.title'),
                    vAxis: { title: t('kitleselYillarGrafik.count') },
                    hAxis: { title: t('kitleselYillarGrafik.year') },
                    seriesType: 'bars',
                    series: { 
                        0: { type: 'bars' },
                        1: { type: 'line', color: '#d60c0c', lineWidth: 5 } 
                    },
                    colors: ['#3e8c40', '#d60c0c'], 
                    legend: { position: 'bottom' }
                }}
            />
        </div>
    );
}

export default KitleselYillarGrafik;
