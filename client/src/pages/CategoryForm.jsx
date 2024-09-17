import { useState } from "react";
import { Form } from "react-router-dom";

function CategoryForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleIconChange = (event) => {
    setIcon(event.target.value);
  };

  return (
    <>
      <h1>Créer une catégorie</h1>
      <Form method="post">
        <label htmlFor="name">Nom de la catégorie</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom de de la catégorie"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="icon">Icone de la catégorie</label>
        <input
          type="text"
          id="icon"
          name="icon"
          placeholder="Icône"
          value={icon}
          onChange={handleIconChange}
        />
        <button type="submit">Ajouter</button>
      </Form>
    </>
  );
}

export default CategoryForm;
