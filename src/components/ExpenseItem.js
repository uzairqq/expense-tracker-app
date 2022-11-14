import "./ExpenseItem.css";

const ExpenseItem = () => {
  const date = new Date().toUTCString();
  const expenseName = "Car Insurance";
  const expenseCost = "129.23";

  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">{expenseCost}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
