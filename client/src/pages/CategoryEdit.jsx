import { Form, useLoaderData, useActionData } from "react-router-dom";
import { useState, useEffect } from "react";

import "../assets/styles/categoryform.css";

function CategoryEdit() {
  const errors = useActionData();
  const { category, icons } = useLoaderData();
  const [selectedIcon, setSelectedIcon] = useState("");
  const [name, setName] = useState();

  useEffect(() => {
    const defaultIcon = icons.find((icon) => icon.id === category.icon_id);
    setSelectedIcon(defaultIcon);
  }, [category.icon_id, icons]);

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors?.NameError}
        {errors?.CharacterError}
        <h2>Icône</h2>
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
        <button type="submit">Valider les modifications</button>
      </Form>
    </>
  );
}

export default CategoryEdit;
