
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchCSVData() {
    const [a2Value, setA2Value] = useState('');
    const [b2Value, setB2Value] = useState('');

    useEffect(() => {
        const fetchCSVData = () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=0&single=true&output=csv";
            axios.get(csvUrl)
                .then((response) => {
                    const data = parseCSV(response.data);
                    if (data.length > 0) {
                        setA2Value(data[0][0]);  // İlk satırın (gerçekte ikinci satır) ilk sütunu
                        if (data.length > 1) {
                            setB2Value(data[0][1]);  // İkinci satırın ikinci sütunu (B2)
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

    return (
        <div>
            <h1>A2 Değeri: {a2Value}</h1>
            <h1>B2 Değeri: {b2Value}</h1>
        </div>
    );
}

export default FetchCSVData;
