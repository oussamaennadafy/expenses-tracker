import { useEffect, useState } from "react";
import Addsale from "./components/Addsale";
import Displaysales from "./components/DisplayExpenses";

function Home() {
  const [salesContext, setsalesContext] = useState([]);
  return (
    <div className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto py-10">
      <Addsale setsalesContext={setsalesContext} />
      <Displaysales salesContext={salesContext} />
    </div>
  );
}

export default Home;
