import './ExpenseItem.css';
function ExpenseItem(props) {
  return (  
    <div className='expense-item'>
      <div >{props.date.toISOString()}</div> 
      {/* // To convert Date into String otherwise react gives an error. */}
      <div className='expense-item__description'>
        <h1>{props.title}</h1>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
