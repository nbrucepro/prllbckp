import React from 'react'

const Payt = () => {
   // Given example values
const netPay = 50000; // Given net pay value
const advances = 0; // Given advances value
const transportAllowance = 2000; // Given transport allowance value 
const livingAllowance = 1500; // Given living allowance value

// Set initial guess for basicSalary
let basicSalary = netPay;

// Define a tolerance level for the result
const tolerance = 0.01;

// Perform an iterative approach to find basicSalary
for (let i = 0; i < 1000; i++) {
    // Calculate all contributions and deductions based on current basicSalary guess
    const pensioncalc = basicSalary + livingAllowance; // Example calculation for pension calculation
    // const paye = ((basicSalary + transportAllowance + livingAllowance) - 60000) * 0.2;
    const paye = 0;
    const pension3EmployeeContribution = (pensioncalc * 3) / 100;
    const maternity03EmployeeContribution = (pensioncalc * 3) / 100;
    const maternity03EmployerContribution = (pensioncalc * 0.3) / 100
    const pension5EmployerContribution = (pensioncalc * 5) / 100   

    // Calculate netSalaryBeforeCBHI after all deductions and contributions
    const totalDeductions = paye + pension3EmployeeContribution + maternity03EmployeeContribution;
    const totalContributions = pension5EmployerContribution + maternity03EmployerContribution;
    const netSalaryBeforeCBHI = netPay + advances + totalDeductions - totalContributions;
    
    const employee05CBHIContributions = (netSalaryBeforeCBHI * 0.005);

    // Calculate grossSalary based on netSalaryBeforeCBHI
    const grossSalary = netSalaryBeforeCBHI + totalDeductions - totalContributions;

    // Calculate a new guess for basicSalary based on the current result
    const newBasicSalary = (grossSalary - transportAllowance - livingAllowance) / (1 + 0.03 + 0.005 + 0.003 + 0.003 + 0.005);

    // Check if the difference between the new guess and the old guess is within the tolerance level
    if (Math.abs(newBasicSalary - basicSalary) < tolerance) {
        basicSalary = newBasicSalary; // Set the result
        break; // Exit the loop
    }

    basicSalary = newBasicSalary; // Update the guess
}

console.log("Calculated Basic Salary:", basicSalary);

  return (
    <div>Payt</div>
  )
}

export default Payt