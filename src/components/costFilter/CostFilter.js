import "./CostFilter.css";

const CostFilter = (props) => {
  const onSelectChange = (e) => {
    console.log(e.target.value);
    props.onSelectChange(e.target.value);
  };
  return (
    <div className="cost-filter">
      <div className="cost-filter-control">
        <select value={props.year} onChange={onSelectChange}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default CostFilter;
