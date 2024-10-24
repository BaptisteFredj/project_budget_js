import { Form, useLoaderData, useActionData } from "react-router-dom";

function TransactionForm() {
  const { categories } = useLoaderData();
  const errors = useActionData();

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
        {errors?.NameError}
        {errors?.CharacterError}

        <label htmlFor="amount">Montant de la transaction</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Montant"
          step="0.01"
        />
        {errors?.AmountError}

        <label htmlFor="date">Date de transaction</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Date de la transaction"
        />

        <label htmlFor="type">Type de transaction</label>
        <select id="type" name="type">
          <option value="income">Revenu</option>
          <option value="expense">Dépense</option>
          <option value="transfer">Transfert</option>
        </select>

        <label htmlFor="category">Catégorie de transaction</label>
        <select id="category" name="category">
          <option value="">Sans catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Ajouter</button>
      </Form>
    </>
  );
}

export default TransactionForm;
