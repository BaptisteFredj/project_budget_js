import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function BudgetThumb({ budget }) {
  return (
    <>
      <div>
        <ul>
          <li>Nom caté {budget.category_name}</li>
          <li>
            Du {budget.start_date} au {budget.end_date}
          </li>
        </ul>
        <ul>
          <li>Montant dép {budget.category_sum}</li>
          <li>Options</li>
          <li>
            <Link to={`/budgets/${budget.id}/edit`}>Modifier le budget</Link>
          </li>
        </ul>
      </div>

      <ul>
        <li>Progress bar + Calcul %</li>
        <li>Montant max {budget.amount}</li>
      </ul>
    </>
  );
}

BudgetThumb.propTypes = {
  budget: PropTypes.shape({
    category_name: PropTypes.string.isRequired,
    category_sum: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
