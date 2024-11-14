import { useLoaderData, useSearchParams, Link } from "react-router-dom";
import CategoryAmountThumb from "../components/CategoryAmountThumb";
import TransactionThumb from "../components/TransactionThumb";

import { formattedNumber, computePercentage } from "../utils/functions";

export default function Dashboard() {
  const [searchParams] = useSearchParams();
  const period = searchParams.get("period");
  const { transactionsTotalSum, categories, transactions } = useLoaderData();

  return (
    <>
      <h2>Dépenses par catégorie</h2>
      <h3>Liste des boutons (temporaires)</h3>
      <Link to="/dashboard?period=day&limit=10">
        <li className={`expenses ${period === "day" ? "active" : ""}`}>
          du jour
        </li>
      </Link>
      <Link to="/dashboard?period=week&limit=10">
        <li className={`expenses ${period === "week" ? "active" : ""}`}>
          de la semaine
        </li>
      </Link>
      <Link to="/dashboard?period=month&limit=10">
        <li className={`expenses ${period === "month" ? "active" : ""}`}>
          du mois
        </li>
      </Link>
      <Link to="/dashboard?period=year&limit=10">
        <li className={`expenses ${period === "year" ? "active" : ""}`}>
          de l'année
        </li>
      </Link>
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
      <p>Total des dépenses : {formattedNumber(transactionsTotalSum)} €</p>

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
