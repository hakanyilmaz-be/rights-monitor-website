import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next'; // i18n import edildi

const IskenceIller = () => {
    const { t } = useTranslation(); // useTranslation hook'u kullanıldı
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=1306632659&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(2, 39)); 
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
        { name: t('city'), selector: row => row[9], sortable: true, grow: 1 },
        { name: t('numberOfVictims'), selector: row => row[10], sortable: true, grow: 1 },
    ];

    const paginationOptions = {
        rowsPerPageText: t('rowsPerPageText'),
        rangeSeparatorText: t('rangeSeparatorText'),
        selectAllRowsItemText: t('selectAllRowsItemText'),
    };

    const customStyles = {
        rows: {
            style: {
                minHeight: "36px", 
            },
        }, 
        headCells: {
            style: {
                padding: '8px 0px 8px 12px',
                background: '#5f3df8',
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
                pagination
                striped
                noDataComponent={<div>{t('loadingData')}</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
            />
        </div>
    );
}

export default IskenceIller;
