import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api";

export const createTransaction = async (transaction) => {
  const response = await axios.post(`${API_URL}/transactionsApi/`, transaction);
  return response.data;
};

export const getTransactions = async () => {
  const response = await axios.get(`${API_URL}/transactionsApi/`);
  return response.data;
};
