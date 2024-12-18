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
  getIcons,
  getTransactionsTotalSum,
  getCategoriesTransactionsTotalSum,
} from "./services/request";

import {
  budgetFormValidator,
  transactionFormValidator,
  categoryFormValidator,
} from "./utils/dataValidators";

import App from "./App";
import Categories from "./pages/Categories";
import CategoryForm from "./pages/CategoryForm";
import CategoryEdit from "./pages/CategoryEdit";
import Transactions from "./pages/Transactions";
import TransactionForm from "./pages/TransactionForm";
import TransactionEdit from "./pages/TransactionEdit";
import TransactionDelete from "./components/TransactionDelete";
import TransactionCopy from "./pages/TransactionCopy";
import Budgets from "./pages/Budgets";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BudgetForm from "./pages/BudgetForm";
import BudgetEdit from "./pages/BudgetEdit";
import CategoryDelete from "./components/CategoryDelete";
import Dashboard from "./pages/Dashboard";
import BudgetDelete from "./components/BudgetDelete";

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
        path: "/dashboard",
        element: <Dashboard />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const date = "past";
          const limit = url.searchParams.get("limit");
          const period = url.searchParams.get("period");
          const startDate = url.searchParams.get("startDate") || "none";
          const endDate = url.searchParams.get("endDate") || "none";

          return {
            transactionsTotalSum: await getTransactionsTotalSum(
              period,
              startDate,
              endDate
            ),
            categories: await getCategoriesTransactionsTotalSum(
              period,
              startDate,
              endDate
            ),
            transactions: await getTransactionsByUserId(date, limit),
            budgets: await getBudgetsByUserId(),
          };
        },
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: async () => ({
          categories: await getCategoriesByUserId(),
        }),
        action: async ({ params }) => {
          await deleteCategory(params.id);
          return redirect("/categories");
        },
      },
      {
        path: "/categories_form",
        element: <CategoryForm />,
        loader: async () => ({
          icons: await getIcons(),
        }),
        action: async ({ request }) => {
          const formData = await request.formData();
          const formDataObject = {
            name: formData.get("name"),
            iconId: parseInt(formData.get("iconId"), 10),
          };
          formDataObject.name = formDataObject.name.trim();
          const validatedData = categoryFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }

          await addCategory(formDataObject);
          return redirect(`/categories`);
        },
      },
      {
        path: "/categories/:id/edit",
        element: <CategoryEdit />,
        loader: async ({ params }) => ({
          category: await getCategory(params.id),
          icons: await getIcons(),
        }),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const formDataObject = {
            name: formData.get("name"),
            iconId: parseInt(formData.get("iconId"), 10),
            id: params.id,
          };

          formDataObject.name = formDataObject.name.trim();
          const validatedData = categoryFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }

          await editCategory(formDataObject);
          return redirect(`/categories`);
        },
      },
      {
        path: "/categories/:id/delete",
        element: <CategoryDelete />,
        action: async ({ params }) => {
          await deleteCategory(params.id);
          return redirect("/categories");
        },
      },
      {
        path: "/transactions",
        element: <Transactions />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const date = url.searchParams.get("date");
          const limit = "none";
          return {
            transactions: await getTransactionsByUserId(date, limit),
          };
        },
        action: async ({ params }) => {
          await deleteTransaction(params.id);
          return redirect("/transactions?date=past");
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
          const formDataObject = {
            name: formData.get("name"),
            date: formData.get("date"),
            amount: parseFloat(formData.get("amount")),
            categoryId: parseInt(formData.get("category"), 10),
          };

          formDataObject.name = formDataObject.name.trim();
          const validatedData = transactionFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }

          await addTransaction(formDataObject);
          return redirect(`/transactions?date=past`);
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
          const formDataObject = {
            name: formData.get("name"),
            date: formData.get("date"),
            amount: parseFloat(formData.get("amount")),
            type: formData.get("type"),
            categoryId: parseInt(formData.get("category"), 10),
            id: params.id,
          };

          formDataObject.name = formDataObject.name.trim();
          const validatedData = transactionFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }
          await editTransaction(formDataObject);
          return redirect(`/transactions?date=past`);
        },
      },
      {
        path: "/transactions/:id/copy",
        element: <TransactionCopy />,
        loader: async ({ params }) => ({
          transaction: await getTransaction(params.id),
          categories: await getCategoriesByUserId(),
        }),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const formDataObject = {
            name: formData.get("name"),
            date: formData.get("date"),
            amount: parseFloat(formData.get("amount")),
            type: formData.get("type"),
            categoryId: parseInt(formData.get("category"), 10),
            id: params.id,
          };

          formDataObject.name = formDataObject.name.trim();
          const validatedData = transactionFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }
          await addTransaction(formDataObject);
          return redirect(`/transactions?date=past`);
        },
      },
      {
        path: "/transactions/:id/delete",
        element: <TransactionDelete />,
        action: async ({ params }) => {
          await deleteTransaction(params.id);
          return redirect("/transactions?date=past");
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
        path: "/budgets_form",
        element: <BudgetForm />,
        loader: async () => ({
          categories: await getCategoriesByUserId(),
        }),
        action: async ({ request }) => {
          const formData = await request.formData();
          const formDataObject = {
            amount: parseInt(formData.get("amount"), 10),
            startDate: formData.get("start_date"),
            endDate: formData.get("end_date"),
            categoryId: parseInt(formData.get("category"), 10),
          };

          const validatedData = budgetFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }

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
            amount: parseInt(formData.get("amount"), 10),
            startDate: formData.get("start_date"),
            endDate: formData.get("end_date"),
            categoryId: parseInt(formData.get("category"), 10),
            id: params.id,
          };

          const validatedData = budgetFormValidator(formDataObject);

          if (Object.keys(validatedData).length > 0) {
            return validatedData;
          }

          await editBudget(formDataObject);
          return redirect(`/budgets`);
        },
      },
      {
        path: "/budgets/:id/delete",
        element: <BudgetDelete />,
        action: async ({ params }) => {
          await deleteBudget(params.id);
          return redirect("/budgets");
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
