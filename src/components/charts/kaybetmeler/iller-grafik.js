import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';

const IllerGrafik = () => {
    const { t } = useTranslation();
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmvOl769rwKcc4YZn5O_UzYEapzgjUe5QG1bDyJDy2QxooD70jm7BXOgoyj3DJwDWfnorpMqT3c6gf/pub?gid=832798037&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(11, 20)); // Take only rows 11 to 20
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
        { name: t('illerGrafik.column1'), selector: row => row[0], sortable: true, grow: 2 },
        { name: t('illerGrafik.column2'), selector: row => row[1], sortable: true, grow: 2 },
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
                background: '#A56475',
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
                noDataComponent={<div>{t('illerGrafik.noData')}</div>}
                customStyles={customStyles}
            />
        </div>
    );
}

export default IllerGrafik;
