import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
    {
      date: new Date(2022, 10, 28),
      description: 'Холодильник',
      amount: 999,
    },
    {
      date: new Date(2022, 10, 28),
      description: 'MacBook',
      amount: 1254,
    },
    {
      date: new Date(2022, 10, 28),
      description: 'Jeans',
      amount: 300,
    }
  ]

  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  )
}

export default App;
