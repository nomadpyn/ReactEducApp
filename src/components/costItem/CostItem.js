import Card from "../card/Card";
import CostItemDate from "../costItemDate/CostItemDate";
import "./CostItem.css";

const CostItem = (props) => {
  return (
    <Card className="cost-item">
      <div>
        <CostItemDate date={props.date} />
      </div>
      <div className="cost-item_description">
        <h2>{props.description}</h2>
        <div className="cost-item_price">{props.amount} р</div>
      </div>
    </Card>
  );
}

export default CostItem;
