import { Form, useActionData, useLoaderData } from "react-router-dom";

function BudgetForm() {
  const { categories } = useLoaderData();
  const errors = useActionData();

  console.info("error in form", errors);
  console.info("error name in form", errors?.error?.name);
  console.info("error message in form", errors?.error?.message);

  return (
    <>
      <h1>Créer un budget</h1>
      <Form method="post">
        <label htmlFor="name">Nom du budget</label>
        <input type="text" id="name" name="name" placeholder="Nom du budget" />
        {errors?.error?.name === "NameError" ||
        errors?.error?.name === "CharacterError" ? (
          <p>{errors.error.message}</p>
        ) : null}
        <label htmlFor="amount">Montant du budget</label>
        <input type="number" id="amount" name="amount" placeholder="Montant" />
        {errors?.error?.name === "AmountError" ? (
          <p>{errors.error.message}</p>
        ) : null}
        <label htmlFor="start_date">Date de début du budget</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          placeholder="Date de début du budget"
        />
        {errors?.error?.name === "DateError" ? (
          <p>{errors.error.message}</p>
        ) : null}
        <label htmlFor="end_date">Date de fin du budget</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          placeholder="Date de fin du budget"
        />
        <label htmlFor="category">Catégorie du budget</label>
        <select id="category" name="category">
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
