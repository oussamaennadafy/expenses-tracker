import { useEffect } from "react";
import Expense from "./components/Expense";

function Expenses({ expensesContext, year }) {
  useEffect(() => {
    console.log(expensesContext);
  }, [expensesContext, year]);
  return (
    <section className="flex flex-col gap-1">
      {expensesContext
        ?.filter((expense) => expense.date.split("-")[0] === year)
        ?.map((expense, id) => {
          return (
            <Expense
              key={id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
    </section>
  );
}

export default Expenses;
