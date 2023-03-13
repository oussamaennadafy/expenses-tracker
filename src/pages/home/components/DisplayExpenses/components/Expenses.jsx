import { useEffect, useState } from "react";
import Expense from "./components/Expense";

function Expenses({ expensesContext }) {
  const itmes = (
    <section>
      <ul className="flex flex-col gap-1">
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
      </ul>
    </section>
  );
  const notFound = (
    <section>
      <p className="text-center text-lg p-3">No item found</p>
    </section>
  );
  return expensesContext.length ? itmes : notFound;
}

export default Expenses;
