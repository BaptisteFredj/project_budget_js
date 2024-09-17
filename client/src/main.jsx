import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import {
  getCategory,
  getCategories,
  getTransaction,
  getTransactions,
  getBudget,
  getBudgets,
  addCategory,
  editCategory,
  deleteCategory,
} from "./services/request";

import App from "./App";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import Transactions from "./pages/Transactions";
import TransactionDetails from "./pages/TransactionDetails";
import Budgets from "./pages/Budgets";
import BudgetDetails from "./pages/BudgetDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CategoryForm from "./pages/CategoryForm";
import CategoryEdit from "./pages/CategoryEdit";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: async () => ({
          categories: await getCategories(),
        }),
      },
      {
        path: "/categories/:id",
        element: <CategoryDetails />,
        loader: async ({ params }) => ({
          category: await getCategory(params.id),
        }),
      },
      {
        path: "/categories/:id/edit",
        element: <CategoryEdit />,
        loader: async ({ params }) => ({
          category: await getCategory(params.id),
        }),
        action: async ({ request, params }) => {
          const formData = await request.formData();

          switch (request.method.toLocaleLowerCase()) {
            case "put": {
              const categoryName = formData.get("name");
              const categoryIcon = formData.get("icon");
              await editCategory(categoryName, categoryIcon, params.id);
              return redirect(`/categories/${params.id}`);
            }
            case "delete": {
              await deleteCategory(params.id);
              return redirect("/categories");
            }
            default:
              throw new Response("", { status: 405 });
          }
        },
      },
      {
        path: "/categories_form",
        element: <CategoryForm />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const name = formData.get("name");
          const icon = formData.get("icon");
          const userId = formData.get("userId");
          await addCategory(name, icon, userId);
          return redirect(`/categories`);
        },
      },
      {
        path: "/transactions",
        element: <Transactions />,
        loader: async () => ({
          transactions: await getTransactions(),
        }),
      },
      {
        path: "/transactions/:id",
        element: <TransactionDetails />,
        loader: async ({ params }) => ({
          transaction: await getTransaction(params.id),
        }),
      },
      {
        path: "/budgets",
        element: <Budgets />,
        loader: async () => ({
          budgets: await getBudgets(),
        }),
      },
      {
        path: "/budgets/:id",
        element: <BudgetDetails />,
        loader: async ({ params }) => ({
          budget: await getBudget(params.id),
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
