import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './cezaevi-charts.css';

const IhlalTuru = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=2040066483&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(5, 35)); 
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

    const columns = [
        { name: 'Hak İhlali', selector: row => row[0], sortable: true, grow: 1 },
        { name: 'Hak İhlali Sayısı', selector: row => row[1], sortable: true, grow: 0.5 },
    ];

    const paginationOptions = {
        rowsPerPageText: 'Satır Sayısı:', 
        rangeSeparatorText: 'ile',
        selectAllRowsItemText: 'Tümünü Göster'
    };

    const customStyles = {
        rows: {
            style: {
              minHeight: "24px", // Satır yüksekliğini küçült
            },
        },
        headCells: {
            style: {
                padding: '4px 0px 4px 4px', // Hücre içi boşlukları azalt
                background: 'linear-gradient(to right, #04314f, #124d74 )',
                color: '#FFF', // Beyaz yazı
                fontSize: '10px', // Font boyutunu küçült
            },
        },
        cells: {
            style: {
                padding: '2px 2px 2px 4px', // Hücre içi boşlukları azalt
                fontSize: '8px', // Font boyutunu küçült
            },
        },
    };

    return (
        <div className='table-container'>
            <p style={{ fontWeight: 'bold' }}>Cezaevindeki Hak İhlallerinin Türleri</p>
            <DataTable
                columns={columns}
                data={dataRows}
                pagination
                highlightOnHover
                striped
                noDataComponent={<div>Veri yükleniyor ...</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
            />
        </div>
    );
}

export default IhlalTuru;
