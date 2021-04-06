import React from 'react';
import './App.css';

const Child = () => {
    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker App</h1>
            <h3>Your Balance <br /> $260.00</h3>


            <div className="expense-container">
                <h3>INCOME <br />$500.00</h3>
                <h3>EXPENSE <br />$240.00</h3>
            </div>

            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>

                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>

                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
            </ul>


            <h3>Add New Transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>Enter Description <br />
                    <input type="text" required />
                </label>

                <label>Enter Amount<br />
                    <input type="number" required />
                </label>
                <br /> <br />
                <input type="submit" value="Add Transaction" />

            </form>
        </div>
    )
}

export default Child;
