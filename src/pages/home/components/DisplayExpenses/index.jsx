import Filter from "./components/Filter";
import Months from "./components/Months";
import Expenses from "./components/Expenses";
import { useEffect, useState } from "react";

function DisplayExpenses({ expensesContext }) {
  const [year, setYear] = useState("all the time");

  const filterdExpensesContext = expensesContext.filter((expense) => {
    if (year === "all the time") return true;
    else return expense.date.split("-")[0] == year;
  });

  return (
    <section className="mt-6 bg-gray-700 text-white rounded w-full p-3 flex flex-col gap-5">
      <Filter setYear={setYear} />
      <Months expensesContext={filterdExpensesContext} />
      <Expenses expensesContext={filterdExpensesContext} />
    </section>
  );
}

export default DisplayExpenses;
