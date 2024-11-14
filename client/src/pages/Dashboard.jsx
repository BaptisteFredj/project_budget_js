import { useLoaderData, useParams, Link } from "react-router-dom";
import CategoryAmountThumb from "../components/CategoryAmountThumb";
import TransactionThumb from "../components/TransactionThumb";

import { formattedNumber, computePercentage } from "../utils/functions";

export default function Dashboard() {
  const { expensesAmount, categories, transactions } = useLoaderData();
  const { periodFilter } = useParams();

  return (
    <>
      <h2>Dépenses par catégorie</h2>
      <h3>Liste des boutons (temporaires)</h3>
      <Link to="/dashboard/day">
        <li className={`expenses ${periodFilter === "day" ? "active" : ""}`}>
          du jour
        </li>
      </Link>
      <Link to="/dashboard/week">
        <li className={`expenses ${periodFilter === "week" ? "active" : ""}`}>
          de la semaine
        </li>
      </Link>
      <Link to="/dashboard/month">
        <li className={`expenses ${periodFilter === "month" ? "active" : ""}`}>
          du mois
        </li>
      </Link>
      <Link to="/dashboard/year">
        <li className={`expenses ${periodFilter === "year" ? "active" : ""}`}>
          de l'année
        </li>
      </Link>
      {categories.map((category) => (
        <CategoryAmountThumb
          categoryPercentage={computePercentage(
            category.category_amount,
            expensesAmount
          )}
          category={category}
          key={category.id}
        />
      ))}
      <p>Total des dépenses : {formattedNumber(expensesAmount)} €</p>

      <h2>Budgets en cours</h2>
      <ul>
        <li>Budget 1</li>
        <li>Budget 2</li>
        <li>Budget 3</li>
      </ul>

      <h2>Dernières dépenses</h2>
      {transactions.slice(0, 10).map((transaction) => (
        <TransactionThumb transaction={transaction} key={transaction.id} />
      ))}
    </>
  );
}
