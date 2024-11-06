import { useLoaderData, Link } from "react-router-dom";
import AccountThumb from "../components/AccountThumb";

export default function Accounts() {
  const { accounts } = useLoaderData();

  return (
    <>
      {accounts.map((account) => (
        <AccountThumb account={account} key={account.id} />
      ))}
      <div className="add_button_container">
        <button type="button" className="add_button">
          <Link to="/accounts_form">Créer un nouveau compte</Link>
        </button>
      </div>
    </>
  );
}
