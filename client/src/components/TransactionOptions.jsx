import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import copy from "../assets/images/copy.svg";
import pen from "../assets/images/pen.svg";
import trash from "../assets/images/trash.svg";

function TransactionOptions({ transaction }) {
  return (
    <ul className="options_block">
      <Link to={`/transactions/${transaction.id}/edit`}>
        <div className="options copy_block">
          <img className="copy_icon" src={copy} alt="Copy icon" />
          <p>Copier</p>
        </div>
      </Link>

      <Link to={`/transactions/${transaction.id}/edit`}>
        <div className="options edit_block">
          <img className="copy_icon" src={pen} alt="Pen icon" />
          <p>Modifier</p>
        </div>
      </Link>

      <Link to={`/transactions/${transaction.id}/delete`}>
        <div className="options delete_block">
          <img className="copy_icon" src={trash} alt="Trash icon" />
          <p>Supprimer</p>
        </div>
      </Link>
    </ul>
  );
}

export default TransactionOptions;

TransactionOptions.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category_name: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
