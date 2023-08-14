import { useContext } from "react";
import { State } from "../../context/stateContext";

export default function Dates() {
  const { grossSalary, payrollDate, dueDate,transportAllowance,livingAllowance } = useContext(State);

  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Gross Salary:</span> {grossSalary}
          </li>
          <li className="p-1">
            <span className="font-bold">Payroll date:</span> {payrollDate}
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
