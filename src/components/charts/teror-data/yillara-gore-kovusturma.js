import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const YillarKovusturmaGrafik = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=945141091&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const rows = parseCSV(response.data);
                const chartData = [[t('graph.year'), t('graph.conviction'), t('graph.suspendedSentence'), t('graph.acquittal')]];
                rows.slice(3, 13).forEach(row => {
                    chartData.push([row[20], parseInt(row[23]), parseInt(row[22]), parseInt(row[21]) ]);
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
                loader={<div>{t('graph.loading')}</div>}
                data={data}
                options={{
                    title: t('graph.title'),
                    vAxis: { title: t('graph.verdictCount') },
                    hAxis: { title: t('graph.year') },
                    seriesType: 'bars',
                    series: { 
                        0: { type: 'bars' },
                        1: { type: 'bars', color: '#d6a00c' } 
                    },
                    colors: ['#cd1010', '#d6a00c', '#3e8c40'], 
                    legend: { position: 'bottom' }
                }}
            />
            <Container>
            <p className='mt-3 small-paragraph'>{t('graph.explanation')}</p>
            </Container>
        </div>
    );
}

export default YillarKovusturmaGrafik;
