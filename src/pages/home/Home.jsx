import { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import DisplayExpenses from "./components/DisplayExpenses";

function Home() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Error tenetur ipsum ", amount: "96", date: "2010-09-15" },
  ]);
  function AddExpenseFunc(newExpenses) {
    setExpenses(newExpenses);
    console.log(newExpenses);
  }
  return (
    <div className="w-1/2 mx-auto py-10">
      <AddExpense AddExpenseFunc={AddExpenseFunc} expenses={expenses} />
      <DisplayExpenses expenses={expenses} />
    </div>
  );
}

export default Home;
