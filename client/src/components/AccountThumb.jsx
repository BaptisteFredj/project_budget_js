import { useState } from "react";
import { PropTypes } from "prop-types";
import AccountOptions from "./AccountOptions";

import threedots from "../assets/images/threedots.svg";

export default function AccountThumb({ account }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <p>Nom du compte: {account.name}</p>
      <p>Montant sur le compte : {account.amount}</p>

      {showOptions && <AccountOptions account={account} />}
      <button
        type="button"
        className="dots_ellipsis"
        onClick={handleOptionsClick}
        aria-label="Show options"
      >
        <img src={threedots} alt="Three dots" />
      </button>
    </>
  );
}

AccountThumb.propTypes = {
  account: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
