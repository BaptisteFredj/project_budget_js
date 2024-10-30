import { Form, useLoaderData, useActionData } from "react-router-dom";

import "../assets/styles/transactionform.css";

function TransactionForm() {
  const { categories } = useLoaderData();
  const errors = useActionData();

  return (
    <Form method="post" className="transaction_label_form">
      <label className="transaction_amount_input" htmlFor="amount">
        Montant
      </label>
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Exemple : 10 €"
        step="0.01"
      />
      {errors?.AmountError}

      <label htmlFor="name">Libellé</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Exemple : Paire de chaussures"
      />
      {errors?.NameError}
      {errors?.CharacterError}

      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        placeholder="Date de la transaction"
      />

      <label htmlFor="type">Type</label>
      <select id="type" name="type">
        <option value="income">Revenu</option>
        <option value="expense">Dépense</option>
        <option value="transfer">Transfert</option>
      </select>

      <label htmlFor="category">Catégorie</label>
      <select id="category" name="category">
        <option value="">Sans catégorie</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="add_button transaction_form_button" type="submit">
        Confirmer la transaction
      </button>
    </Form>
  );
}

export default TransactionForm;
