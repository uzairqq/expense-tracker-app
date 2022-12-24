import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleDateChane = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min={100}
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChane}
            value={enteredDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.cancelForm} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
