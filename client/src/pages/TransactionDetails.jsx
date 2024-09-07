import { useLoaderData } from "react-router-dom";

function TransactionDetails() {
  const { transaction } = useLoaderData();
  console.info(transaction.name);

  return (
    <ul>
      <li>Nom de la transaction : {transaction.name}</li>

      <li>Montant de la transaction : {transaction.amount}</li>
      <li>Date de la transaction : {transaction.date}</li>
      <li>Type de transaction : {transaction.type}</li>
      <li>Catégorie de la transaction : {transaction.category_name}</li>
    </ul>
  );
}

export default TransactionDetails;
