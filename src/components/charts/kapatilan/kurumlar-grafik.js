import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const KurumlarGrafik = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ7luwTsBBVIPJbcS195bFfU6JMnKvuMCxn3YdGUJBQU9rXsNg9Xi6PYw_WLTwGGG4L4VZBh2sEBtM/pub?gid=303660759&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(2, 18)); // Take only rows 1 to 85 (inclusive)
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
        { name: 'Kurum Türü', selector: row => row[0], sortable: true, grow: 2 },
        { name: 'Kapatılan Kurum Sayısı', selector: row => row[1], sortable: true, grow: 2 },
       
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
                background: '#231b1b',
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

export default KurumlarGrafik;







