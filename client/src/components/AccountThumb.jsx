import { useState } from "react";
import { PropTypes } from "prop-types";
import AccountOptions from "./AccountOptions";

import { formattedNumber } from "../utils/functions";

import "../assets/styles/accounts.css";
import threedots from "../assets/images/threedots.svg";

export default function AccountThumb({ account }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="account_container">
      <p className="account_name">{account.name}</p>

      <div className="account_right_container">
        <p className="account_amount">{formattedNumber(account.amount)} €</p>
        {showOptions && <AccountOptions account={account} />}
        <button
          type="button"
          className="dots_ellipsis"
          onClick={handleOptionsClick}
          aria-label="Show options"
        >
          <img src={threedots} alt="Three dots" />
        </button>
      </div>
    </div>
  );
}

AccountThumb.propTypes = {
  account: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
