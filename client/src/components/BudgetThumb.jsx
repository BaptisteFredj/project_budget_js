import PropTypes from "prop-types";

export default function BudgetThumb({ budget }) {
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

BudgetThumb.propTypes = {
  budget: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
  }).isRequired,
};
