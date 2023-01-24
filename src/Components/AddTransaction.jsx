import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
        setText("")
        setAmount("")
    }
  return (
    <div>
      <h3>Add New transaction</h3>
      <form onSubmit={onSubmit} action="">
        <div className="form-control">
          <label htmlFor="text"></label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            {" "}
            Amout <br />
            (negative -expense, positive - income)
          </label>
          <input
            type="text"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction