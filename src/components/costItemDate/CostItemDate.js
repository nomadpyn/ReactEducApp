import "./CostItemDate.css";

const CostItemDate = (props) => {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="cost-item-date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}

export default CostItemDate;
