import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeeTable from '../../components/utils/employeeTable'
import LayoutAuthenticated from '../../layouts/Authenticated'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import Head from 'next/head'
import { getPageTitle } from '../../config'

const Employees = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    // axios.get('http://localhost:5000/api/v1/employee').then((response) => {
    axios.get('https://acr-payroll.onrender.com/api/v1/employee').then((response) => {
      console.log(response.data.employees)
      setData(response.data.employees)
    })
  }, [])
  return (    
    <>
      <Head>
        <title>{getPageTitle('All Employees')}</title>
      </Head>
      <Box m="20px">
        <Header title="Employees"/>
        {data.length !== 0 ? <EmployeeTable MOCK_DATA={data} /> : <p>Loading...</p>}
      </Box>
    </>
  )
}
Employees.getLayout = function getLayout(page) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
  }
  
export default Employees
