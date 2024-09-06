import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getUser,
  getUsers,
  // getCategory,
  getCategories,
  // getTransaction,
  // getTransactions,
  // getBudget,
  // getBudgets,
} from "./services/request";

import App from "./App";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Categories from "./pages/Categories";

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
      // {
      //   path: "/category/:id",
      //   element: <Category />,
      //   loader: async () => ({
      //     user: await getCategory(),
      //   }),
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
