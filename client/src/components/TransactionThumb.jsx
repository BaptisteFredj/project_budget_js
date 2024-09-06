import PropTypes from "prop-types";

export default function TransactionThumb({ transaction }) {
  return (
    <ul>
      <li> Montant de la transaction : {transaction.amount}</li>
      <li> Date de la transaction : {transaction.date}</li>
      <li>Type de transaction : {transaction.type}</li>
      <li>Catégorie de la transaction : {transaction.category_id}</li>
    </ul>
  );
}

TransactionThumb.propTypes = {
  transaction: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
  }).isRequired,
};
