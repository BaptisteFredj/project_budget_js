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
  addTransaction,
  editTransaction,
  deleteTransaction,
} from "./services/request";

import App from "./App";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import CategoryForm from "./pages/CategoryForm";
import CategoryEdit from "./pages/CategoryEdit";
import Transactions from "./pages/Transactions";
import TransactionDetails from "./pages/TransactionDetails";
import TransactionForm from "./pages/TransactionForm";
import TransactionEdit from "./pages/TransactionEdit";
import Budgets from "./pages/Budgets";
import BudgetDetails from "./pages/BudgetDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
              await editCategory({
                name: formData.get("name"),
                icon: formData.get("icon"),
                id: params.id,
              });
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
          await addCategory({
            name: formData.get("name"),
            icon: formData.get("icon"),
          });
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
        path: "/transactions/:id/edit",
        element: <TransactionEdit />,
        loader: async ({ params }) => ({
          transaction: await getTransaction(params.id),
          categories: await getCategories(),
        }),
        action: async ({ request, params }) => {
          const formData = await request.formData();

          switch (request.method.toLocaleLowerCase()) {
            case "put": {
              await editTransaction({
                name: formData.get("name"),
                date: formData.get("date"),
                amount: parseInt(formData.get("amount"), 10),
                type: formData.get("type"),
                categoryId: parseInt(formData.get("category"), 10),
                id: params.id,
              });
              return redirect(`/transactions/${params.id}`);
            }
            case "delete": {
              await deleteTransaction(params.id);
              return redirect("/transactions");
            }
            default:
              throw new Response("Method Not Allowed", { status: 405 });
          }
        },
      },
      {
        path: "/transactions_form",
        element: <TransactionForm />,
        loader: async () => ({
          categories: await getCategories(),
        }),
        action: async ({ request }) => {
          const formData = await request.formData();
          await addTransaction({
            name: formData.get("name"),
            date: formData.get("date"),
            amount: parseInt(formData.get("amount"), 10),
            type: formData.get("type"),
            categoryId: parseInt(formData.get("category"), 10),
          });
          return redirect(`/transactions`);
        },
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
