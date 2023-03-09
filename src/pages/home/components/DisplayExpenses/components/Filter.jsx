function filter({ year, setYear }) {
  return (
    <header className="flex justify-between items-center">
      <p>Filter By Year</p>
      <select
        onChange={(e) => setYear(e.target.value)}
        value={year}
        className="px-5 py-2 cursor-pointer rounded text-black"
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>
    </header>
  );
}

export default filter;
