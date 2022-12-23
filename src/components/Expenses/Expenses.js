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

  return (
    <div className="expenses">
      <div>
        <ExpenseFilter selected={year} onYearSelected={handleSelectedYear} />
      </div>
      {filteredExpenses.length == 0 ? (
        <p class="NoExpense">No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
