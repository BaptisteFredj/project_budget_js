import { useLoaderData, Link } from "react-router-dom";
import BudgetThumb from "../components/BudgetThumb";

function Users() {
  const { budgets } = useLoaderData();

  return (
    <>
      <h1>Mes budgets</h1>
      {budgets.map((budget) => (
        <BudgetThumb budget={budget} key={budget.id} />
      ))}
      <Link to="/budgets_form">Créer un budget</Link>
    </>
  );
}

export default Users;
