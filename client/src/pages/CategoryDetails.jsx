import { useLoaderData } from "react-router-dom";

function CategoryDetails() {
  const { category } = useLoaderData();

  return (
    <ul>
      <li>Nom de la catégorie : {category.name}</li>
      <li>Icône : {category.icon}</li>
    </ul>
  );
}

export default CategoryDetails;
