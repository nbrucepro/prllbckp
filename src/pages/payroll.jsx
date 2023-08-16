import { useState } from 'react'
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../mockData'
import Header from '../components/Header'
import { useTheme } from '@mui/material'
import LayoutAuthenticated from '../layouts/Authenticated'
import Test from '../components/Payroll/test'

const Payroll = () => {  
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    { field: 'id', headerName: '#', flex: 0.5 },
    { field: 'registrarId', headerName: 'First Name' },
    {
      field: 'name',
      headerName: 'Last Name',
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Net Topay',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      minWidth: 90,
    },
    {
      field: 'phone',
      headerName: 'Basic Salary',
      minWidth: 100,
    },
    {
      field: 'email',
      headerName: 'Transport Allowance',
      minWidth: 150,
    },
    {
      field: 'address',
      headerName: 'Living Allowance',
      minWidth: 130,
    },
    {
      field: 'city',
      headerName: 'Gross Salary',
      minWidth: 110,
    },
    {
      field: 'zipCode',
      headerName: 'PAYE',
      minWidth: 70,
    },
    {
      field: 'Pension 3% Employee Contribution',
      headerName: 'Pension 5% Employee Contribution',
      minWidth: 260,
    },
    {
      field: 'Pension 5% Employer Contribution',
      headerName: 'Pension 5% Employer Contribution',
      minWidth: 250,
    },
    {
      field: 'Total Pension Payable',
      headerName: 'Total Pension Payable',
      minWidth: 160,
    },
    {
      field: 'maternity 0.3% Employee Contribution',
      headerName: 'Maternity 0.3% Employee Contribution',
      minWidth: 260,
    },
    {
      field: 'maternity 0.3% Employer Contribution',
      headerName: 'Maternity 0.3% Employer Contribution',
      minWidth: 280,
    },
    {
      field: 'Total Maternity Payable',
      headerName: 'Total Maternity Payable',
      minWidth: 180,
    },
    {
      field: 'Other Deductions',
      headerName: 'Other Deductions',
      minWidth: 140,
    },
    {
      field: 'NET SALARY',
      headerName: 'NET SALARY',
      minWidth: 140,
    },
    {
      field: 'Employee 0.5% CBHI contributions',
      headerName: 'Employee 0.5% CBHI contributions',
      minWidth: 280,
    },
    {
      field: 'Advances',
      headerName: 'Advances',
    },
    {
      field: 'NET PAY',
      headerName: 'NET PAY',
    },
    {
      field: 'RSSB Base',
      headerName: 'RSSB Base',
    },
    {
      field: 'PAYE Taxable Base',
      headerName: 'PAYE Taxable Base',
      minWidth: 180,
    },
  ];

 
  const [active, setActive] = useState('logs')
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
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      ) : (
     <Test/>      )}
    </Box>
  )
}
Payroll.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Payroll
