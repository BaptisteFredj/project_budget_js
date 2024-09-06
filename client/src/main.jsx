import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  // getUser,
  getUsers,
  // getCategory,
  // getCategories,
  // getTransaction,
  // getTransactions,
  // getBudget,
  // getBudgets,
} from "./services/request";

import App from "./App";
import Users from "./pages/Users";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
