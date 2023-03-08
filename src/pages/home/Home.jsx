import AddExpense from "./components/AddExpense";
import DisplayExpenses from "./components/DisplayExpenses";

function Home() {
  return (
    <div className="w-1/2 mx-auto py-10">
      <AddExpense />
      <DisplayExpenses />
    </div>
  );
}

export default Home;
