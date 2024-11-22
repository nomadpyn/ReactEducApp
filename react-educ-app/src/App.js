import CostItem from "./components/costItem/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2024, 10, 10),
      description: "Телевизор",
      amount: 19700,
    },
    {
      date: new Date(2024, 3, 16),
      description: "Приставка",
      amount: 21300,
    },
    {
      date: new Date(2023, 11, 20),
      description: "Подарки",
      amount: 5400,
    },
  ];

  return (
    <div>
      <h1 style={{ margin: "3rem" }}>Начнем изучать React</h1>
      {costs.map((cost, key) => (
        <CostItem
          key={key}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </div>
  );
}

export default App;
