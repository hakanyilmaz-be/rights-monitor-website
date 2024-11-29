import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Papa from 'papaparse';
import { Col, FormControl, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slider';
import './advanced-table.css';

function AdvancedTable() {
    const [dataRows, setDataRows] = useState([]);
    const [allData, setAllData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showAllCities, setShowAllCities] = useState(false);
    const [showAllDates, setShowAllDates] = useState(false);
    const [numberRange, setNumberRange] = useState([0, 742]); // Varsayılan sayı aralığı
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

    function normalizeDate(dateString) {
        const parts = dateString.split(/[./-]/);
        if (parts.length === 3) {
            const [day, month, year] = parts.map(Number);
            return new Date(year, month - 1, day);
        }
        return new Date(dateString);
    }

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
                            if (colIndex === 4) { // Tarih sütunu
                                rowData[headers[colIndex]] = normalizeDate(row[colIndex]);
                            } else {
                                rowData[headers[colIndex]] = row[colIndex];
                            }
                        });
                        return rowData;
                    });

                    const selectedColumns = [
                        {
                            name: headers[0],
                            selector: row => row[headers[0]],
                            sortable: true,
                            wrap: true,
                            grow: 1
                        },
                        {
                            name: headers[1], // Sayı filtresi uygulanacak sütun
                            selector: row => parseFloat(row[headers[1]]),
                            sortable: true,
                            wrap: true,
                            grow: 1
                        },
                        {
                            name: headers[4],
                            selector: row => row[headers[4]],
                            sortable: true,
                            wrap: true,
                            grow: 1,
                            format: row => row[headers[4]].toLocaleDateString('en-GB')
                        },
                        {
                            name: headers[6],
                            selector: row => row[headers[6]],
                            sortable: true,
                            wrap: true,
                            grow: 4.5,
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
        applyFilters(value, cityFilter, startDate, endDate, numberRange);
    };

    const handleCityFilter = (event) => {
        const selectedCity = event.target.value;
        setCityFilter(selectedCity);
        setShowAllCities(false);
        applyFilters(filterText, selectedCity, startDate, endDate, numberRange);
    };

    const handleCityCheckbox = () => {
        const newShowAllCities = !showAllCities;
        setShowAllCities(newShowAllCities);

        if (newShowAllCities) {
            setCityFilter('');
            applyFilters(filterText, '', startDate, endDate, numberRange);
        } else {
            applyFilters(filterText, cityFilter, startDate, endDate, numberRange);
        }
    };

    const handleDateFilter = (start, end) => {
        setStartDate(start);
        setEndDate(end);

        // Her iki tarih doluysa filtre uygula
        if (start && end) {
            applyFilters(filterText, cityFilter, new Date(start), new Date(end), numberRange);
        }
    };

    const handleDateCheckbox = () => {
        const newShowAllDates = !showAllDates;
        setShowAllDates(newShowAllDates);

        if (newShowAllDates) {
            setStartDate('');
            setEndDate('');
            applyFilters(filterText, cityFilter, '', '', numberRange);
        } else {
            applyFilters(filterText, cityFilter, startDate, endDate, numberRange);
        }
    };

    const handleSliderChange = (values) => {
        setNumberRange(values);
        applyFilters(filterText, cityFilter, startDate ? new Date(startDate) : '', endDate ? new Date(endDate) : '', values);
    };

    const applyFilters = (text, city, start, end, range) => {
        let filteredData = allData;

        // Metin filtresi
        if (text) {
            filteredData = filteredData.filter(item =>
                Object.keys(item).some(key =>
                    item[key].toString().toLowerCase().includes(text.toLowerCase())
                )
            );
        }

        // Şehir filtresi
        if (city) {
            filteredData = filteredData.filter(row => row[columns[0].name] === city);
        }

        // Tarih filtresi
        if (start && end) {
            filteredData = filteredData.filter(row => {
                const rowDate = row[columns[2].name];
                return rowDate >= start && rowDate <= end;
            });
        }

        // Sayı filtresi
        if (range) {
            filteredData = filteredData.filter(row => {
                const number = parseFloat(row[columns[1].name]);
                return number >= range[0] && number <= range[1];
            });
        }

        setDataRows(filteredData);
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
            {/* Şehir ve tarih filtreleri */}
            <Row>
                <Col lg={3}>
                    <p className="mt-4"><strong>{t('filterByCity')}</strong></p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}>
                        <select
                            className="form-select"
                            value={cityFilter}
                            onChange={handleCityFilter}
                            disabled={showAllCities}
                            style={{ flex: '1 0 auto' }}
                        >
                            <option value="">{t('selectCity')}</option>
                            {[...new Set(allData.map(row => row[columns[0].name]))].map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        <label style={{ whiteSpace: 'nowrap', margin: '0' }}>
                            <input
                                type="checkbox"
                                checked={showAllCities}
                                onChange={handleCityCheckbox}
                                style={{ marginRight: '5px' }}
                            />
                            {t('showAllCities')}
                        </label>
                    </div>
                </Col>
                </Row>
                <Row>
                <Col lg={5}>
                    <p className="mt-4"><strong>{t('filterByDateRange')}</strong></p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}>
                        <input
                            type="date"
                            className="form-control"
                            value={startDate}
                            onChange={(e) => handleDateFilter(e.target.value, endDate)}
                            disabled={showAllDates}
                            style={{ flex: '1 1 auto' }}
                        />
                        <input
                            type="date"
                            className="form-control"
                            value={endDate}
                            onChange={(e) => handleDateFilter(startDate, e.target.value)}
                            disabled={showAllDates}
                            style={{ flex: '1 1 auto' }}
                        />
                        <label style={{ whiteSpace: 'nowrap', margin: '0' }}>
                            <input
                                type="checkbox"
                                checked={showAllDates}
                                onChange={handleDateCheckbox}
                                style={{ marginRight: '5px' }}
                            />
                            {t('showAllDates')}
                        </label>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col>
            {/* Sayı filtresi */}
            <p className='mt-4'><strong>{t('filterByNumber')}</strong></p>
            <Slider
                className="number-range-slider"
                min={0}
                max={742}
                value={numberRange}
                onChange={handleSliderChange}
                step={1}
                renderTrack={(props, state) => (
                    <div
                        {...props}
                        className={`track ${state.index === 0 ? 'track-left' : 'track-right'}`}
                    />
                )}
                renderThumb={(props, state) => (
                    <div {...props} className="thumb">
                        {state.valueNow}
                    </div>
                )}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <span>{numberRange[0]}</span>
                <span>{numberRange[1]}</span>
            </div>
            </Col>
            </Row>
            {/* Veri Tablosu */}
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
