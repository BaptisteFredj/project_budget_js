import { useEffect } from "react";
import { useLoaderData, Link, useSearchParams } from "react-router-dom";
import TransactionThumb from "../components/TransactionThumb";

import "../assets/styles/transactions.css";

function Transactions() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const { transactions } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ul className="transactions_title_group">
        <li className="title_transactions">Transactions </li>
        <Link to="/transactions?date=past">
          <li
            className={`last_transactions ${date === "past" ? "active" : ""}`}
          >
            récentes{" "}
          </li>
        </Link>
        <Link to="/transactions?date=future">
          <li
            className={`future_transactions ${date === "future" ? "active" : ""}`}
          >
            prévues{" "}
          </li>
        </Link>
      </ul>

      {transactions.map((transaction) => (
        <TransactionThumb transaction={transaction} key={transaction.id} />
      ))}
      <div className="add_button_container">
        <button type="button" className="add_button">
          <Link to="/transactions_form">Nouvelle transaction</Link>
        </button>
      </div>
    </>
  );
}

export default Transactions;
