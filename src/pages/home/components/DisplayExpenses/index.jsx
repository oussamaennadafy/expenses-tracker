import Filter from "./components/Filter";
import Months from "./components/Months";
import Sales from "./components/sales";
import { useEffect, useState } from "react";

function Displaysales({ salesContext }) {
  const [year, setYear] = useState("all the time");

  const filterdsalesContext = salesContext.filter((sale) => {
    if (year === "all the time") return true;
    else return sale.date.split("-")[0] == year;
  });

  return (
    <section className="mt-6 bg-gray-700 text-white rounded w-full p-3 flex flex-col gap-5">
<<<<<<< HEAD
      <Filter year={year} setYear={setYear} />
      <Months expensesContext={filterdExpensesContext} />
      <Expenses expensesContext={filterdExpensesContext} />
=======
      <Filter setYear={setYear} />
      <Months salesContext={filterdsalesContext} />
      <Sales salesContext={filterdsalesContext} />
>>>>>>> ef6f6876767c80d684f716fbf86fd34464b26879
    </section>
  );
}

export default Displaysales;
