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
    const [numberRange, setNumberRange] = useState([0, 0]);
    const [maxNumber, setMaxNumber] = useState(0);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchCSVData = () => {
            const csvUrl =
                i18n.language === 'tr'
                    ? 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=0&single=true&output=csv'
                    : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTSkSCbRLdA49HBF4gWExUZG344xodWkO9_rzCX9l97soMsXvb7YpVd32mQCfvEcmRkfqFJgmk4CCp2/pub?gid=0&single=true&output=csv';

            axios
                .get(csvUrl)
                .then((response) => {
                    parseCSV(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching CSV data:', error);
                    setDataRows([]);
                    setAllData([]);
                    setColumns([]);
                    setMaxNumber(0);
                    setNumberRange([0, 0]);
                });
        };

        fetchCSVData();
    }, [i18n.language]);

    function normalizeDate(dateString) {
        if (!dateString || typeof dateString !== 'string') return null;

        const parts = dateString.split(/[./-]/);
        if (parts.length === 3) {
            const [day, month, year] = parts.map(Number);

            if (!day || !month || !year) return null;

            const parsedDate = new Date(year, month - 1, day);
            return isNaN(parsedDate.getTime()) ? null : parsedDate;
        }

        const fallbackDate = new Date(dateString);
        return isNaN(fallbackDate.getTime()) ? null : fallbackDate;
    }

    function parseNumericValue(value) {
        if (value === null || value === undefined) return 0;
        if (typeof value === 'number') return isNaN(value) ? 0 : value;

        const cleanedValue = value
            .toString()
            .trim()
            .replace(',', '.')
            .match(/-?\d+(\.\d+)?/);

        return cleanedValue ? parseFloat(cleanedValue[0]) : 0;
    }

    function parseCSV(csvText) {
        Papa.parse(csvText, {
            skipEmptyLines: true,
            complete: (results) => {
                const rows = results.data;

                if (rows.length > 0) {
                    const headers = rows[0];
                    const columnsToShow = [0, 1, 4, 6, 7];

                    const data = rows
                        .slice(1)
                        .filter((row) => row && row.length > 0)
                        .map((row) => {
                            let rowData = {};

                            columnsToShow.forEach((colIndex) => {
                                const headerName = headers[colIndex];

                                if (colIndex === 4) {
                                    rowData[headerName] = normalizeDate(row[colIndex]);
                                } else if (colIndex === 1) {
                                    rowData[headerName] = parseNumericValue(row[colIndex]);
                                } else {
                                    rowData[headerName] = row[colIndex] || '';
                                }
                            });

                            return rowData;
                        });

                    const calculatedMaxNumber = data.reduce((max, row) => {
                        const value = parseNumericValue(row[headers[1]]);
                        return value > max ? value : max;
                    }, 0);

                    const selectedColumns = [
                        {
                            name: headers[0],
                            selector: (row) => row[headers[0]] || '',
                            sortable: true,
                            wrap: true,
                            grow: 1
                        },
                        {
                            name: headers[1],
                            selector: (row) => row[headers[1]] || 0,
                            sortable: true,
                            wrap: true,
                            grow: 1
                        },
                        {
                            name: headers[4],
                            selector: (row) => row[headers[4]] || null,
                            sortable: true,
                            wrap: true,
                            grow: 1,
                            format: (row) => {
                                const dateValue = row[headers[4]];
                                return dateValue instanceof Date && !isNaN(dateValue.getTime())
                                    ? dateValue.toLocaleDateString('en-GB')
                                    : '-';
                            }
                        },
                        {
                            name: headers[6],
                            selector: (row) => row[headers[6]] || '',
                            sortable: true,
                            wrap: true,
                            grow: 4.5,
                            cell: (row) => <ExpandableCell data={row[headers[6]]} />
                        },
                        {
                            name: headers[7],
                            selector: (row) => row[headers[7]] || '',
                            sortable: true,
                            wrap: true,
                            grow: 2,
                            cell: (row) =>
                                row[headers[7]] ? (
                                    <a href={row[headers[7]]} target="_blank" rel="noopener noreferrer">
                                        {row[headers[7]]}
                                    </a>
                                ) : (
                                    '-'
                                )
                        }
                    ];

                    setColumns(selectedColumns);
                    setAllData(data);
                    setMaxNumber(calculatedMaxNumber);
                    setNumberRange([0, calculatedMaxNumber]);
                    setDataRows(data);
                } else {
                    setColumns([]);
                    setAllData([]);
                    setDataRows([]);
                    setMaxNumber(0);
                    setNumberRange([0, 0]);
                }
            }
        });
    }

    const applyFilters = (text, city, start, end, range) => {
        let filteredData = [...allData];

        if (text) {
            filteredData = filteredData.filter((item) =>
                Object.keys(item).some((key) => {
                    const value = item[key];
                    return (
                        value !== null &&
                        value !== undefined &&
                        value.toString().toLowerCase().includes(text.toLowerCase())
                    );
                })
            );
        }

        if (city && columns[0]?.name) {
            filteredData = filteredData.filter((row) => row[columns[0].name] === city);
        }

        if (start && end && columns[2]?.name) {
            filteredData = filteredData.filter((row) => {
                const rowDate = row[columns[2].name];
                return (
                    rowDate instanceof Date &&
                    !isNaN(rowDate.getTime()) &&
                    rowDate >= start &&
                    rowDate <= end
                );
            });
        }

        if (range && columns[1]?.name) {
            filteredData = filteredData.filter((row) => {
                const number = parseNumericValue(row[columns[1].name]);
                return number >= range[0] && number <= range[1];
            });
        }

        setDataRows(filteredData);
    };

    const handleFilter = (event) => {
        const value = event.target.value;
        setFilterText(value);
        applyFilters(
            value,
            cityFilter,
            startDate ? new Date(startDate) : '',
            endDate ? new Date(endDate) : '',
            numberRange
        );
    };

    const handleCityFilter = (event) => {
        const selectedCity = event.target.value;
        setCityFilter(selectedCity);
        setShowAllCities(false);
        applyFilters(
            filterText,
            selectedCity,
            startDate ? new Date(startDate) : '',
            endDate ? new Date(endDate) : '',
            numberRange
        );
    };

    const handleCityCheckbox = () => {
        const newShowAllCities = !showAllCities;
        setShowAllCities(newShowAllCities);

        if (newShowAllCities) {
            setCityFilter('');
            applyFilters(
                filterText,
                '',
                startDate ? new Date(startDate) : '',
                endDate ? new Date(endDate) : '',
                numberRange
            );
        } else {
            applyFilters(
                filterText,
                cityFilter,
                startDate ? new Date(startDate) : '',
                endDate ? new Date(endDate) : '',
                numberRange
            );
        }
    };

    const handleDateFilter = (start, end) => {
        setStartDate(start);
        setEndDate(end);

        applyFilters(
            filterText,
            cityFilter,
            start ? new Date(start) : '',
            end ? new Date(end) : '',
            numberRange
        );
    };

    const handleDateCheckbox = () => {
        const newShowAllDates = !showAllDates;
        setShowAllDates(newShowAllDates);

        if (newShowAllDates) {
            setStartDate('');
            setEndDate('');
            applyFilters(filterText, cityFilter, '', '', numberRange);
        } else {
            applyFilters(
                filterText,
                cityFilter,
                startDate ? new Date(startDate) : '',
                endDate ? new Date(endDate) : '',
                numberRange
            );
        }
    };

    const handleSliderChange = (values) => {
        setNumberRange(values);
        applyFilters(
            filterText,
            cityFilter,
            startDate ? new Date(startDate) : '',
            endDate ? new Date(endDate) : '',
            values
        );
    };

    const operationCount = Array.isArray(dataRows) ? dataRows.length : 0;

    const totalDetentionCount =
        Array.isArray(dataRows) && columns[1]?.name
            ? dataRows.reduce((sum, row) => {
                  const value = parseNumericValue(row[columns[1].name]);
                  return sum + value;
              }, 0)
            : 0;

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

            <Row className="align-items-start">
                <Col lg={8}>
                    <Row>
                        <Col lg={5}>
                            <p className="mt-4">
                                <strong>{t('filterByCity')}</strong>
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flexWrap: 'nowrap'
                                }}
                            >
                                <select
                                    className="form-select"
                                    value={cityFilter}
                                    onChange={handleCityFilter}
                                    disabled={showAllCities}
                                    style={{ flex: '1 0 auto' }}
                                >
                                    <option value="">{t('selectCity')}</option>
                                    {[...new Set(allData.map((row) => row[columns[0]?.name]).filter(Boolean))].map(
                                        (city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        )
                                    )}
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
                        <Col lg={8}>
                            <p className="mt-4">
                                <strong>{t('filterByDateRange')}</strong>
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flexWrap: 'nowrap'
                                }}
                            >
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
                </Col>

                <Col lg={4}>
                    <div
                        style={{
                            marginTop: '24px',
                            padding: '20px',
                            background: '#f8f9fa',
                            borderRadius: '12px',
                            border: '1px solid #e9ecef'
                        }}
                    >
                        <div style={{ marginBottom: '18px' }}>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                {t('operationCountKitlesel')}
                            </div>
                            <div style={{ fontSize: '32px', fontWeight: '700' }}>
                                {operationCount}
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                {t('totalDetentionKitlesel')}
                            </div>
                            <div style={{ fontSize: '32px', fontWeight: '700' }}>
                                {totalDetentionCount}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p className="mt-4">
                        <strong>{t('filterByNumber')}</strong>
                    </p>
                    <Slider
                        className="number-range-slider"
                        min={0}
                        max={maxNumber}
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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px'
                        }}
                    >
                        <span>{numberRange[0]}</span>
                        <span>{numberRange[1]}</span>
                    </div>
                </Col>
            </Row>

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

    const safeData = typeof data === 'string' ? data : '';
    const preview = safeData ? `${safeData.substring(0, 200)}...` : t('noData');

    return (
        <div>
            {expand ? safeData : preview}
            {safeData && (
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