import { useLoaderData } from "react-router-dom";
import CategoryThumb from "../components/CategoryThumb";
import CategoryForm from "../components/CategoryForm";

function Users() {
  const { categories } = useLoaderData();

  return (
    <>
      <h1>Mes catégories</h1>
      {categories.map((category) => (
        <CategoryThumb category={category} key={category.id} />
      ))}
      <CategoryForm />
    </>
  );
}

export default Users;
