import "./ExpenseItem.css";
const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28).toDateString();
  const expenseName = "Car Insurance";
  const expenseAmount = "$294.67";
  return (
    <div className="expense-item">
      <h1>{expenseDate}</h1>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
