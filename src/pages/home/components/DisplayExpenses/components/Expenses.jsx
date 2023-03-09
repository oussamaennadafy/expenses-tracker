import Expense from "./components/Expense";

function Expenses({ expenses }) {
  return (
    <section className="flex flex-col gap-1">
      {expenses.map((expense) => {
        return (
          <Expense
            key={expense.id}
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
