import Month from "./components/Month";

function Months() {
  return (
    <section className="flex rounded-md w-full bg-violet-300 justify-around p-4">
      <Month name="jan" percentage={10} />
      <Month name="Feb" percentage={20} />
      <Month name="Mar" percentage={30} />
      <Month name="Apr" percentage={40} />
      <Month name="May" percentage={50} />
      <Month name="Jun" percentage={60} />
      <Month name="Jul" percentage={70} />
      <Month name="Aug" percentage={80} />
      <Month name="Sep" percentage={90} />
      <Month name="Oct" percentage={100} />
      <Month name="Nov" percentage={46} />
      <Month name="Dec" percentage={86} />
    </section>
  );
}

export default Months;
