import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { frenchType } from "../utils/functions";

export default function TransactionThumb({ transaction }) {
  return (
    <ul>
      <li>Nom de la transaction : {transaction.name}</li>
      <li>Montant de la transaction : {transaction.amount}€</li>
      <li>Type de transaction : {frenchType(transaction.type)}</li>
      <li>Date de la transaction : {transaction.date}</li>
      <li>Catégorie de la transaction : {transaction.category_name}</li>
      <li>
        <Link to={`/transactions/${transaction.id}/edit`}>
          Modifier la transaction
        </Link>
      </li>
    </ul>
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
