import axios from "axios";

const url = import.meta.env.VITE_API_URL;

// Get all icons
export function getIcons() {
  return axios
    .get(`${url}/api/icons`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get all user's categories
export function getCategoriesByUserId() {
  return axios
    .get(`${url}/api/categories`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get a category by its ID
export function getCategory(id) {
  return axios
    .get(`${url}/api/categories/${id}`, {
      withCredentials: true,
    })
    .then((reponse) => reponse.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Create a category
export function addCategory({ name, iconId }) {
  return axios
    .post(
      `${url}/api/categories`,
      { name, icon_id: iconId },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Edit a category
export function editCategory({ name, iconId, id }) {
  return axios
    .put(
      `${url}/api/categories/${id}`,
      { name, icon_id: iconId },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Delete a category
export function deleteCategory(id) {
  return axios
    .delete(`${url}/api/categories/${id}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get all user's transactions
export function getTransactionsByUserId(date, limit) {
  return axios
    .get(`${url}/api/transactions?date=${date}&limit=${limit}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get user's transactions total sum
export function getTransactionsTotalSum(period, startDate, endDate) {
  return axios
    .get(
      `${url}/api/transactionstotalsum?period=${period}&startDate=${startDate}&endDate=${endDate}`,
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get user's categories transactions total sum category amount
export function getCategoriesTransactionsTotalSum(period, startDate, endDate) {
  return axios
    .get(
      `${url}/api/categoriestransactionstotalsum?period=${period}&startDate=${startDate}&endDate=${endDate}`,
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get a transaction by its ID
export function getTransaction(id) {
  return axios
    .get(`${url}/api/transactions/${id}`, {
      withCredentials: true,
    })
    .then((reponse) => reponse.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Create a transaction
export function addTransaction({ name, date, amount, categoryId }) {
  return axios
    .post(
      `${url}/api/transactions`,
      {
        name,
        date,
        amount,
        category_id: categoryId,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return null;
    });
}

// Edit a transaction
export function editTransaction({ name, date, amount, categoryId, id }) {
  return axios
    .put(
      `${url}/api/transactions/${id}`,
      {
        name,
        date,
        amount,
        category_id: categoryId,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Delete a transaction
export function deleteTransaction(id) {
  return axios
    .delete(`${url}/api/transactions/${id}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get all user's budgets
export function getBudgetsByUserId() {
  return axios
    .get(`${url}/api/budgets`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Get a budget from its ID
export function getBudget(id) {
  return axios
    .get(`${url}/api/budgets/${id}`, {
      withCredentials: true,
    })
    .then((reponse) => reponse.data)
    .catch((error) => {
      // FIX ME
      console.error(error);
      return [];
    });
}

// Create a budget
export function addBudget({ amount, startDate, endDate, categoryId }) {
  return axios
    .post(
      `${url}/api/budgets`,
      {
        amount,
        start_date: startDate,
        end_date: endDate,
        category_id: categoryId,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Edit a budget
export function editBudget({ amount, startDate, endDate, categoryId, id }) {
  return axios
    .put(
      `${url}/api/budgets/${id}`,
      {
        amount,
        start_date: startDate,
        end_date: endDate,
        category_id: categoryId,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Delete a budget
export function deleteBudget(id) {
  return axios
    .delete(`${url}/api/budgets/${id}`, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

// Login function
export function login(email, password) {
  return axios
    .post(
      `${url}/api/login`,
      { email, password },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

// Register function
export function register(email, password) {
  return axios
    .post(
      `${url}/api/users`,
      { email, password },
      {
        withCredentials: true,
      }
    )
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
}

export function logout() {
  return axios
    .post(`${url}/api/logout`, {}, { withCredentials: true })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
