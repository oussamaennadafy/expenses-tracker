import { useState } from "react";

function AddExpense({ expenses, AddExpenseFunc }) {
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({
    id: new Date().getTime(),
    title: "",
    amount: "",
    date: "",
  });

  const toggleForm = (e) => {
    e.preventDefault();
    setForm((prevState) => !prevState);
  };

  const AddExpense = (e) => {
    e.preventDefault();
    expenses.push(formData);
    AddExpenseFunc(expenses);
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-violet-600 rounded w-full flex justify-center p-3 transition-all">
      {form ? (
        <div className="w-full">
          <form onSubmit={AddExpense} className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="font-medium mb-1" htmlFor="title">
                title
              </label>
              <input
                onChange={handleChange}
                className="p-2 rounded-md"
                type="text"
                name="title"
                value={formData.title}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1" htmlFor="amount">
                amount
              </label>
              <input
                onChange={handleChange}
                className="p-2 rounded-md"
                type="number"
                name="amount"
                value={formData.amount}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1" htmlFor="date">
                date
              </label>
              <input
                onChange={handleChange}
                className="p-2 rounded-md"
                type="date"
                name="date"
                value={formData.date}
              />
            </div>
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
        <button onClick={toggleForm} className="px-3 py-2 bg-violet-900">
          Add new Expense
        </button>
      )}
    </section>
  );
}

export default AddExpense;
