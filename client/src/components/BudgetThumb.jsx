import { useState } from "react";
import { PropTypes } from "prop-types";
import { formattedNumber, computePercentage } from "../utils/functions";
import BudgetOptions from "./BudgetOptions";
import ProgressBar from "./ProgressBar";

import "../assets/styles/budgets.css";
import threedots from "../assets/images/threedots.svg";
import coinBag from "../assets/images/coinBag.svg";
import spending from "../assets/images/spending.svg";

export default function BudgetThumb({ budget }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const budgetUsageRate = computePercentage(budget.category_sum, budget.amount);

  return (
    <section className="budget_thumb_container">
      <div className="budget_top_container">
        <ul className="budget_name_dates">
          <li className="budget_name">{budget.category_name}</li>
          <li className="budget_dates">
            Du {budget.start_date} au {budget.end_date}
          </li>
        </ul>
        {showOptions && <BudgetOptions budget={budget} />}
        <button
          type="button"
          className="dots_ellipsis"
          onClick={handleOptionsClick}
          aria-label="Show options"
        >
          <img src={threedots} alt="Three dots" />
        </button>
      </div>
      <div className="budget_middle_container">
        <ProgressBar budgetUsageRate={parseFloat(budgetUsageRate)} />
      </div>

      <div className="budget_bottom_container">
        <div className="budget_sum_group">
          <img
            className="budget_icon_img"
            src={spending}
            alt="Main qui dépense des pièces"
          />
          <li className="budget_sum">
            {formattedNumber(budget.category_sum)} €
          </li>
        </div>
        <div className="budget_amount_group">
          <img className="budget_icon_img" src={coinBag} alt="Sac de pièces" />
          <li className="budget_amount">{formattedNumber(budget.amount)} €</li>
        </div>
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
