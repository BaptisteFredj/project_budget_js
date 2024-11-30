import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import BudgetThumb from "../components/BudgetThumb";

import "../assets/styles/budgets.css";

function Users() {
  const { budgets } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="budgets_title">Mes budgets</h1>
      <section className="budget_thumbs_container">
        {budgets.map((budget) => (
          <BudgetThumb budget={budget} key={budget.id} />
        ))}
      </section>
      <div className="add_button_container">
        <button type="button" className="add_button">
          <Link to="/budgets_form">Créer un budget</Link>
        </button>
      </div>
    </>
  );
}

export default Users;
