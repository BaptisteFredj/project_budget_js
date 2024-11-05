import { useLoaderData, Link } from "react-router-dom";
import CategoryThumb from "../components/CategoryThumb";

import "../assets/styles/categories.css";

function Categories() {
  const { categories } = useLoaderData();

  return (
    <>
      <h1 className="categories_title">Catégories</h1>
      {categories.map((category) => (
        <CategoryThumb category={category} key={category.id} />
      ))}
      <div className="add_button_container">
        <button type="button" className="add_button">
          <Link to="/categories_form">Créer une catégorie</Link>
        </button>
      </div>
    </>
  );
}

export default Categories;
