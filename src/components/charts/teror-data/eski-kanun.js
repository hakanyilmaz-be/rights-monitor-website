import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';

const EskiKanun = () => {
    const { t } = useTranslation();
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
        { name: t('tabless.year'), selector: row => row[22], sortable: true, grow: 0.7 },
        { 
            name: t('tabless.conviction'), 
            selector: row => formatNumber(row[23]), 
            grow: 1 
        },
        { 
            name: t('tabless.acquittal'), 
            selector: row => formatNumber(row[24]), 
            grow: 1  
        },
        { 
            name: t('tabless.hagb'), 
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
                whiteSpace: 'normal', 
                wordWrap: 'break-word', 
            },
        },
        cells: {
            style: {
                padding: '0px 0px 0px 8px', 
                fontSize: '11px',
                whiteSpace: 'normal', 
                wordWrap: 'break-word', 
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
                noDataComponent={<div>{t('tabless.loadingData')}</div>}
                customStyles={customStyles}
            />
           <p className='mt-2' style={{ fontSize: '10px' }}>{t('tabless.hagbDescription')}</p>
        </div>
    );
}

export default EskiKanun;
