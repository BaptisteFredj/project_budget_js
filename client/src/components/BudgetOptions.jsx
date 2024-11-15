import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import pen from "../assets/images/pen.svg";
import trash from "../assets/images/trash.svg";

import "../assets/styles/transactionoptions.css";

function BudgetOptions({ budget }) {
  return (
    <div className="options_block category_edit_option">
      <Link to={`/budgets/${budget.id}/edit`}>
        <div className="options edit_block">
          <img className="copy_icon" src={pen} alt="Pen icon" />
          <p>Modifier</p>
        </div>
      </Link>

      <Link to={`/budgets/${budget.id}/delete`}>
        <div className="options delete_block">
          <img className="copy_icon" src={trash} alt="Trash icon" />
          <p>Supprimer</p>
        </div>
      </Link>
    </div>
  );
}

export default BudgetOptions;

BudgetOptions.propTypes = {
  budget: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
