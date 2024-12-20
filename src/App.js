import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";

const App = () =>{
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
      <NewCost/>
      
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
