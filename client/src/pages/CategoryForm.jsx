import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addCategory } from "../services/request";

function CategoryForm() {
  const { icons } = useLoaderData();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await addCategory({
        name: formData.get("name"),
        icon: formData.get("icon"),
      });

      if (response) {
        navigate(`/categories`);
      } else {
        setError("La catégorie n'a pas pu être créée.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "Une erreur s'est produite lors de la création de la catégorie."
      );
    }
  };

  return (
    <>
      <h1>Créer une catégorie</h1>
      {error && <p>{error}</p>}
      <Form method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom de la catégorie</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom de la catégorie"
          required
        />

        <h3>All icons !</h3>
        {icons.map((icon) => (
          <div key={icon.id}>
            <img
              src={`${import.meta.env.VITE_API_URL}${icon.path}`}
              alt={`Icon ${icon.id}`}
            />
          </div>
        ))}

        <label htmlFor="icon">Icone de la catégorie</label>
        <input type="text" id="icon" name="icon" placeholder="Icône" />
        <button type="submit">Ajouter</button>
      </Form>
    </>
  );
}

export default CategoryForm;
