import { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const nameChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      name: e.target.value,
    });
  };

  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  return (
    <form>
      <div className="new-cost-controls">
        <div className="new-cost-control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost-control">
          <label>Сумма (руб)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost-control">
          <label>Дата</label>
          <input type="date" min="2024-01-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-cost-actions">
        <button type="submit">Добавить расход</button>
      </div>
    </form>
  );
};

export default CostForm;
