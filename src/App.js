import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionForm from './Components/TransactionForm';
import TransactionList from './Components/TransactionDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionForm />} />
        <Route path="/transactions" element={<TransactionList />} />
      </Routes>
    </Router>
  );
}

export default App;
