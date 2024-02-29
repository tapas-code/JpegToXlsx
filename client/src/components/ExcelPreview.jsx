import React from 'react';
import {utils as XLSXUtils,write as writeXLSX, writeFile } from 'xlsx';

const ExcelPreview = ({imgFiles}) => {

  const generateExcelFile = () => {
      // Extract name and size information from imgFiles
      const data = imgFiles.map(file => ({
          Name: file.name,
          Size: file.size,
          Type: file.type
      }));

      // Create a workbook
      const workbook = XLSXUtils.book_new();
      // Convert data to a worksheet
      const worksheet = XLSXUtils.json_to_sheet(data);
      // Add the worksheet to the workbook
      XLSXUtils.book_append_sheet(workbook, worksheet, 'Files');
      // Convert the workbook to an array buffer
      const excelBuffer = writeXLSX(workbook, { bookType: 'xlsx', type: 'array' });
      // Create a Blob from the array buffer
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
      // Download the Blob as a file
      writeFile(workbook, 'files_info.xlsx');
  };

  return (
    <>
      <button className='mt-4' onClick={generateExcelFile}>Download Excel</button>
    </>
  )
}

export default ExcelPreview
