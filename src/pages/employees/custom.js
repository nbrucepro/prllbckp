export default Custom = ()=>{
  return (
    <>Page Not Found</>
  )
}
//  useEffect(() => {
//     grossSalary = transportAllowance+livingAllowance+basicSalary;
//     paye = ((grossSalary - 60000) * 20) / 100
//     let pensioncalc = grossSalary - transportAllowance
//     //pension3%EmployeeContribution
//     pension3EmployeeContribution = (pensioncalc * 3) / 100    
//     //pension5%EmployerContribution
//     pension5EmployerContribution = (pensioncalc * 5) / 100    
//     //maternity0.3%EmployeeContribution
//     maternity03EmployeeContribution = (pensioncalc * 0.3) / 100
//     //maternity0.3%EmployerContribution
//     maternity03EmployerContribution = (pensioncalc * 0.3) / 100
//     //totalPensionPayable
//     totalPensionPayable = pension3EmployeeContribution + pension5EmployerContribution
//     //totalMaternityPayable
//     totalMaternityPayable = maternity03EmployeeContribution + maternity03EmployerContribution
//     //netSalaryBeforeCBHI = 
//     netSalaryBeforeCBHI =
//       grossSalary - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)
//     //Employee0.5%CBHIContributions
//     employee05CBHIContributions = (netSalaryBeforeCBHI * 0.5) / 100
//     const salaryAfterCBHI = netSalaryBeforeCBHI - employee05CBHIContributions
//     //netPay = salaryAfterCBHI-(advances + employee05CBHIContributions)
//     console.log(salaryAfterCBHI)
//     netPay = salaryAfterCBHI - (advances)    

//     //break-down
//     netPay =  (netSalaryBeforeCBHI - employee05CBHIContributions) - advances
//     //break-down
//     netPay =  ((grossSalary - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)) - employee05CBHIContributions) - advances
//     //break-down
//     netPay =  ((grossSalary - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)) - ((netSalaryBeforeCBHI * 0.5) / 100)) - advances
//     //break-down
//     netPay =  (((transportAllowance+livingAllowance+basicSalary) - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)) - ((netSalaryBeforeCBHI * 0.5) / 100)) - advances
//     //break-down
//     netPay =  (((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + maternity03EmployeeContribution)) - ((netSalaryBeforeCBHI * 0.5) / 100)) - advances
//     netPay =  (((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + (livingAllowance+basicSalary)*0.3/100)) - ((netSalaryBeforeCBHI * 0.5) / 100)) - advances
//     netPay =  (((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + (livingAllowance+basicSalary)*0.3/100)) - (((grossSalary - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)) * 0.5) / 100)) - advances
//     netPay =  (((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + (livingAllowance+basicSalary)*0.3/100)) - ((((transportAllowance+livingAllowance+basicSalary) - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)) * 0.5) / 100)) - advances
//     netPay =  (((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + (livingAllowance+basicSalary)*0.3/100)) - ((((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + maternity03EmployeeContribution)) * 0.5) / 100)) - advances
//     netPay =  (((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + (livingAllowance+basicSalary)*0.3/100)) - ((((transportAllowance+livingAllowance+basicSalary) - (paye + ((livingAllowance+basicSalary)*3/100) + (livingAllowance+basicSalary)*0.3/100)) * 0.5) / 100)) - advances
//     netPay =  transportAllowance+livingAllowance+basicSalary - paye + (livingAllowance)*3/100+(basicSalary)*3/100 + (livingAllowance)*0.3/100+(basicSalary)*0.3/100 - transportAllowance+livingAllowance+basicSalary - paye + (livingAllowance)*3/100+(basicSalary)*3/100 + (livingAllowance)*0.3/100+(basicSalary)*0.3/100 * 0.5 / 100
//   }, [grossSalary, transportAllowance, livingAllowance,netPay1])