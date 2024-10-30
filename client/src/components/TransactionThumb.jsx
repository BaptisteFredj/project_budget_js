import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { frenchType } from "../utils/functions";

import threedots from "../assets/images/threedots.svg";

export default function TransactionThumb({ transaction }) {
  return (
    <>
      <p>{transaction.date}</p>
      <section className="transaction_block">
        <ul className="transaction_left_block">
          <li className="transaction_name">{transaction.name}</li>
          <li className="transaction_category_type">
            {transaction.category_name} - {frenchType(transaction.type)}
          </li>
        </ul>

        <ul className="transaction_right_block">
          <li className="transaction_amount">{transaction.amount} €</li>

          <li>
            <Link to={`/transactions/${transaction.id}/edit`}>
              <img className="dots_ellipsis" src={threedots} alt="Three dots" />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

TransactionThumb.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category_name: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
