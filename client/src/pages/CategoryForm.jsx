import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";
import IconsPopover from "../components/IconsPopover";

import "../assets/styles/categoryform.css";

function CategoryForm() {
  const { icons } = useLoaderData();
  const [showPopover, setShowPopover] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconListClick = () => {
    setShowPopover(true);
  };

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <>
      <h1>Créer une catégorie</h1>
      <Form method="post">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom de la catégorie"
          required
        />
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
            {selectedIcon ? "🔄" : "➕"}
          </button>
        </p>

        {showPopover && (
          <IconsPopover
            icons={icons}
            onClose={() => setShowPopover(false)}
            onIconSelect={handleIconSelect}
          />
        )}
        <button type="submit">Confirmer la création</button>
      </Form>
    </>
  );
}

export default CategoryForm;
