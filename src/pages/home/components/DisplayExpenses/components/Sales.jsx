import { useEffect, useState } from "react";
import Sale from "./components/Sale";

function Sales({ salesContext }) {
  return (
    <section className="flex flex-col gap-1">
      {salesContext?.map((sale, id) => {
        return (
          <Sale
            key={id}
            title={sale.title}
            date={sale.date}
            amount={sale.amount}
          />
        );
      })}
    </section>
  );
}

export default Sales;
