import './Costs.css'
import Card from '../Card/Card'
import CostsFilter from '../CostsFilter/CostsFilter'
import { useState } from 'react'
import CostList from './CostList'
import CostsDiagram from './CostsDiagram'

const Costs = (props) => {

  const [selectededYear, setSelectedYear] = useState('2022')

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  const filtredCost = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectededYear;
  })



  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectededYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filtredCost} />
        <CostList costs={filtredCost} />
      </Card>
    </div >
  )
}

export default Costs