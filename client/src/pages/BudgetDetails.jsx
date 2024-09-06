import { useLoaderData } from "react-router-dom";

function BudgetDetails() {
  const { budget } = useLoaderData();

  return (
    <ul>
      <li>Nom du budget : {budget.name}</li>
      <li>Catégorie du budget : {budget.category_id}</li>
      <li>Montant du budget : {budget.amount}</li>
      <li>Date de début de la période : {budget.start_date}</li>
      <li>Date de fin de la période : {budget.end_date}</li>
    </ul>
  );
}

export default BudgetDetails;
