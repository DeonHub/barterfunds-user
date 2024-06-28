// CsvExportButton.js
import React from 'react';

const convertArrayToCSV = (array, fields) => {
  const header = fields.map(field => field.header);
  const csvRows = [header.join(',')]; // Add the header row

  // Add the data rows
  for (const row of array) {
    const values = fields.map(field => {
      let value = row;
      for (const key of field.accessor.split('.')) {
        value = value ? value[key] : '';
      }
      const escaped = ('' + value).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
};

const downloadCSV = (csv, filename) => {
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  a.click();
};

const CsvExportButton = ({ data, fields, filename }) => {
  const handleExportCSV = () => {
    const csv = convertArrayToCSV(data, fields);
    downloadCSV(csv, filename);
  };

  return (

    <span
    className="btn btn-white btn-dim btn-outline-light"
    onClick={handleExportCSV}
    >
    <span class="icon material-symbols-outlined">
        cloud_download
    </span>
    <span>Export</span>
    </span>
  );
};

export default CsvExportButton;
