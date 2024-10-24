import { Form, useLoaderData, useActionData } from "react-router-dom";
import { toIso } from "../utils/functions";

function TransactionEdit() {
  const { transaction, categories } = useLoaderData();
  const errors = useActionData();

  const previousCategory = categories?.find(
    (category) => category.name === transaction.category_name
  );

  return (
    <>
      <h1>Modifier la transaction</h1>
      <Form method="put">
        <label htmlFor="name">Nom de la transaction</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={transaction.name}
        />
        {errors?.NameError}
        {errors?.CharacterError}

        <label htmlFor="amount">Montant de la transaction</label>
        <input
          type="number"
          id="amount"
          name="amount"
          step="0.01"
          defaultValue={transaction.amount}
        />
        {errors?.AmountError}

        <label htmlFor="date">Date de transaction</label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue={toIso(transaction.date)}
        />

        <label htmlFor="type">Type de transaction</label>
        <select id="type" name="type" defaultValue={transaction.type}>
          <option value="income">Revenu</option>
          <option value="expense">Dépense</option>
          <option value="transfer">Transfert</option>
        </select>

        <label htmlFor="category">Catégorie de transaction</label>
        <select
          id="category"
          name="category"
          defaultValue={previousCategory ? previousCategory.id : ""}
        >
          <option value="">Sans catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Modifier</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer cette transaction</button>
      </Form>
    </>
  );
}

export default TransactionEdit;
