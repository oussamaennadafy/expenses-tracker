import { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import DisplayExpenses from "./components/DisplayExpenses";

function Home() {
  const [expensesContext, setExpensesContext] = useState([]);
  return (
    <div className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto py-10">
      <AddExpense setExpensesContext={setExpensesContext} />
      <DisplayExpenses expensesContext={expensesContext} />
    </div>
  );
}

export default Home;
