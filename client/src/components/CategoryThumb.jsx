import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function CategoryThumb({ category }) {
  return (
    <div>
      <img
        className="icon_img"
        src={`/assets/icons/${category.path}.svg`}
        alt={category.name}
      />
      {category.name}
      <Link to={`/categories/${category.id}/edit`}>Modifier la catégorie</Link>
    </div>
  );
}

CategoryThumb.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
