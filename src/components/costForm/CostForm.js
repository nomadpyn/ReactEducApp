import './CostForm.css';

const CostForm = () => {
  return (
    <form>
      <div className="new-cost-controls">
        <div className="new-cost-control">
          <label>Название</label>
          <input type="text" />
        </div>
        <div className="new-cost-control">
          <label>Сумма (руб)</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-cost-control">
          <label>Дата</label>
          <input type="date" min="2024-01-01" />
        </div>
      </div>
      <div className="new-cost-actions">
        <button type="submit">Добавить расход</button>
      </div>
    </form>
  );
};

export default CostForm;
