import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function BudgetThumb({ budget }) {
  return (
    <ul>
      <li>
        Nom du budget : <Link to={`/budgets/${budget.id}`}>{budget.name}</Link>
      </li>
      <li>Catégorie du budget : {budget.category_name}</li>
      <li>Montant du budget : {budget.amount}</li>
      <li>Date de début de la période : {budget.start_date}</li>
      <li>Date de fin de la période : {budget.end_date}</li>
    </ul>
  );
}

BudgetThumb.propTypes = {
  budget: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
