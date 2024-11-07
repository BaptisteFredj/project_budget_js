import { Form } from "react-router-dom";

import "../assets/styles/accountform.css";

export default function AccountForm() {
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
        className="account_name_input"
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
      />
      <button className="add_button account_form_button" type="submit">
        Créer le compte
      </button>
    </Form>
  );
}
