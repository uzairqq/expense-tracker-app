import React from 'react'

const AddTransaction = () => {
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter Text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="">Amount<br />
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter Amount..." />
                </div>
            </form>
        </>
    )
}

export default AddTransaction;
