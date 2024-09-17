import { Form } from "react-router-dom";

function CategoryForm() {
  return (
    <>
      <h1>Créer une catégorie</h1>
      <Form method="post">
        <label htmlFor="name">Nom de la catégorie</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom de la catégorie"
        />
        <label htmlFor="icon">Icone de la catégorie</label>
        <input type="text" id="icon" name="icon" placeholder="Icône" />
        <button type="submit">Ajouter</button>
      </Form>
    </>
  );
}

export default CategoryForm;
