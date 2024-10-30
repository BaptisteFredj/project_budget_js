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
      <label className="transaction_amount_label" htmlFor="amount">
        Montant
      </label>
      {errors?.AmountError && (
        <span className="error_message">{errors.AmountError}</span>
      )}
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Exemple : 10,50 €"
        step="0.01"
        className="transaction_amount_input"
      />

      <label className="transaction_name_label" htmlFor="name">
        Libellé
      </label>
      {errors?.NameError && (
        <span className="error_message">{errors.NameError}</span>
      )}
      {errors?.CharacterError && (
        <span className="error_message">{errors.CharacterError}</span>
      )}
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Exemple : Paire de chaussures"
        className="transaction_name_input"
      />

      <label className="transaction_date_label" htmlFor="date">
        Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        placeholder="Date de la transaction"
        className="transaction_date_input"
      />

      <label className="transaction_type_label" htmlFor="type">
        Type
      </label>
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

      <label className="transaction_category_label" htmlFor="category">
        Catégorie
      </label>
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
