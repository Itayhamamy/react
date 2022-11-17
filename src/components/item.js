import './Item.css';
import DateTime from './DateTime'
function Item(props){
    return(
        <div className="wrapper">
            <h2>{props.titel}</h2>
            <h3>{props.price}$</h3>
            <DateTime date={props.date} />
  </div>
    )
}

export default Item;