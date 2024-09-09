import PropTypes from "prop-types";
import frenchType from "../utils/functions";

export default function TransactionThumb({ transaction }) {
  return (
    <ul>
      <li>Nom de la transacton : {transaction.name}</li>
      <li>Montant de la transaction : {transaction.amount}</li>
      <li>Date de la transaction : {transaction.date}</li>
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
    category_name: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
