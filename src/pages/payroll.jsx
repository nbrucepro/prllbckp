import { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../mockData'
import Header from '../components/Header'
import { useTheme } from '@mui/material'
import LayoutAuthenticated from '../layouts/Authenticated'
import { Field, Form, Formik } from 'formik'
import ReactToPrint from 'react-to-print'
import { State } from '../context/stateContext'
import Headerp from '../components/Payroll/Header'
import MainDetails from '../components/Payroll/MainDetails'
import ClientDetails from '../components/Payroll/ClientDetails'
import Dates from '../components/Payroll/Dates'
import Table from '../components/Payroll/Table'
import Notes from '../components/Payroll/Notes'
import Footer from '../components/Payroll/Footer'

const Payroll = () => {
  const {
    name,
    setName,
    grossSalary,
    setGrossSalary,
    payrollDate,
    setPayrollDate,
    transportAllowance,
    livingAllowance,
    setTransportAllowance,
    setLivingAllowance,
    componentRef,
  } = useContext(State)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  useEffect(() => {
    console.log('This is payroll @here')
  }, [])
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
  ]
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
        <div className="flex">
          <div className="max-w-6xl py-0 bg-gray-300">
            <div className="bg-gray-300 rounded-full shadow-lg p-8">
              <h1 className="text-2xl font-semibold mb-6">New Pay</h1>
              <Formik
                initialValues={{
                  invoice_number: '',
                  invoice_date: '',
                  client_name: '',
                  client_email: '',
                  description: '',
                  amount: '',
                  currency: 'USD', // Set the default currency value
                }}
                onSubmit={(values) => {
                  // Handle form submission here
                  console.log(values)
                }}
              >
                {({ values }) => (
                  <Form>
                    <div className="grid md:grid-cols-2 gap-6 grid-cols-1 py-5">
                      <div>
                        <label
                          htmlFor="currency"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Employee
                        </label>
                        <Field
                          as="select"
                          id="employee"
                          name="employee"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        >
                          <option value="employee1">employee1</option>
                          <option value="employee2">employee2</option>
                          <option value="employee3">employee3</option>
                          {/* Add more currency options as needed */}
                        </Field>
                      </div>
                      <div>
                        <label
                          htmlFor="Gross salary"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Gross salary
                        </label>{' '}
                        <Field
                          id="Gross salary"
                          type="number"
                          step="0.01"
                          name="amount"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          value={grossSalary}
                          onChange={(e) => setGrossSalary(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="transportAllowance">Transport Allowance</label>
                        <Field
                        id='transport-allowance'
                        type="number"
                        value={transportAllowance}
                        onChange={(e)=>setTransportAllowance(e.target.value)}
                        name='transportallowance'
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                        />
                      </div>
                      <div>
                        <label htmlFor="livingAllowance">Living Allowance</label>
                        <Field
                        id='living-allowance'
                        type="number"
                        value={livingAllowance}
                        onChange={(e)=>setLivingAllowance(e.target.value)}
                        name='livingallowance'
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="payroll-date"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Payroll Date
                        </label>
                        <Field
                          id="payroll-date"
                          type="date"
                          name="payroll_date"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          required
                          value={payrollDate}
                          onChange={(e) => setPayrollDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mt-6">
                      <button
                        type="submit"
                        className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                      >
                        Create Payroll
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          {/* Payroll Preview */}
          <div className="invoice__preview mx-10 bg-white p-5 rounded-2xl border-4 border-blue-200">
            <ReactToPrint
              trigger={() => (
                <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="p-5">
              <Headerp />

              <MainDetails />

              <ClientDetails />

              <Dates />

              <Table />
            </div>
          </div>
        </div>
      )}
    </Box>
  )
}
Payroll.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default Payroll
