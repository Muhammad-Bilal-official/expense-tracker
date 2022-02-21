import './ExpenseItem.css';
function ExpenseItem() {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = 'Car insurance';
  const expenseAmount = 294.67;

  return (  
    <div className='expense-item'>
      <div >{expenseDate.toISOString()}</div> // To convert Date into String otherwise react gives an error.
      <div className='expense-item__description'>
        <h1>{expenseTitle}</h1>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
