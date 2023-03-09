import { useEffect, useState } from "react";

function AddExpense({ setExpensesContext }) {
  const [form, setForm] = useState(false);
  const [Error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const toggleForm = (e) => {
    e.preventDefault();
    setForm((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, amount, date } = formData;
    if (!title || !amount || !date) {
      setError("please fill all inputs");
      return;
    }
    setExpensesContext((prevExpensesContext) => [
      ...prevExpensesContext,
      formData,
    ]);
  };

  const handleChange = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <section className="bg-violet-600 rounded w-full flex justify-center p-3 transition-all">
      {form ? (
        <div className="w-full">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="font-medium mb-1" htmlFor="title">
                title
              </label>
              <input
                onChange={(e) => handleChange(e.target)}
                value={formData.title}
                className="p-2 rounded-md"
                type="text"
                name="title"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1" htmlFor="amount">
                amount
              </label>
              <input
                onChange={(e) => handleChange(e.target)}
                value={formData.amount}
                className="p-2 rounded-md"
                type="number"
                name="amount"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1" htmlFor="date">
                date
              </label>
              <input
                onChange={(e) => handleChange(e.target)}
                value={formData.date}
                className="p-2 rounded-md"
                type="date"
                name="date"
              />
            </div>
            <p className="col-span-2 text-red-400 text-center">{Error}</p>
            <div className="flex justify-end gap-3 mt-5 col-span-2">
              <button
                onClick={toggleForm}
                className="px-3 py-2 bg-violet-100 rounded-md"
              >
                Cancel
              </button>
              <button
                name="submit"
                type="submit"
                className="px-3 py-2 bg-violet-900 rounded-md text-white"
              >
                Add Expense
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleForm}
          className="px-3 py-2 bg-violet-900 rounded-md"
        >
          Add new Expense
        </button>
      )}
    </section>
  );
}

export default AddExpense;
