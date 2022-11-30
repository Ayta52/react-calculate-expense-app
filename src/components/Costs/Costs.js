import './Costs.css'
import CostItem from '../CostItem/CostItem'
import Card from '../Card/Card'
import CostsFilter from '../CostsFilter/CostsFilter'
import { useState } from 'react'

const Costs = (props) => {

  const [selectededYear, setselectedYear] = useState('2022')

  const yearChangeHandler = (year) => {
    setselectedYear(year);
  }


  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectededYear} onChangeYear={yearChangeHandler} />
        {props.costs.map(cost => <CostItem
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />)}
      </Card>
    </div>
  )
}

export default Costs