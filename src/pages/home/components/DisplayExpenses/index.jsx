import Filter from "./components/Filter";
import Months from "./components/Months";
import Expenses from "./components/Expenses";
import { useEffect, useState } from "react";

function DisplayExpenses({ expensesContext }) {
  const [year, setYear] = useState(2023);

  return (
    <section className="mt-6 bg-gray-700 text-white rounded w-full p-3 flex flex-col gap-5">
      <Filter year={year} setYear={setYear} />
      <Months />
      <Expenses year={year} expensesContext={expensesContext} />
    </section>
  );
}

export default DisplayExpenses;
