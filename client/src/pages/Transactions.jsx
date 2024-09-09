import { useLoaderData } from "react-router-dom";
import TransactionThumb from "../components/TransactionThumb";

function Transactions() {
  const { transactions } = useLoaderData();

  return (
    <>
      <h1>Mes transactions</h1>
      {transactions.map((transaction) => (
        <TransactionThumb transaction={transaction} key={transaction.id} />
      ))}
    </>
  );
}

export default Transactions;
