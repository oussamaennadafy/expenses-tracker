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
      <Filter setYear={setYear} />
      <Months salesContext={filterdsalesContext} />
      <Sales salesContext={filterdsalesContext} />
    </section>
  );
}

export default Displaysales;
