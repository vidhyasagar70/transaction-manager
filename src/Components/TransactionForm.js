import React, { useState } from 'react';
import { createTransaction } from '../api/transactionsApi';
import { useNavigate } from 'react-router-dom';
import './TransactionForm.css';

function TransactionForm() {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('DEPOSIT');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the transaction data to the API
      const response = await createTransaction({ amount, transaction_type: transactionType });
      
      // Get the transaction details from the response
      const { amount: transactionAmount, transaction_type, status } = response.data;

      // Pass the transaction details to the next page using navigation
      navigate('/transaction-details', {
        state: { amount: transactionAmount, transactionType: transaction_type, status },
      });
    } catch (error) {
      console.error("Failed to create transaction.", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div className="form-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          required
          className="input-field"
        />
      </div>
      
      <div className="form-group">
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
          className="select-field"
        >
          <option value="DEPOSIT">Deposit</option>
          <option value="WITHDRAW">Withdraw</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">Create Transaction</button>
    </form>
  );
}

export default TransactionForm;
