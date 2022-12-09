import './CostItem.css'
import CostDate from '../CostDate/CostDate';
import Card from '../Card/Card';

const CostItem = (props) => {

  return (
    <li>
      <Card className='cost-item'>
        <CostDate date={props.date} />
        <div className='cost-item__description'>
          <h2>{props.description}</h2>
          <div className='cost-item__price'>₽{props.amount}</div>
        </div>
      </Card>
    </li>
  )
}
export default CostItem;