import { Form, useLoaderData } from "react-router-dom";

function CategoryEdit() {
  const { category } = useLoaderData();

  return (
    <>
      <h1>Modifier ma catégorie</h1>
      <Form method="put">
        <label htmlFor="name">Nom</label>{" "}
        <input type="text" id="name" name="name" defaultValue={category.name} />
        <label htmlFor="icon">Icône</label>{" "}
        <input type="text" id="icon" name="icon" defaultValue={category.icon} />
        <button type="submit">Modifier</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer cette catégorie</button>
      </Form>
    </>
  );
}

export default CategoryEdit;
