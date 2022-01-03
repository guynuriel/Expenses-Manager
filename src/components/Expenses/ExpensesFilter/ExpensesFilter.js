import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const yearFilter = (event) => {
    props.onFilterByYear(event.target.value);
  };

  let years = [];
  for (let i = 0; i < 5; i++){
    years.push(new Date().getFullYear() - i)
  }
  console.log(years)
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.nowYear} onChange={yearFilter}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
