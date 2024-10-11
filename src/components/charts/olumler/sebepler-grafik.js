import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';

const SebeplerGrafik = () => {
    const { t, i18n } = useTranslation(); // useTranslation hook
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = i18n.language === 'tr' 
                ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv"
                : "https://docs.google.com/spreadsheets/d/1ywDaoKBvCT1iiq5Q9KHAPYD2bDCcp25Yc9SjXvmiQe0/pub?gid=807579454&single=true&output=csv";

            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(18, 29)); 
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchCSVData();
    }, [i18n.language]); 

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    const columns = [
        { name: t('death_cause'), selector: row => row[0], sortable: true, grow: 2 },
        { name: t('count'), selector: row => row[1], sortable: true, grow: 1 },
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
            <DataTable
                columns={columns}
                data={dataRows}
                highlightOnHover
                striped
                noDataComponent={<div>{t('loading_data')}</div>}
                customStyles={customStyles}
            />
        </div>
    );
}

export default SebeplerGrafik;
