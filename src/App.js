import CostItem from "./components/CostItem";

function App() {

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
      <h1>Hello world</h1>
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
      <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
    </div>
  )
}

export default App;
