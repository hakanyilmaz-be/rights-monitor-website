import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import { Container } from 'react-bootstrap';

const AnasayfaIstatistik = () => {
    const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=945141091&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const rows = parseCSV(response.data);
                const chartData = [
                    [t('year'), t('conviction'), t('deferment'), t('acquittal')]
                ];
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
                loader={<div>{t('loading_data')}</div>}
                data={data}
                options={{
                    title: t('prosecution_chart_title'),
                    vAxis: { 
                        title: t('decision_count'),
                        textStyle: { color: 'white' },
                        titleTextStyle: { color: 'white' }
                    },
                    hAxis: { 
                        title: t('year'),
                        textStyle: { color: 'white' },
                        titleTextStyle: { color: 'white' }
                    },
                    seriesType: 'bars',
                    series: { 
                        0: { type: 'bars' },
                        1: { type: 'bars', color: '#d6a00c' } 
                    },
                    colors: ['#cd1010', '#d6a00c', '#3e8c40'], 
                    legend: { 
                        position: 'bottom',
                        textStyle: { color: 'white' }
                    },
                    titleTextStyle: { color: 'white' },
                    backgroundColor: 'transparent', 
                    textStyle: { color: 'white' }
                }}
            />
            <Container>
                <p className='mt-3 small-paragraph text-white'>
                    {t('prosecution_analysis')}
                </p>
            </Container>
        </div>
    );
}

export default AnasayfaIstatistik;
