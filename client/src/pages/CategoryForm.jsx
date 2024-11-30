import { useEffect, useState } from "react";
import { Form, useLoaderData, useActionData } from "react-router-dom";

import "../assets/styles/categoryform.css";

function CategoryForm() {
  const errors = useActionData();
  const { icons } = useLoaderData();
  const [selectedIcon, setSelectedIcon] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {errors?.NameError && (
        <span className="error_message">{errors.NameError}</span>
      )}
      {errors?.CharacterError && (
        <span className="error_message">{errors.CharacterError}</span>
      )}

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
