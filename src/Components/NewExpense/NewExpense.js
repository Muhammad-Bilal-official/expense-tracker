import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  // const saveNewExpenseData = (expenseData) => {
  //   const newExpenseData = {
  //     ...expenseData,
  //     id: (Math.random() + 10).toString()
  //   };
  //   console.log("In Expense Form.js");
  //   props.onAddNewExpense(newExpenseData);
  // };

  function saveExpenseDataHandler(enteredExpenseData){
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  console.log(props.onAddExpense);
  return (
    <div>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};
export default ExpenseForm;
