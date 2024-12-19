import React, { useState } from "react";
import Card from "../card/Card";
import CostFilter from "../costFilter/CostFilter";
import CostItem from "../costItem/CostItem";
import "./Costs.css";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const onSelectChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostFilter
          year={selectedYear}
          onSelectChange={onSelectChangeHandler}
        />
        {props.costs.map((cost, key) => (
          <CostItem
            key={key}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Costs;
