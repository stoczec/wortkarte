import * as XLSX from 'xlsx'
import { C1_data } from '../data/C1-data'
const exportToExcel = (data: any[]) => {
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    XLSX.writeFile(wb, 'data.xlsx')
}

const Export = () => {
    return (
        <button
            onClick={() => exportToExcel(C1_data)}
            className="bg-blue-500 text-white p-2 rounded"
        >
            Export to Excel
        </button>
    )
}

export default Export
