import { Form, useLoaderData, useActionData } from "react-router-dom";
import { useState } from "react";

import "../assets/styles/categoryform.css";

function CategoryForm() {
  const errors = useActionData();
  const { icons } = useLoaderData();
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };

  return (
    <Form method="post" className="category_label_form">
      <label className="category_name_label" htmlFor="name">
        Nom
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nom de la catégorie"
        required
        className="category_name_input"
      />
      {errors?.NameError}
      {errors?.CharacterError}

      <label className="category_icon_label" htmlFor="icon">
        Icône
      </label>
      <div className="icon_list">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`icon_circle icon_option ${selectedIcon === icon.id ? "active_icon" : ""}`}
          >
            <button type="button" onClick={() => handleIconClick(icon.id)}>
              <img
                className="icon_img"
                src={`/assets/icons/${icon.name}.svg`}
                alt={icon.id}
              />
            </button>
          </div>
        ))}
      </div>
      <input type="hidden" name="iconId" value={selectedIcon} />
      <button className="add_button category_form_button" type="submit">
        Créer la catégorie
      </button>
    </Form>
  );
}

export default CategoryForm;
