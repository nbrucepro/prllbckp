import goalSeek from 'goal-seek'
import React from 'react'
import { useEffect } from 'react'

const Pap = () => {
  useEffect(() => {
    let xi = 292;
    const transportAllowance = 100; // Given transport allowance value 
    const livingAllowance = 100;
    const fn = (basicSalary) => {
        console.log(basicSalary);
        const grossSalary = basicSalary + livingAllowance +transportAllowance;
        const pensioncalc = basicSalary + livingAllowance;
        const paye = 0;
        const advances = 0;
        const pension3EmployeeContribution = (pensioncalc * 3) / 100;
        const pension5EmployerContribution = (pensioncalc * 5) / 100   
        const maternity03EmployeeContribution = (pensioncalc * 0.3) / 100;
        const maternity03EmployerContribution = (pensioncalc * 0.3) / 100
        const totalPensionPayable = pension3EmployeeContribution + pension5EmployerContribution
        //totalMaternityPayable
        const totalMaternityPayable = maternity03EmployeeContribution + maternity03EmployerContribution
        //netSalaryBeforeCBHI =
        const netSalaryBeforeCBHI =
          grossSalary - (paye + pension3EmployeeContribution + maternity03EmployeeContribution)
        //Employee0.5%CBHIContributions
        const employee05CBHIContributions = (netSalaryBeforeCBHI * 0.5) / 100
        const salaryAfterCBHI = netSalaryBeforeCBHI - employee05CBHIContributions
    
        //netPay = salaryAfterCBHI-(advances + employee05CBHIContributions)
        const netPay = salaryAfterCBHI - (advances)        
        console.log(netPay);
        return netPay;    
    }
    const fnParams = [xi]

    try {
      const result = goalSeek({
        fn,
        fnParams,
        percentTolerance: 0.0001,
        maxIterations: 10000000000000,
        maxStep: 10,
        goal: 292,
        independentVariableIdx: 0,
      })

      // result => 98
      console.log(result)
    } catch (e) {}
  }, [])
  return <div>Pap</div>
}

export default Pap

// useEffect(()=>{

//     let xi = 0;
//     const fn = (x) => x + 2;
//     const fnParams = [xi];

//     try {
//       const result = goalSeek({
//         fn,
//         fnParams,
//         percentTolerance: 0.01,
//         maxIterations: 10000000000000,
//         maxStep: 10,
//         goal: 20,
//         independentVariableIdx: 0
//       })

//       // result => 98
//       console.log(result);
//     } catch(e) {

//     }
// },[])
