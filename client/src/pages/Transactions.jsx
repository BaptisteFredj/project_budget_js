import { useLoaderData, Link } from "react-router-dom";
import TransactionThumb from "../components/TransactionThumb";

import "../assets/styles/transactions.css";

function Transactions() {
  const { transactions } = useLoaderData();

  return (
    <>
      <ul className="transactions_title_group">
        <li className="title_transactions">Transactions </li>
        <li className="last_transactions">récentes </li>
        <li className="future_transactions">prévues </li>
      </ul>

      {transactions.map((transaction) => (
        <TransactionThumb transaction={transaction} key={transaction.id} />
      ))}
      <div className="transaction_button_container">
        <button type="button" className="transaction_add_button">
          <Link to="/transactions_form">Nouvelle transaction</Link>
        </button>
      </div>
    </>
  );
}

export default Transactions;
