import { useLoaderData, Link } from "react-router-dom";
import { frenchType, frenchDate } from "../utils/functions";

function TransactionDetails() {
  const { transaction } = useLoaderData();

  return (
    <>
      <ul>
        <li>Nom de la transaction : {transaction.name}</li>
        <li>Montant de la transaction : {transaction.amount}</li>
        <li>Date de la transaction : {frenchDate(transaction.date)}</li>
        <li>Type de transaction : {frenchType(transaction.type)}</li>
        <li>Catégorie de la transaction : {transaction.category_name}</li>
      </ul>
      <Link to={`/transactions/${transaction.id}/edit`}>Modifier</Link>
    </>
  );
}

export default TransactionDetails;
