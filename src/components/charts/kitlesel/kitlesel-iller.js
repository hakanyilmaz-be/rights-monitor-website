import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const KitleselIller = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=734035153&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(2, 83)); // Take only rows 1 to 85 (inclusive)
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
        { name: 'İl', selector: row => row[0], sortable: true, grow: 1 },
        { name: 'Gözaltı Sayısı', selector: row => row[1], sortable: true, grow: 1 },
        { name: 'Operasyon Sayısı', selector: row => row[2], sortable: true, grow: 1 }
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
                background: 'linear-gradient(to right, #6DBA91, #69b79e)',
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
            <p style={{ fontWeight: 'bold' }}>İllere Göre Gözaltı ve Operasyon Tablosu</p>
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

export default KitleselIller;
