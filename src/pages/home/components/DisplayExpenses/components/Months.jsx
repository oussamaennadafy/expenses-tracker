import Month from "./components/Month";

function Months({ expensesContext }) {
  const months = [
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const MonthsComponents = months.map((month, i) => {
    const percentage =
      (expensesContext.filter(
        (expense) => Number(expense.date.split("-")[1]) === i + 1
      ).length /
        (expensesContext.length || 1)) *
      100;
    return <Month name={month} percentage={percentage} key={month} />;
  });
  return (
    <section className="flex rounded-md w-full bg-violet-300 justify-around p-4">
      {MonthsComponents}
    </section>
  );
}

export default Months;
