import axios from "axios";

// Get all categories from DB
export function getCategories() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/categories`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a category from it's ID
export function getCategory(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/category/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get all transactions from DB
export function getTransactions() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/transactions`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a transaction from it's ID
export function getTransaction(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/transaction/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get all budgets from DB
export function getBudgets() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/budgets`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a budget from it's ID
export function getBudget(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/budget/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
