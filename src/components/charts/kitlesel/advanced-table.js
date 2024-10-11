import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Papa from 'papaparse';
import { FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; 
import './advanced-table.css';

function AdvancedTable() {
    const [dataRows, setDataRows] = useState([]);
    const [allData, setAllData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filterText, setFilterText] = useState('');
    const { t, i18n } = useTranslation(); 

    useEffect(() => {
        const fetchCSVData = () => {
            const csvUrl =
                i18n.language === 'tr'
                    ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=0&single=true&output=csv"
                    : "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSkSCbRLdA49HBF4gWExUZG344xodWkO9_rzCX9l97soMsXvb7YpVd32mQCfvEcmRkfqFJgmk4CCp2/pub?gid=0&single=true&output=csv";
                    
            axios.get(csvUrl)
                .then((response) => {
                    parseCSV(response.data);
                })
                .catch(error => {
                    console.error('Error fetching CSV data:', error);
                });
        };

        fetchCSVData();
    }, [i18n.language]);

    function parseCSV(csvText) {
        Papa.parse(csvText, {
            complete: (results) => {
                const rows = results.data;
                if (rows.length > 0) {
                    const headers = rows[0];
                    const columnsToShow = [0, 1, 4, 6, 7];

                    const data = rows.slice(1).map(row => {
                        let rowData = {};
                        columnsToShow.forEach((colIndex) => {
                            rowData[headers[colIndex]] = row[colIndex];
                        });
                        return rowData;
                    });

                    const selectedColumns = [
                        {
                            name: headers[0],
                            selector: row => row[headers[0]],
                            sortable: true,
                            wrap: true,
                            grow: 0.4
                        },
                        {
                            name: headers[1],
                            selector: row => row[headers[1]],
                            sortable: true,
                            wrap: true,
                            grow: 1.2
                        },
                        {
                            name: headers[4],
                            selector: row => row[headers[4]],
                            sortable: true,
                            wrap: true,
                            grow: 0.5
                        },
                        {
                            name: headers[6],
                            selector: row => row[headers[6]],
                            sortable: true,
                            wrap: true,
                            grow: 5.5,
                            cell: (row) => <ExpandableCell data={row[headers[6]]} />
                        },
                        {
                            name: headers[7],
                            selector: row => row[headers[7]],
                            sortable: true,
                            wrap: true,
                            grow: 2,
                            cell: row => <a href={row[headers[7]]} target="_blank" rel="noopener noreferrer">{row[headers[7]]}</a>
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
        rowsPerPageText: 'Satır Sayısı:',
        rangeSeparatorText: 'ile',
        selectAllRowsItemText: 'Tümünü Göster'
    };

    const customStyles = {
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: '#69b79e',
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
            <p style={{ fontWeight: 'bold' }}>
                {t('filterText')}
            </p>
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

function ExpandableCell({ data }) {
    const [expand, setExpand] = useState(false);
    const { t } = useTranslation(); 

    const preview = data ? `${data.substring(0, 200)}...` : t('noData');

    return (
        <div>
            {expand ? data : preview}
            {data && (
                <button
                    onClick={() => setExpand(!expand)}
                    style={{
                        marginLeft: '5px',
                        cursor: 'pointer',
                        color: 'blue',
                        textDecoration: 'underline',
                        border: 'none',
                        background: 'none'
                    }}
                >
                    {expand ? t('readLess') : t('readMore')}
                </button>
            )}
        </div>
    );
}

export default AdvancedTable;
