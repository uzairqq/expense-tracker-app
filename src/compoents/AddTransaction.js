import React,{useState} from 'react'

const AddTransaction = () => {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);


    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Enter Text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="">Amount<br />
                    (negative - expense, positive - income)
                    </label>
                    <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" placeholder="Enter Amount..." />
                </div>
            </form>
        </>
    )
}

export default AddTransaction;
