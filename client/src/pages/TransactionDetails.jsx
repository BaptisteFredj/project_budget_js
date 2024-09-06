import { useLoaderData } from "react-router-dom";

function TransactionDetails() {
  const { transaction } = useLoaderData();

  return (
    <ul>
      <li> Montant de la transaction : {transaction.amount}</li>
      <li> Date de la transaction : {transaction.date}</li>
      <li>Type de transaction : {transaction.type}</li>
      <li>Catégorie de la transaction : {transaction.category_id}</li>
    </ul>
  );
}

export default TransactionDetails;
