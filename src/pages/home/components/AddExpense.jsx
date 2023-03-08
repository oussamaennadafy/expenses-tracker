import { useState } from "react";

function AddExpense() {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm((prevState) => !prevState);
  };
  return (
    <section className="bg-violet-600 rounded w-full flex justify-center p-3 transition-all">
      {form ? (
        <div className="w-full">
          <form className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="font-medium" htmlFor="title">
                title
              </label>
              <input className="px-5 py-2 rounded-md" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium" htmlFor="amount">
                amount
              </label>
              <input className="px-5 py-2 rounded-md" type="number" />
            </div>
            <div className="flex flex-col">
              <label className="font-medium" htmlFor="date">
                date
              </label>
              <input className="px-5 py-2 rounded-md" type="date" />
            </div>
          </form>
          <div className="flex justify-end gap-3 mt-5">
            <button
              onClick={toggleForm}
              className="px-3 py-2 bg-violet-100 rounded-md"
            >
              Cancel
            </button>
            <button className="px-3 py-2 bg-violet-900 rounded-md text-white">
              Add Expense
            </button>
          </div>
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
