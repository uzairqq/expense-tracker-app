import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setSelectedYear] = useState("2021");
  const handleSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expenseContent = "";
  if (filteredExpenses.length === 0) {
    expenseContent = <p class="NoExpense">No Expenses Found</p>;
  } else {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <div>
        <ExpenseFilter selected={year} onYearSelected={handleSelectedYear} />
        {expenseContent}
      </div>
    </div>
  );
};

export default Expenses;
