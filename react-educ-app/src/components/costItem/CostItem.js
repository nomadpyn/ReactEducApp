import "./CostItem.css";


function CostItem(props) {
  return (
    <div className="cost-item">
    <div>
        <div>{props.date.toISOString()}</div>
        </div>
        <div className="cost-item_description">
      <h2>{props.description}</h2>
      <div className="cost-item_price">{props.amount} р</div>
    </div>
    </div>
  );
}

export default CostItem;
