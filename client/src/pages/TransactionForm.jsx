import { useState } from "react";
import { Form, useLoaderData, useActionData } from "react-router-dom";

import "../assets/styles/transactionform.css";

function TransactionForm() {
  const { categories } = useLoaderData();
  const errors = useActionData();

  const [selectedType, setSelectedType] = useState("");

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

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
      <div className="type_selector">
        <button
          type="button"
          className={`type_option ${selectedType === "income" ? "active" : ""}`}
          onClick={() => handleTypeClick("income")}
        >
          Revenu
        </button>
        <button
          type="button"
          className={`type_option ${selectedType === "expense" ? "active" : ""}`}
          onClick={() => handleTypeClick("expense")}
        >
          Dépense
        </button>
        <button
          type="button"
          className={`type_option ${selectedType === "transfer" ? "active" : ""}`}
          onClick={() => handleTypeClick("transfer")}
        >
          Transfert
        </button>
      </div>
      <input type="hidden" name="type" value={selectedType} />

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
