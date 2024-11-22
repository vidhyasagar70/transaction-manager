import React from 'react';
import { useLocation } from 'react-router-dom';
import './TransactionDetails.css';

function TransactionDetails() {
  const location = useLocation();
  const { amount, transactionType, status } = location.state || {};

  return (
    <div className="transaction-details">
      <h1>Transaction Details</h1>
      <div className="detail-item">
        <strong>Amount: </strong>{amount}
      </div>
      <div className="detail-item">
        <strong>Transaction Type: </strong>{transactionType}
      </div>
      <div className="detail-item">
        <strong>Status: </strong>{status}
      </div>
    </div>
  );
}

export default TransactionDetails;
