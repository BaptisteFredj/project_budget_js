import { Form } from "react-router-dom";

function TransactionForm() {
  return (
    <>
      <h1>Ajouter une transaction</h1>
      <Form method="post">
        <label htmlFor="name">Nom de la transaction</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom de la transaction"
        />
      </Form>
    </>
  );
}

export default TransactionForm;
