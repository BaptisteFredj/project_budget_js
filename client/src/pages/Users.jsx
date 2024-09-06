import { useLoaderData } from "react-router-dom";
import UserThumb from "../components/UserThumb";

function Users() {
  const { users } = useLoaderData();

  return (
    <>
      <h1>Nos utilisateurs</h1>
      {users.map((user) => (
        <UserThumb user={user} key={user.id} />
      ))}
    </>
  );
}

export default Users;
