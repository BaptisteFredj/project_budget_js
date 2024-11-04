import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import pen from "../assets/images/pen.svg";
import trash from "../assets/images/trash.svg";

import "../assets/styles/transactionoptions.css";

function CategoryOptions({ category }) {
  return (
    <div className="options_block category_edit_option">
      <Link to={`/categories/${category.id}/edit`}>
        <div className="options edit_block">
          <img className="copy_icon" src={pen} alt="Pen icon" />
          <p>Modifier</p>
        </div>
      </Link>

      <Link to={`/categories/${category.id}/delete`}>
        <div className="options delete_block">
          <img className="copy_icon" src={trash} alt="Trash icon" />
          <p>Supprimer</p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryOptions;

CategoryOptions.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
