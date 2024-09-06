import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getUser,
  getUsers,
  getCategory,
  getCategories,
  getTransaction,
  getTransactions,
  // getBudget,
  // getBudgets,
} from "./services/request";

import App from "./App";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import Transactions from "./pages/Transactions";
import TransactionDetails from "./pages/TransactionDetails";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/users",
        element: <Users />,
        loader: async () => ({
          users: await getUsers(),
        }),
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
        loader: async ({ params }) => ({
          user: await getUser(params.id),
        }),
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: async () => ({
          categories: await getCategories(),
        }),
      },
      {
        path: "/category/:id",
        element: <CategoryDetails />,
        loader: async ({ params }) => ({
          category: await getCategory(params.id),
        }),
      },
      {
        path: "/transactions",
        element: <Transactions />,
        loader: async () => ({
          transactions: await getTransactions(),
        }),
      },
      {
        path: "/transaction/:id",
        element: <TransactionDetails />,
        loader: async ({ params }) => ({
          transaction: await getTransaction(params.id),
        }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
