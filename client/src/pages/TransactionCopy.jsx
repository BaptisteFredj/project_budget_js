import { useState, useEffect } from "react";
import { Form, useLoaderData, useActionData } from "react-router-dom";
import { toIso } from "../utils/functions";

import "../assets/styles/transactionform.css";

function TransactionCopy() {
  const { transaction, categories } = useLoaderData();
  const errors = useActionData();
  const [selectedCategory, setSelectedCategory] = useState();
  const [amount, setAmount] = useState(transaction.amount || "");
  const [date, setDate] = useState(toIso(transaction.date) || "");
  const [name, setName] = useState(transaction.name || "");

  const previousCategory = categories?.find(
    (category) => category.icon_name === transaction.icon_name
  );

  useEffect(() => {
    setSelectedCategory(previousCategory?.id);
  }, [previousCategory]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Form method="post" className="transaction_label_form">
      <label className="transaction_amount_label" htmlFor="amount">
        Montant
      </label>

      <input
        type="number"
        id="amount"
        name="amount"
        step="0.01"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        className="transaction_amount_input"
      />
      {errors?.AmountError && (
        <span className="error_message">{errors.AmountError}</span>
      )}

      <label className="transaction_name_label" htmlFor="name">
        Libellé
      </label>

      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="transaction_name_input"
      />
      {errors?.NameError && (
        <span className="error_message">{errors.NameError}</span>
      )}
      {errors?.CharacterError && (
        <span className="error_message">{errors.CharacterError}</span>
      )}

      <label className="transaction_date_label" htmlFor="date">
        Date
      </label>

      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className="transaction_date_input"
      />
      {errors?.DateError && (
        <span className="error_message">{errors.DateError}</span>
      )}

      <label className="transaction_category_label" htmlFor="category">
        Catégorie
      </label>
      <div className="category_list">
        <div
          className={`icon_circle category_option ${!selectedCategory ? "active_category" : ""}`}
        >
          <button type="button" onClick={() => handleCategoryClick(null)}>
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
      <button className="add_button transaction_copy_button" type="submit">
        Créer la transaction
      </button>
    </Form>
  );
}

export default TransactionCopy;
