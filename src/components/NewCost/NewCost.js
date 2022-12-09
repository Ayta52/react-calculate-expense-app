import './NewCost.css'
import { useState } from 'react'
import CostForm from './CostFomr'

const NewCost = (props) => {

  const [isFormVisible, setIsFormVisible] = useState(false)

  const saveCostDataHandler = (inputCostData) => {

    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }

    props.onAddCost(costData)
    setIsFormVisible(false)
  }

  const inputCostDataHandler = () => {
    setIsFormVisible(true)
  }

  const cancelCostHandler = () => {
    setIsFormVisible(false)
  }

  return (
    <div className='new-cost'>
      {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}
      {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />}
    </div>
  )
}

export default NewCost