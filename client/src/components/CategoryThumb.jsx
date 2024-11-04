import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function CategoryThumb({ category }) {
  return (
    <div className="category_container">
      <ul className="category_left_container">
        <li className="icon_circle">
          <img
            className="icon_img"
            src={`/assets/icons/${category.icon_name}.svg`}
            alt={category.name}
          />
        </li>
        <li className="category_name">{category.name}</li>
      </ul>
      <div className="category_right_container">
        <Link to={`/categories/${category.id}/edit`}>
          Modifier la catégorie
        </Link>
      </div>
    </div>
  );
}

CategoryThumb.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon_name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
