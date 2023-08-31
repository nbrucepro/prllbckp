import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { getPageTitle } from '../../config'
import ReactToPrint from 'react-to-print'
import Headerp from '../../components/Payroll/Header'
import MainDetails from '../../components/Payroll/MainDetails'
import ClientDetails from '../../components/Payroll/ClientDetails'
import Dates from '../../components/Payroll/Dates'
import Table from '../../components/Payroll/Table'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { State } from '../../context/stateContext'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import goalSeek from 'goal-seek'
// import OneEmployee from '../../components/employee/OneEmployee';
import axios from 'axios'

import { toast } from 'react-toastify'

const EmployeesPage = () => {
  const router = useRouter()
  let {
    basicSalary,
    setBasicSalary,
    grossSalary,
    name,
    setName,
    payrollDate,
    setPayrollDate,
    transportAllowance,
    livingAllowance,
    setTransportAllowance,
    setLivingAllowance,
    paye,
    setPaye,
    componentRef,
    advances,
    pension3EmployeeContribution,
    setPension3EmployeeContribution,
    pension5EmployerContribution,
    setPension5EmployerContribution,
    maternity03EmployeeContribution,
    setMaternity03EmployeeContribution,
    maternity03EmployerContribution,
    setMaternity03EmployerContribution,
    totalPensionPayable,
    setTotalPensionPayable,
    totalMaternityPayable,
    setTotalMaternityPayable,
    netSalaryBeforeCBHI,
    setNetSalaryBeforeCBHI,
    employee05CBHIContributions,
    setEmployee05CBHIContributions,
    setNetPay,
    netPay,
  } = useContext(State)
  const [loading, setLoading] = useState(false)
  const [oneEmployee, setOneEmployee] = useState(true)
  const [netPay1, setnetPay1] = useState(0)
  const [isGenerated, setIsGenerated] = useState(false)
  const [generating, setGenerating] = useState()
  const handledate = (date) => {
    const rwandaDateArray = date.split('-')
    const rwandaDate = []
    for (let i = rwandaDateArray.length - 1; i >= 0; i--) {
      rwandaDate.push(rwandaDateArray[i])
    }
    setPayrollDate(rwandaDate.join('/'))
  }
  useEffect(() => {
    if (grossSalary <= 60000) {
      paye = 0
    } else if (grossSalary > 60000 && grossSalary <= 100000) {
      paye = ((grossSalary - 60000) * 20) / 100
    } else if (grossSalary > 100000) {
      paye = ((grossSalary - 100000) * 30) / 100 + ((100000 - 60000) * 20) / 100
    }
    let pensioncalc = grossSalary - transportAllowance
    //pension3%EmployeeContribution
    pension3EmployeeContribution = (pensioncalc * 3) / 100
    //pension5%EmployerContribution
    pension5EmployerContribution = (pensioncalc * 5) / 100
    //maternity0.3%EmployeeContribution
    maternity03EmployeeContribution = (pensioncalc * 0.3) / 100
    //maternity0.3%EmployerContribution
    maternity03EmployerContribution = (pensioncalc * 0.3) / 100
    //totalPensionPayable
    totalPensionPayable = pension3EmployeeContribution + pension5EmployerContribution
    //totalMaternityPayable
    totalMaternityPayable = maternity03EmployeeContribution + maternity03EmployerContribution
    //netSalaryBeforeCBHI =
    netSalaryBeforeCBHI =
      grossSalary - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)
    //Employee0.5%CBHIContributions
    employee05CBHIContributions = (netSalaryBeforeCBHI * 0.5) / 100
    const salaryAfterCBHI = netSalaryBeforeCBHI - employee05CBHIContributions

    //netPay = salaryAfterCBHI-(advances + employee05CBHIContributions)
    console.log(salaryAfterCBHI)
    netPay = salaryAfterCBHI - advances

    setPaye(paye)
    setPension3EmployeeContribution(pension3EmployeeContribution)
    setPension5EmployerContribution(pension5EmployerContribution)
    setMaternity03EmployeeContribution(maternity03EmployeeContribution)
    setMaternity03EmployerContribution(maternity03EmployerContribution)
    setTotalPensionPayable(totalPensionPayable)
    setTotalMaternityPayable(totalMaternityPayable)
    setNetSalaryBeforeCBHI(netSalaryBeforeCBHI)
    setEmployee05CBHIContributions(employee05CBHIContributions)
    setNetPay(netPay)

    // setBasicSalary(basicSalary1);x x
  }, [grossSalary, transportAllowance, livingAllowance, basicSalary])
  const [isPayeonly, setIsPayeonly] = useState(0)
  useEffect(() => {
    let paye01 = 0
    console.log("Initial paye-",paye01);
    if (generating == 1) {
      let xi = netPay1;
      const fn = (basicSalary1) => {
        const grossSalary = basicSalary1 + livingAllowance + transportAllowance
        const pensioncalc = basicSalary1 + transportAllowance
        if (grossSalary <= 60000) {
          paye01 = 0
        } else if (grossSalary > 60000 && grossSalary <= 100000) {
          paye01 = ((grossSalary - 60000) * 20) / 100
        } else if (grossSalary > 100000) {
          paye01 = ((grossSalary - 100000) * 30) / 100 + ((100000 - 60000) * 20) / 100
        }
        
        const advances = 0
        const pension3EmployeeContribution = (pensioncalc * 3) / 100
        const pension5EmployerContribution = (pensioncalc * 5) / 100
        const maternity03EmployeeContribution = (pensioncalc * 0.3) / 100
        const maternity03EmployerContribution = (pensioncalc * 0.3) / 100
        const totalPensionPayable = pension3EmployeeContribution + pension5EmployerContribution
        //totalMaternityPayable
        const totalMaternityPayable =
          maternity03EmployeeContribution + maternity03EmployerContribution
        //netSalaryBeforeCBHI =
        const netSalaryBeforeCBHI =
          grossSalary - (paye01 + pension3EmployeeContribution + maternity03EmployeeContribution)
        //Employee0.5%CBHIContributions
        const employee05CBHIContributions = (netSalaryBeforeCBHI * 0.5) / 100
        const salaryAfterCBHI = netSalaryBeforeCBHI - employee05CBHIContributions

        //netPay = salaryAfterCBHI10-(advances10 + employee05CBHIContributions)
        const netPay = salaryAfterCBHI - advances
        console.log('BasicSalary-', basicSalary1)
        return netPay
      }
      const fnParams = [xi]

      try {
        const result = goalSeek({
          fn,
          fnParams,
          percentTolerance: 0.1,
          maxIterations: 10,
          maxStep: 10000,
          goal: netPay1,
          independentVariableIdx: 0,
        })
      } catch (e) {}
    }
    setGenerating()
  }, [generating])

  return (
    <>
      <Head>
        <title>{getPageTitle('New Employee')}</title>
      </Head>
      <Box m="20px">
        <Header title="Employees" />

        <div className="flex">
          <div className="max-w-6xl py-0 bg-gray-300 ">
            <h1 className="text-2xl font-semibold m-1">New Employee</h1>
            <div className="bg-gray-300 rounded-full shadow-lg px-8 py-8">
              <h1 className="text-lg font-semibold">Personal Details</h1>
              <Formik
                initialValues={{
                  familyName: '',
                  nationalId: '',
                  telephone: '',
                  picked: 'One',
                }}
                onSubmit={({ familyName, nationalId, telephone }) => {
                  // Handle form submission here
                  setLoading(true)
                  axios
                    // .post('http://localhost:5000/api/v1/employee', {
                    .post('https://acr-payroll.onrender.com/api/v1/employee', {
                      firstName: name,
                      familyName,
                      nationalId,
                      telephone,
                    })
                    .then((response) => {
                      axios
                        // .post('http://localhost:5000/api/v1/payroll', {
                        .post('https://acr-payroll.onrender.com/api/v1/payroll', {
                          employeeId: response.data._id,
                          basicSalary: basicSalary,
                          transportAllowance: transportAllowance,
                          livingAllowance: livingAllowance,
                          grossSalary: grossSalary,
                          paye: paye,
                          pension3EmployeeContribution: pension3EmployeeContribution,
                          pension5EmployerContribution: pension5EmployerContribution,
                          totalPensionPayable: totalPensionPayable,
                          maternity03EmployeeContribution: maternity03EmployeeContribution,
                          maternity03EmployerContribution: maternity03EmployerContribution,
                          totalMaternityPayable: totalMaternityPayable,
                          netSalaryBeforeCBHI: netSalaryBeforeCBHI,
                          employee05CBHIContributions: employee05CBHIContributions,
                          advances: advances,
                          netPay: netPay,
                        })
                        .then((response) => {
                          setLoading(false)
                          toast('Employee added Successfully', {
                            hideProgressBar: true,
                            autoClose: 2000,
                            type: 'success',
                          })
                          router.push('/employees/employees')
                        })
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }}
              >
                {({ values }) => (
                  <Form>
                    <div className="grid md:grid-cols-2 gap-6 grid-cols-1 sm:py-8 sm:px-10 py-1 px-1">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          First Name
                        </label>
                        <Field
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          className="border sm:w-full w-full border-gray-300 rounded-md sm:px-3 sm:py-2 focus:outline-none focus:border-indigo-500"
                          onChange={(e) => {
                            setName(e.target.value)
                          }}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="familyName"
                          className="block sm:w-full w-full text-sm font-medium text-gray-700 mb-2"
                        >
                          Family Name
                        </label>
                        <Field
                          id="familyName"
                          name="familyName"
                          placeholder="Family Name"
                          className="border sm:w-full w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="nationalId"
                          className="sm:w-full w-full block text-sm font-medium text-gray-700 mb-2"
                        >
                          National Id
                        </label>
                        <Field
                          id="nationalId"
                          name="nationalId"
                          type="number"
                          min="1"
                          placeholder="National Id"
                          className="border sm:w-full w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telephone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Telephone
                        </label>
                        <Field
                          id="telephone"
                          name="telephone"
                          placeholder="Telephone"
                          className="border sm:w-full w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="py-8">
                      <h1 className="text-lg font-semibold">Payroll Details</h1>
                      <div id="my-radio-group" className="m-2">
                        Do you know Basic Salary?
                      </div>
                      <div
                        role="group"
                        aria-labelledby="my-radio-group"
                        className="flex justify-left"
                      >
                        <label>
                          <Field
                            type="radio"
                            name="picked"
                            value="One"
                            className="ml-4 cursor-pointer"
                          />
                          Yes
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="picked"
                            value="Two"
                            className="ml-4 cursor-pointer"
                          />
                          No
                        </label>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 grid-cols-1 sm:py-8 sm:px-10 py-1 px-1">
                        {values.picked == 'Two' ? (
                          <div>
                            <label
                              htmlFor="netPay1"
                              className="sm:w-full w-full block text-sm font-medium text-gray-700 mb-2"
                            >
                              Net Pay
                            </label>{' '}
                            <Field
                              id="netPay1"
                              type="number"
                              step="0.01"
                              name="netPay1"
                              className="sm:w-full w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                              value={netPay1}
                              onChange={(e) => setnetPay1(e.target.value)}
                            />
                          </div>
                        ) : (
                          <div>
                            <label
                              htmlFor="basicSalary"
                              className="sm:w-full w-full block text-sm font-medium text-gray-700 mb-2"
                            >
                              Basic salary
                            </label>{' '}
                            <Field
                              id="basicSalary"
                              type="number"
                              step="0.01"
                              name="basicSalary"
                              className="sm:w-full w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                              value={basicSalary}
                              onChange={(e) => setBasicSalary(e.target.value)}
                            />
                          </div>
                        )}
                        <div>
                          <label
                            htmlFor="transportAllowance"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Transport Allowance
                          </label>
                          <Field
                            id="transportAllowance"
                            type="number"
                            value={transportAllowance}
                            onChange={(e) => setTransportAllowance(e.target.value)}
                            name="transportAllowance"
                            className="sm:w-full w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="livingAllowance"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Living Allowance
                          </label>
                          <Field
                            id="living-allowance"
                            type="number"
                            value={livingAllowance}
                            onChange={(e) => setLivingAllowance(e.target.value)}
                            name="livingallowance"
                            className="sm:w-full w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
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
                            className="sm:w-full w-full border border-gray-300 rounded-md px-7 py-2 focus:outline-none focus:border-indigo-500"
                            value={payrollDate}
                            onChange={(e) => handledate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    {values.picked == 'Two' ? (
                      <div className="flex justify-center mt-4">
                        {isGenerated ? (
                          <button
                            type="submit"
                            className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                          >
                            {loading ? 'Saving....' : 'New Employee'}
                          </button>
                        ) : (
                          <button
                            type="button"
                            disabled={netPay1 < 1}
                            onClick={() => {
                              setGenerating(1)
                              setTimeout(() => {
                                toast('Feature Under development!')
                                // setIsGenerated(true)
                                // setGenerating()
                              }, [2000])
                            }}
                            className="bg-indigo-500 text-white rounded-md px-4 py-2 focus:outline-none focus:bg-indigo-600"
                          >
                            {generating == 1 ? 'Generating....' : 'Generate Basic Salary'}
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="flex justify-center mt-4">
                        <button
                          type="submit"
                          className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                        >
                          {loading ? 'Saving....' : 'New Employee'}
                        </button>
                      </div>
                    )}
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
                  Payroll Preview
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
        {/* {oneEmployee && (          
            <OneEmployee/>
        )} */}
      </Box>
    </>
  )
}

EmployeesPage.getLayout = function getLayout(page) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default EmployeesPage
