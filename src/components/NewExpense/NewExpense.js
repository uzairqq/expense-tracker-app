import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const expenseDataObject = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataObject);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
