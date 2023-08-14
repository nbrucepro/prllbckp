import React, { useContext, useEffect } from "react";
import { State } from "../../context/stateContext";
// git remote add origin git@github.com:
export default function Table() {
  const { netSalary,netPay,paye } = useContext(State);
  return (
    <>
      <table width="100%" className="mb-10">
        <thead className="w-full">
          <tr className="bg-gray-100 p-1 w-full">
            <td className="font-bold text-sm w-3/5">Company Name</td>
            <td className="font-bold text-sm w-[10px]">Net Salary</td>
            <td className="font-bold text-sm w-1/6">Paye</td>
            <td className="font-bold text-sm w-3/5">Net Pay</td>
          </tr>
        </thead>
          <React.Fragment>
            <tbody>
              <tr className="h-10">
                <td>ACR</td>
                <td>{paye}</td>
                <td>{netPay}</td>
                <td>{netSalary}</td>
              </tr>
            </tbody>
          </React.Fragment>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Frw. {netPay.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
