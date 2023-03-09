import Filter from "./components/Filter";
import Months from "./components/Months";
import Expenses from "./components/Expenses";

function DisplayExpenses({ expenses }) {
  return (
    <section className="mt-6 bg-gray-700 text-white rounded w-full p-3 flex flex-col gap-5">
      <Filter />
      <Months expenses={expenses} />
      <Expenses expenses={expenses} />
    </section>
  );
}

export default DisplayExpenses;
