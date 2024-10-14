import { useLoaderData, Link } from "react-router-dom";
import CategoryThumb from "../components/CategoryThumb";

function Categories() {
  const { categories } = useLoaderData();

  return (
    <>
      <h1>Mes catégories</h1>
      {categories.map((category) => (
        <CategoryThumb category={category} key={category.id} />
      ))}
      <Link to="/categories_form">Créer une catégorie</Link>
    </>
  );
}

export default Categories;
