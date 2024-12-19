import CostForm from "../costForm/CostForm";
import "./NewCost.css";

const NewCost = () => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = { ...inputCostData };

    console.log(costData);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostDataHandler={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;
