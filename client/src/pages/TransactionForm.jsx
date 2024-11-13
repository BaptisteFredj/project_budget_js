import { useState } from "react";
import { Form, useLoaderData, useActionData } from "react-router-dom";

import "../assets/styles/transactionform.css";

function TransactionForm() {
  const { categories } = useLoaderData();
  const errors = useActionData();

  const [selectedCategory, setSelectedCategory] = useState("Sans catégorie");

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
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
      {errors?.DateError && (
        <span className="error_message">{errors.DateError}</span>
      )}
      <input
        type="date"
        id="date"
        name="date"
        placeholder="Date de la transaction"
        className="transaction_date_input"
      />

      <label className="transaction_category_label" htmlFor="category">
        Catégorie
      </label>
      <div className="category_list">
        <div
          className={`icon_circle category_option ${selectedCategory === "Sans catégorie" ? "active_category" : ""}`}
        >
          <button
            type="button"
            onClick={() => handleCategoryClick("Sans catégorie")}
          >
            <img
              className="icon_img"
              src="/assets/icons/questionmark.svg"
              alt="Icône de la catégorie"
            />
          </button>
        </div>
        {categories.map((category) => (
          <div
            className={`icon_circle category_option ${selectedCategory === category.id ? "active_category" : ""}`}
            key={category.id}
          >
            <button
              type="button"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                className="icon_img"
                src={`/assets/icons/${category.icon_name}.svg`}
                alt={category.id}
              />
            </button>
          </div>
        ))}
      </div>
      <input type="hidden" name="category" value={selectedCategory} />
      <button className="add_button transaction_form_button" type="submit">
        Créer la transaction
      </button>
    </Form>
  );
}

export default TransactionForm;
