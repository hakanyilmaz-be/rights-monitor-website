import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next';

const KovusturmaKadinlar = () => {
    const { t, i18n } = useTranslation();
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const turkishUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=945141091&single=true&output=csv";
            const englishUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFPmcQbJ4tQWy_QSF__z_lMMQe3xWieJ3Dq20RrwNPZeDTE3ocOelacO27NJ_z_3mh74NeH_gqD2uo/pub?gid=681889261&single=true&output=csv";
            const csvUrl = i18n.language === 'en' ? englishUrl : turkishUrl;
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(2, 5));
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

    const formatNumber = (number) => {
        return new Intl.NumberFormat(i18n.language === 'en' ? 'en-US' : 'tr-TR').format(number);
    };

    const columns = [
        { name: t('decision'), selector: row => row[15], sortable: true, grow: 1 },
        { 
            name: t('total'), 
            selector: row => formatNumber(row[16]), 
            sortable: true, 
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
                background: 'linear-gradient(to right, #d9aa33, #e9c305 )',
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
            <p style={{ fontWeight: 'bold' }}>{t('prosecution_statistics_women')}</p>
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

export default KovusturmaKadinlar;
