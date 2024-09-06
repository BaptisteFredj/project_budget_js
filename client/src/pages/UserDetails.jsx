import { useLoaderData } from "react-router-dom";

function UserDetails() {
  const { user } = useLoaderData();

  return (
    <>
      <h1>Bienvenue, {user.username}</h1>
      <ul>
        <li>Email : {user.email}</li>
        <li>Password : {user.password}</li>
        <li>Profil créé le : {user.created_at}</li>
      </ul>
    </>
  );
}

export default UserDetails;
