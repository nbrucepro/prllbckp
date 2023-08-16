import { createContext, useEffect, useRef, useState } from "react";

export const State = createContext();

export default function StateContext({ children }) {
  // Date object
const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let currentDate = `${currentDay}/${currentMonth}/${currentYear}`;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payrollDate,setPayrollDate] = useState(currentDate);
  const [transportAllowance,setTransportAllowance] = useState(0);
  const [livingAllowance,setLivingAllowance] = useState(0);
  const [dueDate,setDueDate] = useState();
  const [grossSalary,setGrossSalary] = useState(0);
  const [total, setTotal] = useState(0);
  const [netSalary,setNetSalary] = useState(0);
  const [netPay,setNetPay] = useState(0);
  const [paye,setPaye] = useState(0);
  const [width] = useState(641);
  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Place your phone in landscape mode for the best experience");
    }
  }, [width]);

  function CalcSum() {
    let rows = document.querySelectorAll(".grossSalary");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "grossSalary") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  }

  useEffect(() => {
    // CalcSum();
    let totalss = 0;
    totalss += (parseInt(grossSalary) + parseInt(transportAllowance) + parseInt(livingAllowance));
    setNetSalary(totalss)
  }, [grossSalary,transportAllowance,livingAllowance]);



  const context = {
    name,
    setName,
    address,
    setAddress,
    grossSalary,
    setGrossSalary,
    transportAllowance,
    livingAllowance,
    setTransportAllowance,
    setLivingAllowance,
    payrollDate,
    setPayrollDate,

    //calculations
    netSalary,
    netPay,
    paye,
    total,
    setTotal,
    width,
    componentRef,
    handlePrint,
  };

  return <State.Provider value={context}>{children}</State.Provider>;
}
