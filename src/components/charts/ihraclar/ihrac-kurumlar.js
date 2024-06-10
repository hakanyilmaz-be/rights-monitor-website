import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const IhracKurumlar = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=1944929832&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(246, 464)); 
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
        { name: 'Kurum', selector: row => row[0], sortable: true, grow: 2 },
        { name: 'İhraç Sayısı', selector: row => row[1], sortable: true, grow: 1 },
        
    ];
    

    const paginationOptions = {
        rowsPerPageText: 'Satır Sayısı:', 
        rangeSeparatorText: 'ile',
        //selectAllRowsItem: true,
        selectAllRowsItemText: 'Tümünü Göster'
    };

    const customStyles = {
        rows: {
            style: {
              minHeight: "36px", // override the row height
            },
          },
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: 'linear-gradient(to right, #27154c, #331374 )',
                color: '#FFF', // beyaz yazı
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
            <p style={{ fontWeight: 'bold' }}>Kurumlara Göre İhraç Tablosu</p>
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

export default IhracKurumlar;
