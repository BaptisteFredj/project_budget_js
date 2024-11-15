// import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../assets/styles/budgets.css";
import threedots from "../assets/images/threedots.svg";
import { formattedNumber } from "../utils/functions";

export default function BudgetThumb({ budget }) {
  return (
    <section className="budget_thumb_container">
      <div className="budget_top_container">
        <ul className="budget_name_dates">
          <li className="budget_name">{budget.category_name}</li>
          <li className="budget_dates">
            Du {budget.start_date} au {budget.end_date}
          </li>
        </ul>
        <ul className="budget_sum_options">
          <li className="budget_sum">
            {formattedNumber(budget.category_sum)} €
          </li>
          <button
            type="button"
            className="dots_ellipsis"
            // onClick={handleOptionsClick}
            aria-label="Show options"
          >
            <img src={threedots} alt="Three dots" />
          </button>
        </ul>
      </div>

      <div className="budget_bottom_container">
        <li>Progress bar + %</li>
        <li className="budget_amount">{formattedNumber(budget.amount)} €</li>
      </div>
    </section>
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
