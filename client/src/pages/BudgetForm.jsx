import { Form, useActionData, useLoaderData } from "react-router-dom";

import "../assets/styles/budgetform.css";

function BudgetForm() {
  const { categories } = useLoaderData();
  const errors = useActionData();

  return (
    <Form method="post" className="budget_label_form">
      <label className="budget_amount_label" htmlFor="amount">
        Montant du budget
      </label>
      <input
        className="budget_amount_input"
        type="number"
        id="amount"
        name="amount"
        placeholder="Montant"
        required
      />
      {errors?.AmountError}

      <label className="budget_start_date_label" htmlFor="start_date">
        Date de début du budget
      </label>
      <input
        className="budget_start_date_input"
        type="date"
        id="start_date"
        name="start_date"
        placeholder="Date de début du budget"
        required
      />
      {errors?.DateError}

      <label className="budget_end_date_label" htmlFor="end_date">
        Date de fin du budget
      </label>
      <input
        className="budget_end_date_input"
        type="date"
        id="end_date"
        name="end_date"
        placeholder="Date de fin du budget"
        required
      />
      <label className="budget_category_label" htmlFor="category">
        Catégorie du budget
      </label>
      <select
        className="budget_category_select"
        id="category"
        name="category"
        required
      >
        <option value="">Sélectionner une catégorie</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="add_button budget_form_button" type="submit">
        Ajouter
      </button>
    </Form>
  );
}

export default BudgetForm;
