import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2022, 10, 28),
    description: 'Холодильник',
    amount: 999,
  },
  {
    id: 'c2',
    date: new Date(2022, 10, 28),
    description: 'MacBook',
    amount: 1254,
  },
  {
    id: 'c3',
    date: new Date(2022, 10, 28),
    description: 'Jeans',
    amount: 300,
  }
]


const App = () => {

  const [costs, setCosts] = useState(INITIAL_COST)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App;
