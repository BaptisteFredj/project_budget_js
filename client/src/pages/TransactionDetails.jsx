import { useLoaderData } from "react-router-dom";
import frenchType from "../utils/functions";

function TransactionDetails() {
  const { transaction } = useLoaderData();
  console.info(transaction.name);

  return (
    <ul>
      <li>Nom de la transaction : {transaction.name}</li>

      <li>Montant de la transaction : {transaction.amount}</li>
      <li>Date de la transaction : {transaction.date}</li>
      <li>Type de transaction : {frenchType(transaction.type)}</li>
      <li>Catégorie de la transaction : {transaction.category_name}</li>
    </ul>
  );
}

export default TransactionDetails;
