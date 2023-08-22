import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { DateRangePicker } from '@mui/lab';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import Header from '../components/Header'
import { useTheme } from '@mui/material'
import LayoutAuthenticated from '../layouts/Authenticated'
import Test from '../components/Payroll/test'
import DateRangePickerComponent from '../components/shared/DateRangePickerComponent';
import AntdRangePicker from '../components/shared/AntdRangePicker';
import axios from 'axios'

const Payroll = () => {
  const [data, setData] = useState([])
  const [payrollData, setPayrollData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/payroll')
      .then((response) => {
        const payrollWithIds = response.data.payrolls.map((payroll, index) => ({
          ...payroll,
          id: index + 1,
          firstName: payroll.employeeId?.firstName,
          familyName: payroll.employeeId?.familyName,
        }))

        setPayrollData(payrollWithIds)
        console.log(payrollWithIds)
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get('http://localhost:5000/api/v1/employee').then((response) => {
      setData(response.data.employees)
    })
    allPayrolls()
  }, [])
  const allPayrolls = () => {}

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    { field: 'id', headerName: '#', flex: 0.5 },
    { field: 'firstName', headerName: 'First Name' },
    {
      field: 'familyName',
      headerName: 'Family Name',
      cellClassName: 'name-column--cell',
    },
    {
      field: 'netPay',
      headerName: 'Net Topay',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      minWidth: 90,
    },
    {
      field: 'basicSalary',
      headerName: 'Basic Salary',
      minWidth: 100,
    },
    {
      field: 'transportAllowance',
      headerName: 'Transport Allowance',
      minWidth: 150,
    },
    {
      field: 'livingAllowance',
      headerName: 'Living Allowance',
      minWidth: 130,
    },
    {
      field: 'grossSalary',
      headerName: 'Gross Salary',
      minWidth: 110,
    },
    {
      field: 'paye',
      headerName: 'PAYE',
      minWidth: 70,
    },
    {
      field: 'pension3EmployeeContribution',
      headerName: 'Pension 3% Employee Contribution',
      minWidth: 260,
    },
    {
      field: 'pension5EmployerContribution',
      headerName: 'Pension 5% Employer Contribution',
      minWidth: 250,
    },
    {
      field: 'totalPensionPayable',
      headerName: 'Total Pension Payable',
      minWidth: 160,
    },
    {
      field: 'maternity03EmployeeContribution',
      headerName: 'Maternity 0.3% Employee Contribution',
      minWidth: 260,
    },
    {
      field: 'maternity03EmployerContribution',
      headerName: 'Maternity 0.3% Employer Contribution',
      minWidth: 280,
    },
    {
      field: 'totalMaternityPayable',
      headerName: 'Total Maternity Payable',
      minWidth: 180,
    },
    {
      field: 'netSalaryBeforeCBHI',
      headerName: 'Net Salary Before CBHI',
      minWidth: 200,
    },
    {
      field: 'employee05CBHIContributions',
      headerName: 'Employee 0.5% CBHI contributions',
      minWidth: 280,
    },
    {
      field: 'advances',
      headerName: 'Advances',
    },
    {
      field: 'netPay',
      headerName: 'NET PAY',
    },
  ]

  const [active, setActive] = useState('logs')

  //filtering rows by date
  const [filteredRows, setFilteredRows] = useState(payrollData);
  const handleDateRangeChange = (newDateRange) =>{
    // Filter the rows based on the selected date range
    const filteredData = payrollData.filter((row)=>{
      const date = new Date(row.date);
      return (
        (!newDateRange[0]||date>=newDateRange[0])&&
        (!newDateRange[1] || date <= newDateRange[1])
      )

    })
    setFilteredRows(filteredData);
  }
  return (
    <Box m="20px">
      <Header title="Payroll" />
      <ul className="flex relative">
        <li
          className={`${
            active === 'logs' && 'bg-gray-300'
          } flex justify-center items-center w-32 cursor-pointer`}
        >
          <a className="flex flex-col text-center p-4" onClick={() => setActive('logs')}>
            Payroll Logs
          </a>
        </li>
        <li
          className={`${
            active === 'pay' && 'bg-gray-300 p-4'
          } w-24 flex justify-center items-center cursor-pointer`}
        >
          <a className="flex flex-col text-center" onClick={() => setActive('pay')}>
            New Pay
          </a>
        </li>
      </ul>
      {active === 'logs' ? (
        <Box
          className="bg-gray-300"
          // m="40px 0 0 0"
          height="75vh"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          {/* <div className='flex flex-col'>           */}
          <AntdRangePicker/>
          <DataGrid rows={payrollData} columns={columns} components={{ Toolbar: GridToolbar }} />
          {/* </div> */}
        </Box>
      ) : (
        <>{data.length !== 0 ? <Test MOCK_DATA={data} /> : <p>Loading...</p>}</>
      )}
    </Box>
  )
}
Payroll.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Payroll
