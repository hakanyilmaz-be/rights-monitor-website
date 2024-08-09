import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-google-charts';
import { Container } from 'react-bootstrap';

const AnasayfaIstatistik = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=945141091&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const rows = parseCSV(response.data);
                const chartData = [['Yıl', 'Mahkumiyet', 'Hükmün açıklanmasının geriye bırakılması', 'Beraat']];
                rows.slice(3, 13).forEach(row => {
                    chartData.push([row[20], parseInt(row[23]), parseInt(row[22]), parseInt(row[21]) ]);
                });
                setData(chartData);
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

    return (
        <div>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="ComboChart"
                loader={<div>Veri Yükleniyor...</div>}
                data={data}
                options={{
                    title: 'Yıllara göre kovuşturma aşaması ve karar sayısı grafiği',
                    vAxis: { 
                        title: 'Karar Sayısı',
                        textStyle: { color: 'white' },
                        titleTextStyle: { color: 'white' }
                    },
                    hAxis: { 
                        title: 'Yıl',
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
                    backgroundColor: 'transparent', // Arka plan rengini şeffaf yapar
                    textStyle: { color: 'white' } // Genel metin rengini beyaz yapar
                }}
            />
            <Container>
            <p className='mt-3 small-paragraph text-white'>2015'ten 2021'e kadar TCK 309-316 maddeleri arasındaki suçlar ayrı ayrı raporlanmış, bu da spesifik suçlara yönelik detaylı analiz yapılmasını sağlamıştır. Ancak, 2022'den itibaren bu maddeler "Anayasal Düzene ve Bu Düzenin İşleyişine Karşı Suçlar" başlığı altında topluca raporlanmıştır.</p>
            </Container>
        </div>
    );
}

export default AnasayfaIstatistik;
