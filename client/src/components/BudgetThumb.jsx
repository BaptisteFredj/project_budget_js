import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function BudgetThumb({ budget }) {
  return (
    <ul>
      <li>Catégorie du budget : {budget.category_name}</li>
      <li>Montant du budget : {budget.amount}</li>
      <li>Date de début du budget : {budget.start_date}</li>
      <li>Date de fin du budget : {budget.end_date}</li>
      <li>
        <Link to={`/budgets/${budget.id}/edit`}>Modifier le budget</Link>
      </li>
    </ul>
  );
}

BudgetThumb.propTypes = {
  budget: PropTypes.shape({
    category_name: PropTypes.string,
    amount: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
