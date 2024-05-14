import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const SebeplerGrafik = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(18, 29)); // Take only rows 1 to 85 (inclusive)
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
        { name: 'Ölüm Nedeni', selector: row => row[0], sortable: true, grow: 2 },
        { name: 'Sayı', selector: row => row[1], sortable: true, grow: 1 },
       
    ];


    const customStyles = {
        rows: {
            style: {
              minHeight: "36px", // override the row height
            },
          },
        headCells: {
            style: {
                padding: '8px 0px 8px 12px',
                background: '#b40a0a',
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
   


    return (
        <div>
           {/*  <p style={{ fontWeight: 'bold' }}>Ölüm Nedenlerine Göre Veri Tablosu</p> */}
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

export default SebeplerGrafik;







