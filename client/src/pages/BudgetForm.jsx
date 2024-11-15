import { Form, useActionData, useLoaderData } from "react-router-dom";

function BudgetForm() {
  const { categories } = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <h1>Créer un budget</h1>
      <Form method="post">
        <label htmlFor="amount">Montant du budget</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Montant"
          required
        />
        {errors?.AmountError}

        <label htmlFor="start_date">Date de début du budget</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          placeholder="Date de début du budget"
          required
        />
        {errors?.DateError}

        <label htmlFor="end_date">Date de fin du budget</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          placeholder="Date de fin du budget"
          required
        />
        <label htmlFor="category">Catégorie du budget</label>
        <select id="category" name="category" required>
          <option value="">Sans catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Ajouter</button>
      </Form>
    </>
  );
}

export default BudgetForm;
