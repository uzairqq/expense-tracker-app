import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setSelectedYear] = useState("all");
  const handleSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (year === "all") {
      return expense;
    }
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div className="expenses">
      <div>
        <ExpenseFilter selected={year} onYearSelected={handleSelectedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList filteredExpense={filteredExpenses} />
      </div>
    </div>
  );
};

export default Expenses;
