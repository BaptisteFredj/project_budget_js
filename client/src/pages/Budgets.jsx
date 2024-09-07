import { useLoaderData } from "react-router-dom";
import BudgetThumb from "../components/BudgetThumb";

function Users() {
  const { budgets } = useLoaderData();

  return (
    <>
      <h1>Mes budgets</h1>
      {budgets.map((budget) => (
        <BudgetThumb budget={budget} key={budget.id} />
      ))}
    </>
  );
}

export default Users;
