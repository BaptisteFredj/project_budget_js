import { useLoaderData, Link } from "react-router-dom";
import BudgetThumb from "../components/BudgetThumb";

import "../assets/styles/budgets.css";

function Users() {
  const { budgets } = useLoaderData();

  return (
    <>
      <h1 className="budgets_title">Mes budgets</h1>
      {budgets.map((budget) => (
        <BudgetThumb budget={budget} key={budget.id} />
      ))}
      <div className="add_button_container">
        <button type="button" className="add_button">
          <Link to="/budgets_form">Créer un budget</Link>
        </button>
      </div>
    </>
  );
}

export default Users;
