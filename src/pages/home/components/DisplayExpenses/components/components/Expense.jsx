function Expense({ title, amount, date }) {
  date = date.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="flex justify-between gap-3 p-3 items-center bg-gray-600 rounded border border-gray-600">
      <div className="bg-gray-800 border-2 p-3 w-24 border-gray-300 rounded-md flex flex-col justify-center items-center">
        <p>{months[parseInt(date[1]) - 1]}</p>
        <p className="text-sm text-gray-500">{date[0]}</p>
        <p className="text-2xl font-semibold">{date[2]}</p>
      </div>
      <p className="flex-1 font-semibold">{title}</p>
      <div className="border border-gray-800 px-4 py-1 bg-violet-600 rounded-md">
        <p>${amount}</p>
      </div>
    </div>
  );
}

export default Expense;
