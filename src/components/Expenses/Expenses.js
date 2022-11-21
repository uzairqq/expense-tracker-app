import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setSelectedYear] = useState("");
  const handleSelectedYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="expenses">
      <div>
        <ExpenseFilter onYearSelected={handleSelectedYear} />
      </div>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
