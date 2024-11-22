import CostItem from "./components/costItem/CostItem";

function App() {

  const costs = [
    {
      date: new Date(2024, 10,10),
      description: "Телевизор",
      amount: 19700
    },
    {
      date: new Date(2024, 3,16),
      description: "Приставка",
      amount: 21300
    },
    {
      date: new Date(2023, 11,20),
      description: "Подарки",
      amount: 5400
    }
  ]

  return (
  <div>
    <h1 style={{margin: '3rem'}}>Начнем изучать React</h1>
    <CostItem
    date={costs[0].date}
    description={costs[0].description}
    amount={costs[0].amount}/>
     <CostItem
    date={costs[1].date}
    description={costs[1].description}
    amount={costs[1].amount}/>
     <CostItem
    date={costs[2].date}
    description={costs[2].description}
    amount={costs[2].amount}/>
  </div>
  );
}

export default App;
