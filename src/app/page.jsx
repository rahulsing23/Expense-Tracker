"use client";
import React, { useEffect, useState } from "react";
import Record from "@/components/Record";
const page = () => {
  const [finalamount, setfinalamount] = useState(0);
  const [Expense, setExpense] = useState(0);
  const [Income, setIncome] = useState(0);
  const [title, settitle] = useState("");
  const [amount, setamount] = useState(0);
  const [history, sethistory] = useState([]);

  const submittransaction =(e)=>{
    e.preventDefault();
    
    sethistory([...history,{title,amount}])
    const oldamount = Number(finalamount);
    setfinalamount(oldamount+Number(amount))
    
    const amt = Number(amount);
    if(amt < 0)
    {
        setExpense(Number(Expense)-(amount))
    }
    setamount(0);
    settitle("");
  }
  useEffect(() => {
   setfinalamount(Income)
  }, [Income]);
  return (
    <div>
      <div
        className="w-full max-w-md mx-auto border border-gray-60 
      rounded p-5 backdrop-blur-sm m-10 bg-slate-100"
      >
        <h1 className="text-center text-2xl mb-10 font-semibold">
          Expense Tracker
        </h1>
        <label className="font-bold mb-3"> Your Balance</label>
        <h1 className="font-bold text-3xl mb-10">₹ {finalamount}</h1>

        <div className="flex space-x-1  justify-around">
          <div className="bg-[#ffffff] border-solid rounded-md border-2 border-r border-slate-500 w-full text-center font-bold py-5">
            INCOME
            <div className="text-green-700">₹ {Income}</div>
          </div>
          <div className="bg-black"></div>
          <div className="bg-[#ffffff]  border-solid rounded-md border-2 border-l border-slate-500 w-full text-center font-bold py-5">
            EXPENSE
            <div className="text-red-700">₹ {Expense}</div>
          </div>
        </div>
        
        {/* History */}

        <div className="mt-10">
          <h1 className="font-bold text-xl mb-[2px]">History</h1>
          <div className="bg-black w-full h-[0.5px]"></div>

          {
            history.map((items,index) =>(
              <Record key={index} title={items.title} amount={items.amount} index={index}/>
            ))
          }
        </div>
       

        <div className="mt-10">
          <h1 className="font-bold text-xl mb-[2px]">Add new transaction</h1>
          <div className="bg-black w-full h-[0.5px]"></div>
          
          <div className="mt-5">
          <form onSubmit={submittransaction}>
           
          <label className="font-bold">Income</label><br/>
            <input type="number" placeholder="Enter Your Income..." 
            value={Income}
            className="mt-2 mb-3 p-2 outline-none w-full"
            onChange={(e)=>setIncome(e.target.value)}/>

            <label className="font-bold">Text</label><br/>
            <input type="text" placeholder="Enter text..." 
            value={title}
            className="mt-2 mb-3 p-2 outline-none w-full"
            onChange={(e)=>settitle(e.target.value)}/>
        
           <label className="mt-2 font-bold">Amount</label><br/>
           <p className="text-[12px]">Negative expense (-) or Postive expense(+)</p>
            <input type="number" placeholder="Enter amount..." 
            value={amount}
            className="mt-2 mb-5 p-2 outline-none w-full"
            onChange={(e) =>{
              setamount(e.target.value)
            }}/>
            <button className="font-medium text-center w-full
           bg-slate-300  p-2"
           type="submit"
           >Add Transaction</button>   
            </form>
          </div> 
               
        </div>

      </div>
    </div>
  );
};

export default page;
