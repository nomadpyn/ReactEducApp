import Card from "../card/Card";
import CostItem from "../costItem/CostItem";
import "./Costs.css";

const Costs = (props) => {
  return (
    <Card className="costs">
      {props.costs.map((cost, key) => (
        <CostItem
          key={key}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </Card>
  );
}

export default Costs;
