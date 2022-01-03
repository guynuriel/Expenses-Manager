import "./NewExpense.css";
import "./ExpenseForm";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormShow, setIsFormShow] = useState(false);

  const onToggleForm = () => {
    if (isFormShow) {
      setIsFormShow(false);
    } else {
      setIsFormShow(true);
    }
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

    return (
      <div className="new-expense">
        <ExpenseForm ToggleForm={onToggleForm} isFormShow={isFormShow} onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );

};

export default NewExpense;
