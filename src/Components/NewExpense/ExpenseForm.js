import React from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const titleChangeHandler = (event) =>{
    console.log(event.target.value);
  }
  const amountChangeHandler = (event) =>{
    console.log(event.target.value);
  }
  const dateChangeHandler = (event) =>{
    console.log(event.target.value);
  }
  return (
    <form className='new-expense'>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"  onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.1" step="0.1" name="amount" id="amount" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
