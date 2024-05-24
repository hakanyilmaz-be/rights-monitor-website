import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const KadinlarGrafik = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=1891916443&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(1, 5)); 
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
        { name: 'İhlale Maruz Kalan Anneler', selector: row => row[0], sortable: true, grow: 2 },
        { name: 'Sayı', selector: row => row[1], sortable: true, grow: 1 },
    ];

    const customStyles = {
        rows: {
            style: {
              minHeight: "36px",
            },
        },
        headCells: {
            style: {
                padding: '8px 0px 8px 12px',
                background: '#ffaf1e',
                color: '#FFF',
                fontSize: '15px', 
            },
        },
        cells: {
            style: {
                padding: '0px 0px 0px 12px', 
                fontSize: '11px',
            },
        },
    };

    // Conditional styling for the last row to make it bold
    const conditionalRowStyles = [
        {
            when: row => dataRows.indexOf(row) === dataRows.length - 1,
            style: {
                fontWeight: 'bold',
            },
        },
    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={dataRows}
                highlightOnHover
                striped
                noDataComponent={<div>Veri yükleniyor ...</div>}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles} // Apply conditional row styles
            />
        </div>
    );
}

export default KadinlarGrafik;
