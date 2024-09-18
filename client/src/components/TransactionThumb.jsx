import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { frenchType, frenchDate } from "../utils/functions";

export default function TransactionThumb({ transaction }) {
  return (
    <ul>
      <li>
        Nom de la transacton :{" "}
        <Link to={`/transactions/${transaction.id}`}>{transaction.name}</Link>
      </li>
      <li>Montant de la transaction : {transaction.amount}</li>
      <li>Date de la transaction : {frenchDate(transaction.date)}</li>
      <li>Type de transaction : {frenchType(transaction.type)}</li>
      <li>Catégorie de la transaction : {transaction.category_name}</li>
    </ul>
  );
}

TransactionThumb.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category_name: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
