import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';

const KitleselIller = () => {
    const { t } = useTranslation();
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=734035153&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(2, 83)); 
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
        { name: t('kitleselIller.columns.city'), selector: row => row[0], sortable: true, grow: 1 },
        { name: t('kitleselIller.columns.detentions'), selector: row => row[1], sortable: true, grow: 1 },
        { name: t('kitleselIller.columns.operations'), selector: row => row[2], sortable: true, grow: 1 }
    ];
    

    const paginationOptions = {
        rowsPerPageText: t('kitleselIller.pagination.rowsPerPage'), 
        rangeSeparatorText: t('kitleselIller.pagination.rangeSeparator'),
        selectAllRowsItemText: t('kitleselIller.pagination.selectAllRows')
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
                background: 'linear-gradient(to right, #6DBA91, #69b79e)',
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

    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>{t('kitleselIller.title')}</p>
            <DataTable
                columns={columns}
                data={dataRows}
                pagination
                highlightOnHover
                striped
                noDataComponent={<div>{t('kitleselIller.noData')}</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
            />
        </div>
    );
}

export default KitleselIller;
