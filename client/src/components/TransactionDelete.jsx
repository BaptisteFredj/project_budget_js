import { useEffect, useState } from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

import "../assets/styles/transactiondelete.css";

function TransactionDelete() {
  const { transaction, accounts } = useLoaderData();
  const [accountId, setAccountId] = useState("");

  const accountDetails = accounts?.find(
    (account) => account.name === transaction.account_name
  );

  useEffect(() => {
    setAccountId(accountDetails?.id);
  }, [accountDetails]);

  return (
    <section className="warning_popover">
      <div className="warning_text">
        <h1 className="warning_h1">Êtes-vous sûr(e) ?</h1>
        <h2 className="warning_h2">Cette action ne peut être annulée.</h2>
      </div>
      <div className="warning_buttons">
        <Link to="/transactions/">
          <button className="warning_cancel" type="button">
            Annuler
          </button>
        </Link>
        <Form method="delete">
          <input type="hidden" name="amount" value={transaction.amount} />
          <input type="hidden" name="account" value={accountId} />
          <input type="hidden" name="type" value={transaction.type} />
          <button className="warning_confirm" type="submit">
            Supprimer
          </button>
        </Form>
      </div>
    </section>
  );
}

export default TransactionDelete;
