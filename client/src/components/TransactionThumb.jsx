import { useState } from "react";
import { PropTypes } from "prop-types";
import { frenchType } from "../utils/functions";
import TransactionOptions from "./TransactionOptions";

import threedots from "../assets/images/threedots.svg";

export default function TransactionThumb({ transaction }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <section className="transaction_block">
      <div className="transaction_left_container">
        <div className="icon_circle transaction_icon">
          <img
            className="icon_img"
            src={`/assets/icons/${transaction.icon_name}.svg`}
            alt={transaction.icon_name}
          />
        </div>
        <ul>
          <div className="transaction_name_date">
            <li className="transaction_name">{transaction.name}</li>
            <li className="transaction_date">{transaction.date}</li>
          </div>
          <li className="transaction_category_type">
            {transaction.category_name} - {frenchType(transaction.type)}
          </li>
        </ul>
      </div>

      <ul className="transaction_right_block">
        <li className="transaction_amount">{transaction.amount} €</li>
        {showOptions && <TransactionOptions transaction={transaction} />}
        <button
          type="button"
          className="dots_ellipsis"
          onClick={handleOptionsClick}
          aria-label="Show options"
        >
          <img src={threedots} alt="Three dots" />
        </button>
      </ul>
    </section>
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
    icon_name: PropTypes.string.isRequired,
  }).isRequired,
};
