import React, { useState } from "react";
import "./Expenses.css";

//components
import Card from "../UI/Card";
import NewExpenses from "./NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Dummy_Expenses = [
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: 1,
  },
  { title: "food", amount: 120, date: new Date(2022, 0, 24), id: 2 },
  { title: "taxi", amount: 22.34, date: new Date(2021, 2, 23), id: 3 },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Computer",
    amount: 990,
    date: new Date(2022, 0, 12),
  },
  {
    id: "e6",
    title: "Bank Transform",
    amount: 300,
    date: new Date(2022, 1, 23),
  },
  {
    id: "e7",
    title: "TV",
    amount: 199.99,
    date: new Date(2021, 8, 4),
  },
  {
    id: "e8",
    title: "Hamburger",
    amount: 18,
    date: new Date(2021, 11, 11),
  },
];

function Expenses() {
  const [expenses, updateExpenses] = useState(Dummy_Expenses);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const filteredExpenses = expenses.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear.toString();
  });

  const addExpenseHandler = (expense) => {
    updateExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    alert("Adding expense added successfully!");
  };

  const onFilterByYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter
          nowYear={filteredYear}
          onFilterByYear={onFilterByYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
