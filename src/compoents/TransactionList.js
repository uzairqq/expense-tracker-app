import React from 'react'

const TransactionList = () => {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li className="minnus">
                    Cash <span>$-400</span><button className="btn-delete">x</button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList;
