import "./CostItem.css";

function CostItem(props) {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="cost-item">
      <div>
        <div>
          <div>{day}</div>
          <div>{month}</div>
          <div>{year}</div>
        </div>
      </div>
      <div className="cost-item_description">
        <h2>{props.description}</h2>
        <div className="cost-item_price">{props.amount} р</div>
      </div>
    </div>
  );
}

export default CostItem;
