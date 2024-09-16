import { useState } from "react";
import { Form } from "react-router-dom";

function CategoryForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [userId, setUserId] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleIconChange = (event) => {
    setIcon(event.target.value);
  };
  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
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
        <label htmlFor="name">Icone de la catégorie</label>
        <input
          type="text"
          id="icon"
          name="icon"
          placeholder="Icône"
          value={icon}
          onChange={handleIconChange}
        />
        <label htmlFor="name">ID du créateur de la catégorie</label>
        <input
          type="text"
          id="userId"
          name="userId"
          placeholder="Rien pour le moment"
          value={userId}
          onChange={handleUserIdChange}
        />
        <button type="submit">Ajouter</button>
      </Form>
    </>
  );
}

export default CategoryForm;
