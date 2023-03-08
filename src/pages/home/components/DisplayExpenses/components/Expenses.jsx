import Expense from "./components/Expense";

function Expenses() {
  return (
    <section className="flex flex-col gap-1">
      <Expense />
      <Expense />
    </section>
  );
}

export default Expenses;
