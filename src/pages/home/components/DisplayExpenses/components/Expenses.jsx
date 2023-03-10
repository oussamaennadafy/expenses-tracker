import { useEffect, useState } from "react";
import Expense from "./components/Expense";

function Expenses({ expensesContext, year }) {
  return (
    <section className="flex flex-col gap-1">
      {expensesContext
        ?.filter((expense) => {
          if (year === "all the time") return true;
          else return expense.date.split("-")[0] == year;
        })
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
