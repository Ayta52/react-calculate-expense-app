import './CostList.css'
import CostItem from '../CostItem/CostItem'

const CostList = (props) => {

  if (props.costs.length === 0) {
    return <h2 className='cost-list__fallback'>
      В этом году Расходов нет
    </h2>
  }

  return (
    <ul className='cost-list'>
      {props.costs.length != 0 && props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />))}
    </ul>
  )
}

export default CostList