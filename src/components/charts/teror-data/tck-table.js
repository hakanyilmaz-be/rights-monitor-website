import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const TckTable = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=1880405891&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(3, 11)); 
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
        { name: 'Yıl', selector: row => row[16], sortable: true, grow: 1 },
        { 
            name: '314', 
            selector: row => formatNumber(row[17]), 
            sortable: true, 
            grow: 1 
        },
    ];

    const paginationOptions = {
        rowsPerPageText: 'Satır Sayısı:', 
        rangeSeparatorText: 'ile',
        selectAllRowsItemText: 'Tümünü Göster'
    };

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

    const conditionalRowStyles = [
        {
            when: (row, index) => index === dataRows.length - 1,
            style: {
                backgroundColor: '#0055ff', // Koyu sarı renk
                color: 'black', // Yazı rengi siyah
            },
        },
    ];

    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>Toplam karar sayısı TCK-TMK-TFK</p>
            <DataTable
                columns={columns}
                data={dataRows}
                highlightOnHover
                striped
                noDataComponent={<div>Veri yükleniyor ...</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles} // Koşullu satır stilleri
            />
        </div>
    );
}

export default TckTable;
