import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Papa from 'papaparse';
import { FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // i18next hook'u
import "./advanced-table-cezaevi.css"

function AdvancedTableCezaevi() {
    const [dataRows, setDataRows] = useState([]);
    const [allData, setAllData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filterText, setFilterText] = useState('');
    const { t, i18n } = useTranslation(); // i18next hook'u

    useEffect(() => {
        const fetchCSVData = () => {
            const csvUrl =
                i18n.language === 'tr'
                    ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=1952002039&single=true&output=csv"
                    : "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=336734633&single=true&output=csv";

            axios.get(csvUrl)
                .then((response) => {
                    parseCSV(response.data);
                })
                .catch(error => {
                    console.error('Error fetching CSV data:', error);
                });
        };

        fetchCSVData();
    }, [i18n.language]); // Dil değişikliğini izleyerek uygun CSV'yi çekeriz

    function parseCSV(csvText) {
        Papa.parse(csvText, {
            complete: (results) => {
                const rows = results.data;
                if (rows.length > 0) {
                    const headers = rows[0];
                    const columnsToShow = [2, 3, 4, 5, 6];

                    const data = rows.slice(1).map(row => {
                        let rowData = {};
                        columnsToShow.forEach((colIndex) => {
                            rowData[headers[colIndex]] = row[colIndex];
                        });
                        return rowData;
                    });

                    const selectedColumns = [
                        {
                            name: headers[2],
                            selector: row => row[headers[2]],
                            sortable: true,
                            wrap: true,
                            grow: 1
                        },
                        {
                            name: headers[3],
                            selector: row => row[headers[3]],
                            sortable: true,
                            wrap: true,
                            grow: 3
                        },
                        {
                            name: headers[4],
                            selector: row => row[headers[4]],
                            sortable: true,
                            wrap: true,
                            grow: 3
                        },
                        {
                            name: headers[5],
                            selector: row => row[headers[5]],
                            sortable: true,
                            wrap: true,
                            grow: 2
                        },
                        {
                            name: headers[6],
                            selector: row => row[headers[6]],
                            sortable: true,
                            wrap: true,
                            grow: 2.3,
                            cell: row => <a href={row[headers[6]]} target="_blank" rel="noopener noreferrer">{row[headers[6]]}</a>
                        }
                    ];

                    setDataRows(data);
                    setAllData(data);
                    setColumns(selectedColumns);
                }
            }
        });
    }

    const handleFilter = (event) => {
        const value = event.target.value;
        setFilterText(value);
        if (value) {
            const filteredData = allData.filter(item => {
                return Object.keys(item).some(key =>
                    item[key].toString().toLowerCase().includes(value.toLowerCase())
                );
            });
            setDataRows(filteredData);
        } else {
            setDataRows(allData); 
        }
    };

    const paginationOptions = {
        rowsPerPageText: t('rowsPerPageText'),
        rangeSeparatorText: t('rangeSeparatorText'),
        selectAllRowsItemText: t('selectAllRowsItemText')
    };

    const customStyles = {
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: '#124d74',
                color: '#FFF',
                fontSize: '12px',
            }
        },
        cells: {
            style: {
                padding: '8px',
                fontSize: '11px',
            }
        }
    };

    return (
        <div className="advanced-table-wrapper">
            <p style={{ fontWeight: 'bold' }}>{t('filterText')}</p>
            <FormControl
                type="text"
                placeholder={t('searchPlaceholder')}
                className="mb-3"
                value={filterText}
                onChange={handleFilter}
            />
            <div className="advanced-table-container">
                <DataTable
                    columns={columns}
                    data={dataRows}
                    defaultSortFieldId={1}
                    pagination
                    highlightOnHover
                    responsive
                    striped
                    noDataComponent={<div>{t('noData')}</div>}
                    paginationComponentOptions={paginationOptions}
                    customStyles={customStyles}
                />
            </div>
        </div>
    );
}

export default AdvancedTableCezaevi;
