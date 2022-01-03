import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.ToggleForm();
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  if (props.isFormShow) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={enteredTitle}
              type="text"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={enteredAmount}
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={enteredDate}
              type="date"
              min="2019-01-01"
              max={(new Date().getFullYear() + '-12-31')}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.ToggleForm}>cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <div>
        <button onClick={props.ToggleForm}>Add New Expense</button>
      </div>
    );
  }
}

export default ExpenseForm;

// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// })

// const titleChangeHandler = (event) => {
//   // שתי דרכים לשחזור סטייט
//   setUserInput({
//     ...userInput,
//     enteredTitle: event.target.value
//   })

//   setUserInput((pervState) => {
//     return { ...pervState, enteredTitle: event.target.value };
//   })
// };
// const amountChangeHandler = (event) => {
//   setUserInput({
//     ...userInput,
//     enteredAmount: event.target.value
//   })
// };
// const dateChangeHandler = (event) => {
//   setUserInput({
//     ...userInput,
//     enteredDate: event.target.value
//   })
// };
