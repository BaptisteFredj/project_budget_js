import { Form, useLoaderData, useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
import IconsPopover from "../components/IconsPopover";

import "../assets/styles/categoryform.css";

function CategoryEdit() {
  const errors = useActionData();
  const { category, icons } = useLoaderData();
  const [showPopover, setShowPopover] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    const defaultIcon = icons.find((icon) => icon.id === category.icon_id);
    setSelectedIcon(defaultIcon);
  }, [category.icon_id, icons]);

  const handleIconListClick = () => {
    setShowPopover(true);
  };

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <>
      <h1>Modifier ma catégorie</h1>
      <Form method="put">
        <label htmlFor="name">Nom</label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={category.name}
          required
        />
        {errors?.NameError}
        {errors?.CharacterError}
        {selectedIcon && (
          <input type="hidden" name="iconId" value={selectedIcon.id} />
        )}
        <p>
          Icône :
          {selectedIcon ? (
            <img
              className="icon_img"
              src={`${import.meta.env.VITE_API_URL}${selectedIcon.path}`}
              alt="Icône de la catégorie"
            />
          ) : (
            "Aucune icône sélectionnée"
          )}
        </p>
        <p>
          Nos icônes :
          <button type="button" onClick={handleIconListClick}>
            🔄
          </button>
        </p>
        {showPopover && (
          <IconsPopover
            icons={icons}
            onClose={() => setShowPopover(false)}
            onIconSelect={handleIconSelect}
          />
        )}
        <button type="submit">Valider les modifications</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer cette catégorie</button>
      </Form>
    </>
  );
}

export default CategoryEdit;
