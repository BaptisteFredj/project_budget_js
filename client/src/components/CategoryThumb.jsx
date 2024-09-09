import PropTypes from "prop-types";

export default function CategoryThumb({ category }) {
  return (
    <ul>
      <li>Nom de la catégorie : {category.name}</li>
    </ul>
  );
}

CategoryThumb.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
