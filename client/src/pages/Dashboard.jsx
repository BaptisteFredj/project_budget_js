import { useLoaderData, useSearchParams, Link } from "react-router-dom";
import CategoryAmountThumb from "../components/CategoryAmountThumb";
import TransactionThumb from "../components/TransactionThumb";

import { formattedNumber, computePercentage } from "../utils/functions";

import "../assets/styles/dashboard.css";

export default function Dashboard() {
  const [searchParams] = useSearchParams();
  const period = searchParams.get("period");
  const { transactionsTotalSum, categories, transactions } = useLoaderData();

  return (
    <>
      <h2 className="dashboard_title">Dépenses par catégorie</h2>
      <ul className="period_button_container">
        <Link to="/dashboard?period=day&limit=10">
          <li className={`period_button ${period === "day" ? "active" : ""}`}>
            du jour
          </li>
        </Link>
        <Link to="/dashboard?period=week&limit=10">
          <li className={`period_button ${period === "week" ? "active" : ""}`}>
            de la semaine
          </li>
        </Link>
        <Link to="/dashboard?period=month&limit=10">
          <li className={`period_button ${period === "month" ? "active" : ""}`}>
            du mois
          </li>
        </Link>
        <Link to="/dashboard?period=year&limit=10">
          <li className={`period_button ${period === "year" ? "active" : ""}`}>
            de l'année
          </li>
        </Link>
      </ul>
      <ul className="categories_thumbs_container">
        {categories.map((category) => (
          <CategoryAmountThumb
            categoryPercentage={computePercentage(
              category.category_amount,
              transactionsTotalSum
            )}
            category={category}
            key={category.id}
          />
        ))}
      </ul>

      <p className="dashboard_total">
        <span className="dashboard_total_text">
          Total des dépenses sur la période :
        </span>
        <span className="dashboard_total_amount">
          {formattedNumber(transactionsTotalSum)} €
        </span>
      </p>

      <h2 className="dashboard_title">Budgets en cours</h2>
      <ul>
        <li>Budget 1</li>
        <li>Budget 2</li>
        <li>Budget 3</li>
      </ul>

      <h2 className="dashboard_title">Mes 10 dernières dépenses</h2>
      {transactions.slice(0, 10).map((transaction) => (
        <TransactionThumb transaction={transaction} key={transaction.id} />
      ))}
    </>
  );
}
