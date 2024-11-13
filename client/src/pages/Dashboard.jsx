import { useLoaderData, useParams, Link } from "react-router-dom";

import { formattedNumber } from "../utils/functions";

export default function Dashboard() {
  const { expensesAmount } = useLoaderData();
  const { periodFilter } = useParams();

  return (
    <>
      <h2>Dépenses par catégorie</h2>
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
      <p>Dépenses sur la période : {formattedNumber(expensesAmount)} €</p>

      <h2>Budgets en cours</h2>
      <ul>
        <li>Budget 1</li>
        <li>Budget 2</li>
        <li>Budget 3</li>
      </ul>

      <h2>Dernières dépenses</h2>
      <ul>
        <li>Dépense 1</li>
        <li>Dépense 2</li>
        <li>Dépense 3</li>
        <li>Dépense 4</li>
        <li>Dépense 5</li>
      </ul>
    </>
  );
}
