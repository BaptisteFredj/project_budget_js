import { Form, Link } from "react-router-dom";

function TransactionDelete() {
  return (
    <Form method="delete">
      <Link to="/transactions/">
        <button type="button">Annuler</button>
      </Link>
      <button type="submit">Supprimer</button>
    </Form>
  );
}

export default TransactionDelete;
