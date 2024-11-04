import { useState } from "react";
import { PropTypes } from "prop-types";
import CategoryOptions from "./CategoryOptions";

import threedots from "../assets/images/threedots.svg";

export default function CategoryThumb({ category }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

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
        {showOptions && <CategoryOptions category={category} />}
        <button
          type="button"
          className="dots_ellipsis"
          onClick={handleOptionsClick}
          aria-label="Show options"
        >
          <img src={threedots} alt="Three dots" />
        </button>
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
