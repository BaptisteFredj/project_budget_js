import { PropTypes } from "prop-types";
import { formattedNumber } from "../utils/functions";

export default function CategoryAmountThumb({ category, categoryPercentage }) {
  return (
    <p>
      {category.name ? category.name : "Sans catégorie"}
      {` ${formattedNumber(category.category_amount)}`} € soit{" "}
      {categoryPercentage}%
    </p>
  );
}

CategoryAmountThumb.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    category_amount: PropTypes.string,
  }).isRequired,
  categoryPercentage: PropTypes.number.isRequired,
};
