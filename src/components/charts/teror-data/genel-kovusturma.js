import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const GenelKovusturma = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=507472835&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(3, 6)); 
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

    const formatNumber = (number) => {
        return new Intl.NumberFormat('tr-TR').format(number);
    };

    const columns = [
        { name: 'Karar', selector: row => row[13], sortable: true, grow: 1 },
        { 
            name: '309-316', 
            selector: row => formatNumber(row[14]), 
            grow: 1 
        },
        { 
            name: 'TFK', 
            selector: row => formatNumber(row[15]), 
            grow: 1 
        },
        { 
            name: 'TMK', 
            selector: row => formatNumber(row[16]), 
            grow: 1 
        },
    ];



    const customStyles = {
        rows: {
            style: {
                minHeight: "36px", 
            },
        },
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: 'linear-gradient(to right, #27154c, #331374 )',
                color: '#FFF', 
                fontSize: '12px', 
            },
        },
        cells: {
            style: {
                padding: '0px 0px 0px 8px', 
                fontSize: '11px', 
            },
        },
    };


    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>Kovuşturma Neticesinde Verilen Kararlara ait Grafik </p>
            <DataTable
                columns={columns}
                data={dataRows}
                highlightOnHover
                striped
                noDataComponent={<div>Veri yükleniyor ...</div>}
                customStyles={customStyles}
            />
        </div>
    );
}

export default GenelKovusturma;
