import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.filteredExpense.length === 0) {
    return <p className="expenses-list__fallback ">No Expenses Found</p>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
