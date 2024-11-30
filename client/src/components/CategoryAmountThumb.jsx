import { PropTypes } from "prop-types";
import { formattedNumber } from "../utils/functions";

export default function CategoryAmountThumb({ category, categoryPercentage }) {
  let categoryName;
  if (!category.name) {
    categoryName = "Sans catégorie";
  } else if (category.name.length > 13) {
    categoryName = `${category.name.substring(0, 13)}...`;
  } else {
    categoryName = category.name;
  }

  return (
    <li className="category_amount_thumb_container">
      <div className="left_thumb_container">
        <span className="category_thumb_name">
          {category.name ? categoryName : "Sans catégorie"}
        </span>
        <span className="category_sum">
          {formattedNumber(category.category_amount)} €
        </span>
      </div>
      <span className="category_percentage">{categoryPercentage}%</span>
    </li>
  );
}

CategoryAmountThumb.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    category_amount: PropTypes.string,
  }).isRequired,
  categoryPercentage: PropTypes.string.isRequired,
};
