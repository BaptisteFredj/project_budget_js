import { Form, useLoaderData, useActionData } from "react-router-dom";
import { toIso } from "../utils/functions";

function BudgetEdit() {
  const { budget, categories } = useLoaderData();
  const errors = useActionData();

  const previousCategory = categories?.find(
    (category) => category.name === budget.category_name
  );

  return (
    <>
      <h1>Modifier votre budget</h1>
      <Form method="put">
        <label htmlFor="name">Nom du budget</label>
        <input type="text" id="name" name="name" defaultValue={budget.name} />
        <label htmlFor="amount">Montant du budget</label>
        <input
          type="number"
          id="amount"
          name="amount"
          defaultValue={budget.amount}
        />
        <label htmlFor="start_date">Date de début du budget</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          defaultValue={toIso(budget.start_date)}
        />
        <label htmlFor="end_date">Date de fin du budget</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          defaultValue={toIso(budget.end_date)}
        />

        <label htmlFor="category">Catégorie du budget</label>
        <select
          id="category"
          name="category"
          defaultValue={previousCategory ? previousCategory.id : ""}
        >
          <option value="">Sans catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors ? <p>{errors.error.message}</p> : null}
        <button type="submit">Modifier</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer ce budget</button>
      </Form>
    </>
  );
}

export default BudgetEdit;
