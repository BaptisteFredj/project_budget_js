import { useEffect, useState } from "react";
import { Form, useLoaderData, useActionData } from "react-router-dom";
import { toIso } from "../utils/functions";

import "../assets/styles/transactionform.css";

function TransactionEdit() {
  const { transaction, categories, accounts } = useLoaderData();
  const errors = useActionData();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedType, setSelectedType] = useState(transaction.type || "");
  const [amount, setAmount] = useState(transaction.amount || "");
  const [date, setDate] = useState(toIso(transaction.date) || "");
  const [name, setName] = useState(transaction.name || "");
  const [selectedAccount, setSelectedAccount] = useState(
    transaction.account_name || ""
  );

  const actualCategory = categories?.find(
    (category) => category.icon_name === transaction.icon_name
  );

  const actualAccount = accounts?.find(
    (account) => account.name === transaction.account_name
  );

  useEffect(() => {
    setSelectedCategory(actualCategory?.id);
    setSelectedAccount(actualAccount?.id);
  }, [actualCategory, actualAccount]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Form method="put" className="transaction_label_form">
      <label className="transaction_account_label" htmlFor="account">
        Compte
      </label>
      <select
        className="transaction_account_select"
        name="account"
        id="account"
      >
        {accounts.map((account) => (
          <option key={account.id} value={selectedAccount}>
            {account.name}
          </option>
        ))}
      </select>

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
        step="0.01"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
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
        value={name}
        onChange={(event) => setName(event.target.value)}
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
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className="transaction_date_input"
      />

      <label className="transaction_type_label" htmlFor="type">
        Type
      </label>
      {errors?.TypeError && (
        <span className="error_message">{errors.TypeError}</span>
      )}
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
      <div className="categories_list">
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
      <button className="add_button transaction_edit_button" type="submit">
        Modifier
      </button>
    </Form>
  );
}

export default TransactionEdit;
