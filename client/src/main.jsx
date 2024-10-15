import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import {
  getCategoriesByUserId,
  getCategory,
  addCategory,
  editCategory,
  deleteCategory,
  getTransactionsByUserId,
  getTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
  getBudget,
  getBudgets,
} from "./services/request";

import App from "./App";
import Categories from "./pages/Categories";
import CategoryForm from "./pages/CategoryForm";
import CategoryEdit from "./pages/CategoryEdit";
import Transactions from "./pages/Transactions";
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
          categories: await getCategoriesByUserId(),
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
              return redirect(`/categories/`);
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
          transactions: await getTransactionsByUserId(),
        }),
      },
      {
        path: "/transactions/:id/edit",
        element: <TransactionEdit />,
        loader: async ({ params }) => ({
          transaction: await getTransaction(params.id),
          categories: await getCategoriesByUserId(),
        }),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          console.info("params id MAIN :", params.id);

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
              return redirect(`/transactions/`);
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
          categories: await getCategoriesByUserId(),
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
