import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const EskiKanun = () => {
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=620615788&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(13, 20)); 
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
        { name: 'Yıl', selector: row => row[22], sortable: true, grow: 0.7 },
        { 
            name: 'Mahkumiyet', 
            selector: row => formatNumber(row[23]), 
            grow: 1 
        },
        { 
            name: 'Beraat', 
            selector: row => formatNumber(row[24]), 
            grow: 1  
        },
        { 
            name: '*HAGB', 
            selector: row => formatNumber(row[25]), 
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
                whiteSpace: 'normal', // Başlık hücrelerinin metninin sarılması için eklendi
                wordWrap: 'break-word', // Başlık hücrelerinin metninin sarılması için eklendi
            },
        },
        cells: {
            style: {
                padding: '0px 0px 0px 8px', 
                fontSize: '11px',
                whiteSpace: 'normal', // Hücrelerin metninin sarılması için eklendi
                wordWrap: 'break-word', // Hücrelerin metninin sarılması için eklendi
            },
        },
    };

    return (
        <div>
           
            <DataTable
                columns={columns}
                data={dataRows}
                highlightOnHover
                striped
                noDataComponent={<div>Veri yükleniyor ...</div>}
                customStyles={customStyles}
            />
           <p className='mt-2' style={{ fontSize: '10px' }}>*Hükmün Açıklanmasının Geriye Bırakılması</p>

        </div>
    );
}

export default EskiKanun;
