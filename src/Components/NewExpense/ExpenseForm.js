import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Form Input Event Handlers
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // Form Submission Event Handler
  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData); //Temporarily printing the submitted data
  };
  return (
    <form className="new-expense" onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler} 
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            name="amount"
            id="amount"
            onChange={amountChangeHandler} 
            required
          />
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
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
