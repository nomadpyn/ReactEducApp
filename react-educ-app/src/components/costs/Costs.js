import CostItem from "../costItem/CostItem";
import "./Costs.css"

function Costs(props){

    return (<div className="costs">{props.costs.map((cost, key) => (
        <CostItem
          key={key}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}</div>)
}

export default Costs;