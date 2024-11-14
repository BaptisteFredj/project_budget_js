import { useState, useEffect } from "react";
import { useLoaderData, useSearchParams, Link } from "react-router-dom";
import CategoryAmountThumb from "../components/CategoryAmountThumb";
import TransactionThumb from "../components/TransactionThumb";

import { formattedNumber, computePercentage } from "../utils/functions";

import "../assets/styles/dashboard.css";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const period = searchParams.get("period");
  const { transactionsTotalSum, categories, transactions } = useLoaderData();

  const [selectedStartDate, setSelectedStartDate] = useState(
    searchParams.get("startDate") || ""
  );
  const [selectedEndDate, setSelectedEndDate] = useState(
    searchParams.get("end_date") || ""
  );

  useEffect(() => {
    if (selectedStartDate || selectedEndDate) {
      const params = {
        period,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
      };
      setSearchParams(params);
    }
  }, [selectedStartDate, selectedEndDate, period, setSearchParams]);

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

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

      <label htmlFor="start_date">Date de début du budget</label>
      <input
        type="date"
        id="start_date"
        name="start_date"
        value={selectedStartDate}
        onChange={(event) => handleStartDateChange(event.target.value)}
        required
      />
      <label htmlFor="end_date">Date de fin du budget</label>
      <input
        type="date"
        id="end_date"
        name="end_date"
        value={selectedEndDate}
        onChange={(event) => handleEndDateChange(event.target.value)}
        required
      />

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
