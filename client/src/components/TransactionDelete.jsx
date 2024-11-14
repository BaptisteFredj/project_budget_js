import { Form, Link } from "react-router-dom";

import "../assets/styles/transactiondelete.css";

function TransactionDelete() {
  return (
    <section className="warning_popover">
      <div className="warning_text">
        <h1 className="warning_h1">Êtes-vous sûr(e) ?</h1>
        <h2 className="warning_h2">Cette action ne peut être annulée.</h2>
      </div>
      <div className="warning_buttons">
        <Link to="/transactions?filter=date&value=past">
          <button className="warning_cancel" type="button">
            Annuler
          </button>
        </Link>
        <Form method="delete">
          <button className="warning_confirm" type="submit">
            Supprimer
          </button>
        </Form>
      </div>
    </section>
  );
}

export default TransactionDelete;
