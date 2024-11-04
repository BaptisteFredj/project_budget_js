import { useState } from "react";
import PropTypes from "prop-types";

export default function IconsPopover({ onClose, icons, onIconSelect }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleConfirmSelection = () => {
    onIconSelect(selectedIcon);
    onClose();
  };

  return (
    <div className="icons_popover">
      <ul className="icons_img">
        {icons.map((icon) => (
          <li key={icon.id}>
            <button type="button" onClick={() => handleIconClick(icon)}>
              <img
                className="icon_img"
                src={`/assets/icons/${icon.path}.svg`}
                alt={icon.id}
              />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleConfirmSelection}
        disabled={!selectedIcon}
      >
        Confirmer
      </button>
      <button type="button" onClick={onClose}>
        Retour
      </button>
    </div>
  );
}

IconsPopover.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  onIconSelect: PropTypes.func.isRequired,
};
