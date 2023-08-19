import { createContext, useEffect, useRef, useState } from 'react'

export const State = createContext()

export default function StateContext({ children }) {
  // Date object
  const date = new Date()

  let currentDay = String(date.getDate()).padStart(2, '0')

  let currentMonth = String(date.getMonth() + 1).padStart(2, '0')

  let currentYear = date.getFullYear()

  // we will display the date as DD-MM-YYYY

  let currentDate = `${currentDay}/${currentMonth}/${currentYear}`

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [payrollDate, setPayrollDate] = useState(currentDate)
  const [transportAllowance, setTransportAllowance] = useState(0)
  const [livingAllowance, setLivingAllowance] = useState(0)
  const [dueDate, setDueDate] = useState()
  const [basicSalary, setBasicSalary] = useState(0)
  const [total, setTotal] = useState(0)
  const [grossSalary, setGrossSalary] = useState(0)
  //advances
  const [advances,setAdvances] = useState(0);
  // pension3%EmployeeContribution
  const [pension3EmployeeContribution, setPension3EmployeeContribution] = useState(0)
  // pension5%EmployerContribution
  const [pension5EmployerContribution, setPension5EmployerContribution] = useState(0)
  // maternity0.3%EmployeeContribution
  const [maternity03EmployeeContribution, setMaternity03EmployeeContribution] = useState(0)
  // maternity0.3%EmployerContribution
  const [maternity03EmployerContribution, setMaternity03EmployerContribution] = useState(0)
  // totalPensionPayable
  const [totalPensionPayable, setTotalPensionPayable] = useState(0)
  // totalMaternityPayable
  const [totalMaternityPayable, setTotalMaternityPayable] = useState(0)
  // netSalaryBeforeCBHI
  const [netSalaryBeforeCBHI, setNetSalaryBeforeCBHI] = useState(0)
  // Employee0.5%CBHIContributions
  const [employee05CBHIContributions, setEmployee05CBHIContributions] = useState(0)
  //netPay
  const [netPay, setNetPay] = useState(0)
  let [paye, setPaye] = useState(0)
  const [width] = useState(641)
  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  useEffect(() => {
    // CalcSum();
    let totalss = 0
    totalss += parseInt(basicSalary) + parseInt(transportAllowance) + parseInt(livingAllowance)
    setGrossSalary(totalss)
  }, [basicSalary, transportAllowance, livingAllowance])

  const context = {
    name,
    setName,
    address,
    setAddress,
    basicSalary,
    setBasicSalary,
    transportAllowance,
    livingAllowance,
    setTransportAllowance,
    setLivingAllowance,
    payrollDate,
    setPayrollDate,

    //calculations
    grossSalary,
    setGrossSalary,
    netPay,
    paye,
    setPaye,
    total,
    setTotal,
    width,
    componentRef,
    handlePrint,
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
  }

  return <State.Provider value={context}>{children}</State.Provider>
}
