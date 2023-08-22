import React, { useContext, useEffect } from "react";
import { State } from "../../context/stateContext";
// git remote add origin git@github.com:
export default function Table() {
  const { name,grossSalary,netPay,paye,basicSalary } = useContext(State);
  return (
    <>
      <table width="100%" className="mb-10">
        <thead className="w-full">
          <tr className="bg-gray-100 p-1 w-full">
            <td className="font-bold text-sm">Employee Name</td>
            <td className="font-bold text-sm">Gross Salary</td>
            <td className="font-bold text-sm">Paye</td>
            <td className="font-bold text-sm">Net pay</td>
          </tr>
        </thead>
          <React.Fragment>
            <tbody>
              <tr className="h-10">
                <td>{name}</td>
                <td>{grossSalary}</td>
                <td>{paye}</td>
                <td>{netPay}</td>
              </tr>
            </tbody>
          </React.Fragment>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Frw. {netPay.toFixed(0)}
        </h2>
      </div>
    </>
  );
}
