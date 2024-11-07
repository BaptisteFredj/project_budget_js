import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

import "../assets/styles/accountform.css";

export default function AccountEdit() {
  const { account } = useLoaderData();
  const [amount, setAmount] = useState(account.amount || "");
  const [name, setName] = useState(account.name || "");

  return (
    <Form method="post" className="account_label_form">
      <label className="account_name_label" htmlFor="name">
        Nom
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nom du compte"
        required
        value={name}
        className="account_name_input"
        onChange={(event) => setName(event.target.value)}
      />

      <label className="account_amount_label" htmlFor="amount">
        Montant
      </label>
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Exemple : 1200 €"
        step="0.01"
        className="account_amount_input"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <button className="add_button account_form_button" type="submit">
        Modifier le compte
      </button>
    </Form>
  );
}
