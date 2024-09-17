import axios from "axios";

const url = import.meta.env.VITE_API_URL;

// Get all categories from DB
export function getCategories() {
  return axios
    .get(`${url}/api/categories`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a category from it's ID
export function getCategory(id) {
  return axios
    .get(`${url}/api/categories/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Create a category
export function addCategory(name, icon, userId) {
  return axios
    .post(`${url}/api/categories`, { name, icon, user_id: userId })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get all transactions from DB
export function getTransactions() {
  return axios
    .get(`${url}/api/transactions`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a transaction from it's ID
export function getTransaction(id) {
  return axios
    .get(`${url}/api/transactions/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get all budgets from DB
export function getBudgets() {
  return axios
    .get(`${url}/api/budgets`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Get a budget from it's ID
export function getBudget(id) {
  return axios
    .get(`${url}/api/budgets/${id}`)
    .then((reponse) => reponse.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

// Login function
export function login(email, password) {
  return axios
    .post(`${url}/api/login`, { email, password })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

// Register function
export function register(email, password) {
  return axios
    .post(`${url}/api/users`, { email, password })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}
