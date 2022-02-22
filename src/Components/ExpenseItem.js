import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React,{useState} from "react";
const ExpenseItem = (props) => {
  const [title,setTitle] =  useState(props.title);
  const clickHandler = () =>{
    setTitle("Title Changed");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* // To convert Date into String otherwise react gives an error. */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change The Title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
