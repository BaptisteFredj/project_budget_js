import PropTypes from "prop-types";

export default function UserThumb({ user }) {
  return (
    <ul>
      <li> Username : {user.username}</li>
      <li>Email : {user.email}</li>
      <li>Password : {user.password}</li>
      <li>Profil créé le : {user.created_at}</li>
    </ul>
  );
}

UserThumb.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
