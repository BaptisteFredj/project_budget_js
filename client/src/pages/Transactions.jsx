import { useLoaderData, Link, useParams } from "react-router-dom";
import TransactionThumb from "../components/TransactionThumb";

import "../assets/styles/transactions.css";

function Transactions() {
  const { transactions } = useLoaderData();
  const { dateFilter } = useParams();

  return (
    <>
      <ul className="transactions_title_group">
        <li className="title_transactions">Transactions </li>
        <Link to="/transactions/past">
          <li
            className={`last_transactions ${dateFilter === "past" ? "active" : ""}`}
          >
            récentes{" "}
          </li>
        </Link>
        <Link to="/transactions/future">
          <li
            className={`future_transactions ${dateFilter === "future" ? "active" : ""}`}
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
