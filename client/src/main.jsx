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
  getBudgetsByUserId,
  getBudget,
  addBudget,
  editBudget,
  deleteBudget,
} from "./services/request";

import { budgetFormValidator } from "./utils/functions";

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
import BudgetForm from "./pages/BudgetForm";
import BudgetEdit from "./pages/BudgetEdit";

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
        path: "/transactions",
        element: <Transactions />,
        loader: async () => ({
          transactions: await getTransactionsByUserId(),
        }),
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
            amount: parseFloat(formData.get("amount")),
            type: formData.get("type"),
            categoryId: parseInt(formData.get("category"), 10),
          });
          return redirect(`/transactions`);
        },
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

          switch (request.method.toLocaleLowerCase()) {
            case "put": {
              await editTransaction({
                name: formData.get("name"),
                date: formData.get("date"),
                amount: parseFloat(formData.get("amount")),
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
        path: "/budgets",
        element: <Budgets />,
        loader: async () => ({
          budgets: await getBudgetsByUserId(),
        }),
      },
      {
        path: "/budgets/:id",
        element: <BudgetDetails />,
        loader: async ({ params }) => ({
          budget: await getBudget(params.id),
        }),
      },
      {
        path: "/budgets_form",
        element: <BudgetForm />,
        loader: async () => ({
          categories: await getCategoriesByUserId(),
        }),
        action: async ({ request }) => {
          const formData = await request.formData();
          const formDataObject = {
            name: formData.get("name"),
            amount: parseInt(formData.get("amount"), 10),
            startDate: formData.get("start_date"),
            endDate: formData.get("end_date"),
            categoryId: parseInt(formData.get("category"), 10),
          };
          const validatedData = budgetFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }

          formDataObject.name = formDataObject.name.trim();

          await addBudget(formDataObject);

          return redirect(`/budgets`);
        },
      },
      {
        path: "/budgets/:id/edit",
        element: <BudgetEdit />,
        loader: async ({ params }) => ({
          budget: await getBudget(params.id),
          categories: await getCategoriesByUserId(),
        }),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const formDataObject = {
            name: formData.get("name"),
            amount: parseInt(formData.get("amount"), 10),
            startDate: formData.get("start_date"),
            endDate: formData.get("end_date"),
            categoryId: parseInt(formData.get("category"), 10),
            id: params.id,
          };

          formDataObject.name = formDataObject.name.trim();
          const validatedData = budgetFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }

          switch (request.method.toLocaleLowerCase()) {
            case "put": {
              const result = await editBudget(formDataObject);

              if (result && typeof result.message === "string") {
                return { error: result };
              }

              return redirect(`/budgets/`);
            }
            case "delete": {
              await deleteBudget(params.id);
              return redirect("/budgets");
            }
            default:
              throw new Response("Method Not Allowed", { status: 405 });
          }
        },
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
