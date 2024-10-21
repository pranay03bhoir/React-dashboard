import React from 'react'
import * as XLSX from 'xlsx'
const TableDataDownload = ({filteredData}) => {

    const exportToExcel = () => {
        const workSheet = XLSX.utils.json_to_sheet(filteredData);
        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook,workSheet,"Data");
        XLSX.writeFile(workBook,"table_data.xlsx");
    }
  
    return (
    <div>
      <button onClick={exportToExcel} className='text-3xl text-green-800'>
        <i class="fa-solid fa-file-excel"></i>
      </button>
      <strong className='ms-5 text-cyan-500 text-nowrap'>Download to excel</strong>
    </div>
  );
}

export default TableDataDownload