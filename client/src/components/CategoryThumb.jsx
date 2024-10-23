import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function CategoryThumb({ category }) {
  return (
    <ul>
      <img
        src={`${import.meta.env.VITE_API_URL}${category.path}`}
        alt={category.name}
      />
      <li>
        Nom de la catégorie : {category.name}
        <Link to={`/categories/${category.id}/edit`}>
          Modifier la catégorie
        </Link>
      </li>
    </ul>
  );
}

CategoryThumb.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
