import { useLoaderData, Link } from "react-router-dom";
import TransactionThumb from "../components/TransactionThumb";

import "../assets/styles/transactions.css";

function Transactions() {
  const { transactions } = useLoaderData();

  return (
    <>
      <h1 className="transactions_title">Mes transactions</h1>
      {transactions.map((transaction) => (
        <TransactionThumb transaction={transaction} key={transaction.id} />
      ))}
      <Link to="/transactions_form">Ajouter une transaction</Link>
    </>
  );
}

export default Transactions;
