import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const clickHandler = () =>{
    alert("Change the Title");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* // To convert Date into String otherwise react gives an error. */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change The Title</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
