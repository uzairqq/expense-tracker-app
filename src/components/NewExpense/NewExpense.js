import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    const expenseDataObject = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataObject);
    setShowExpenseForm(false);
  };

  const handleExpenseFormShowAndHide = () => {
    if (showExpenseForm === false) setShowExpenseForm(true);
    if (showExpenseForm === true) alert("Form Already Opened");
  };
  const stopEditingExpenseForm = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelForm={stopEditingExpenseForm}
        />
      ) : (
        <button onClick={handleExpenseFormShowAndHide}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
