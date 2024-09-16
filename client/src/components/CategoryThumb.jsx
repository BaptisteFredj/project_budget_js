import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CategoryThumb({ category }) {
  return (
    <ul>
      <li>
        Nom de la catégorie :
        <Link to={`/categories/${category.id}`}>{category.name}</Link>
      </li>
    </ul>
  );
}

CategoryThumb.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
