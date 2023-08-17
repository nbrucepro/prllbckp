import { useContext } from "react";
import { State } from "../../context/stateContext";

export default function Dates() {
  const { basicSalary, payrollDate, dueDate,transportAllowance,livingAllowance } = useContext(State);
  console.log(payrollDate);
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Payroll date:</span> {payrollDate}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Basic Salary:</span> {basicSalary}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Transport Allowance:</span> {transportAllowance}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Living Allowance:</span> {livingAllowance}
          </li>
        </ul>
      </article>
    </>
  );
}
