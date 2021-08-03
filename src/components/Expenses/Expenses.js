import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [enteredYear, setEnteredYear] = useState("2021");
  const yearChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setEnteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onChangeYear={yearChangeHandler}
        />
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
