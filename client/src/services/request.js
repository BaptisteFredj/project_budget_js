import axios from "axios";

const key = import.meta.env.VITE_API_URL;

// Get all categories from DB
export function getCategories() {
  return axios
    .get(`${key}/api/categories`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a category from it's ID
export function getCategory(id) {
  return axios
    .get(`${key}/api/categories/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get all transactions from DB
export function getTransactions() {
  return axios
    .get(`${key}/api/transactions`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a transaction from it's ID
export function getTransaction(id) {
  return axios
    .get(`${key}/api/transactions/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get all budgets from DB
export function getBudgets() {
  return axios
    .get(`${key}/api/budgets`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a budget from it's ID
export function getBudget(id) {
  return axios
    .get(`${key}/api/budgets/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
