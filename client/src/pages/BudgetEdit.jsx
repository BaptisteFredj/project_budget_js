import { useEffect } from "react";
import { Form, useLoaderData, useActionData } from "react-router-dom";
import { toIso } from "../utils/functions";

import "../assets/styles/budgetform.css";

function BudgetEdit() {
  const { budget, categories } = useLoaderData();
  const errors = useActionData();

  const previousCategory = categories?.find(
    (category) => category.name === budget.category_name
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Form method="put" className="budget_label_form">
      <label className="budget_amount_label" htmlFor="amount">
        Montant du budget
      </label>
      <input
        className="budget_amount_input"
        type="number"
        id="amount"
        name="amount"
        defaultValue={budget.amount}
        required
      />
      {errors?.AmountError && (
        <span className="error_message">{errors.AmountError}</span>
      )}

      <label className="budget_start_date_label" htmlFor="start_date">
        Date de début du budget
      </label>
      <input
        className="budget_start_date_input"
        type="date"
        id="start_date"
        name="start_date"
        defaultValue={toIso(budget.start_date)}
        required
      />
      {errors?.DateError && (
        <span className="error_message"> {errors.DateError}</span>
      )}

      <label className="budget_end_date_label" htmlFor="end_date">
        Date de fin du budget
      </label>
      <input
        className="budget_end_date_input"
        type="date"
        id="end_date"
        name="end_date"
        defaultValue={toIso(budget.end_date)}
        required
      />

      <label className="budget_category_label" htmlFor="category">
        Catégorie du budget
      </label>
      <select
        className="budget_category_select"
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
      <button className="add_button budget_edit_button" type="submit">
        Modifier le budget
      </button>
    </Form>
  );
}

export default BudgetEdit;
