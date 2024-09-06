import { useLoaderData } from "react-router-dom";
import CategoryThumb from "../components/CategoryThumb";

function Users() {
  const { categories } = useLoaderData();

  return (
    <>
      <h1>Nos catégories</h1>
      {categories.map((category) => (
        <CategoryThumb category={category} key={category.id} />
      ))}
    </>
  );
}

export default Users;
