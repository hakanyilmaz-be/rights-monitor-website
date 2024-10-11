import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';

const TckTable = () => {
    const { t } = useTranslation();
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
        if (rows.length > 0) {
            rows[0][16] = t('table.year');  // "Yıl" ifadesini "Year" olarak değiştir
        }
        return rows;
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('tr-TR').format(number);
    };

    const columns = [
        { name: t('table.year'), selector: row => row[16], sortable: true, grow: 1 },
        { 
            name: '314', 
            selector: row => formatNumber(row[17]), 
            sortable: true, 
            grow: 1 
        },
    ];

    const paginationOptions = {
        rowsPerPageText: t('table.rowsPerPageText'), 
        rangeSeparatorText: t('table.rangeSeparatorText'),
        selectAllRowsItemText: t('table.selectAllRowsItemText')
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
                backgroundColor: '#0055ff', 
                color: 'black',
            },
        },
    ];

    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>{t('table.totalDecisionCount')}</p>
            <DataTable
                columns={columns}
                data={dataRows}
                highlightOnHover
                striped
                noDataComponent={<div>{t('table.loadingData')}</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
            />
        </div>
    );
}

export default TckTable;
