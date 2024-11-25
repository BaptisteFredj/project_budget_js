import { useState, useEffect } from "react";
import { useLoaderData, useSearchParams, Link } from "react-router-dom";
import CategoryAmountThumb from "../components/CategoryAmountThumb";
import TransactionThumb from "../components/TransactionThumb";
import BudgetThumb from "../components/BudgetThumb";

import { formattedNumber, computePercentage } from "../utils/functions";

import "../assets/styles/dashboard.css";

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const { transactionsTotalSum, categories, transactions, budgets } =
    useLoaderData();

  const [selectedStartDate, setSelectedStartDate] = useState(
    searchParams.get("startDate") || ""
  );
  const [selectedEndDate, setSelectedEndDate] = useState(
    searchParams.get("end_date") || ""
  );
  const [showPeriodOptions, setShowPeriodOptions] = useState();

  const period = searchParams.get("period");

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

  const closePeriodOptions = () => {
    if (showPeriodOptions) {
      setShowPeriodOptions(false);
      setSelectedStartDate("");
      setSelectedEndDate("");
    }
  };

  return (
    <>
      <div className="dashboard_titles_container">
        <Link to="/transactions?date=past">
          <h2 className="dashboard_title title_by_period">
            Mes dépenses par catégorie
          </h2>
        </Link>
      </div>
      <ul className="period_button_container">
        <Link to="/dashboard?period=day&limit=10">
          <button
            type="button"
            onClick={() => closePeriodOptions()}
            className={`period_button ${period === "day" && !showPeriodOptions ? "active" : ""}`}
          >
            du jour
          </button>
        </Link>
        <Link to="/dashboard?period=week&limit=10">
          <button
            type="button"
            onClick={() => closePeriodOptions()}
            className={`period_button ${period === "week" && !showPeriodOptions ? "active" : ""}`}
          >
            de la semaine
          </button>
        </Link>
        <Link to="/dashboard?period=month&limit=10">
          <button
            type="button"
            onClick={() => closePeriodOptions()}
            className={`period_button ${period === "month" && !showPeriodOptions ? "active" : ""}`}
          >
            du mois
          </button>
        </Link>
        <Link to="/dashboard?period=year&limit=10">
          <button
            type="button"
            onClick={() => closePeriodOptions()}
            className={`period_button ${period === "year" && !showPeriodOptions ? "active" : ""}`}
          >
            de l'année
          </button>
        </Link>
        <button
          className={`period_button ${showPeriodOptions ? "active" : ""}`}
          type="button"
          onClick={() => setShowPeriodOptions(!showPeriodOptions)}
        >
          période
        </button>
      </ul>

      {showPeriodOptions ? (
        <section className="custom_period_container">
          <div className="period_start_container">
            <label className="period_start_label" htmlFor="start_date">
              Début de période
            </label>
            <input
              className="period_start_input"
              type="date"
              id="start_date"
              name="start_date"
              value={selectedStartDate}
              onChange={(event) => handleStartDateChange(event.target.value)}
              required
            />
          </div>
          <div className="period_end_container">
            <label className="period_end_label" htmlFor="end_date">
              Fin de période
            </label>
            <input
              className="period_end_input"
              type="date"
              id="end_date"
              name="end_date"
              value={selectedEndDate}
              onChange={(event) => handleEndDateChange(event.target.value)}
              required
            />{" "}
          </div>
        </section>
      ) : (
        ""
      )}
      <ul className="display_headlines">
        <li>Catégorie</li>
        <li>Somme</li>
        <li>Part</li>
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
        <span className="dashboard_total_text">Dépenses sur la période :</span>
        <span className="dashboard_total_amount">
          {formattedNumber(transactionsTotalSum)} €
        </span>
      </p>
      <div className="dashboard_titles_container">
        <Link to="/budgets">
          <h2 className="dashboard_title">Mes budgets</h2>
        </Link>
        <Link to="/budgets_form">
          <div
            className="plus_button dashboard_budget_add"
            role="button"
            aria-label="Add"
          />
        </Link>
      </div>
      <section className="budget_thumbs_container">
        {budgets.map((budget) => (
          <BudgetThumb budget={budget} key={budget.id} />
        ))}
      </section>
      <div className="dashboard_titles_container">
        <Link to="/transactions?date=past">
          <h2 className="dashboard_title expenses">Mes dernières dépenses</h2>
        </Link>
        <Link to="/transactions_form">
          <div
            className="plus_button dashboard_transaction_add"
            role="button"
            aria-label="Add"
          />
        </Link>
      </div>
      <section className="transaction_blocks_container">
        {transactions.slice(0, 10).map((transaction) => (
          <TransactionThumb transaction={transaction} key={transaction.id} />
        ))}
      </section>
    </>
  );
}
