import { useEffect, useState } from "react";
import Expense from "./components/Expense";

function Expenses({ expensesContext }) {
  return (
    <section className="flex flex-col gap-1">
      {expensesContext?.map((expense, id) => {
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
