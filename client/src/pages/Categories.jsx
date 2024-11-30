import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import CategoryThumb from "../components/CategoryThumb";

import "../assets/styles/categories.css";

function Categories() {
  const { categories } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="categories_title">Mes catégories</h1>
      <section className="category_blocks_container">
        {categories.map((category) => (
          <CategoryThumb category={category} key={category.id} />
        ))}
      </section>
      <div className="add_button_container">
        <button type="button" className="add_button">
          <Link to="/categories_form">Créer une catégorie</Link>
        </button>
      </div>
    </>
  );
}

export default Categories;
