const tables = require("../../database/tables");

const readTransactionsByUser = async (req, res, next) => {
  const { dateFilter } = req.query;
  try {
    const transactions = await tables.transaction.readTransactionsByUser(
      req.body.user_id,
      dateFilter
    );
    res.json(transactions);
  } catch (error) {
    next(error);
  }
};

const readTransactionById = async (req, res, next) => {
  try {
    const transaction = await tables.transaction.readTransactionById(
      req.params.id,
      req.body.user_id
    );
    if (transaction == null) {
      res.sendStatus(404);
    } else {
      res.json(transaction);
    }
  } catch (error) {
    next(error);
  }
};

const expensesAmount = async (req, res, next) => {
  try {
    const amount = await tables.transaction.expensesAmount(
      req.body.user_id,
      req.params.periodFilter
    );
    res.json(amount);
  } catch (error) {
    next(error);
  }
};

const categoryExpensesAmount = async (req, res, next) => {
  try {
    const amount = await tables.transaction.categoryExpensesAmount(
      req.body.user_id,
      req.params.periodFilter
    );
    res.json(amount);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.transaction.create(req.body);
    res
      .status(201)
      .send(`Transaction ajoutée avec succès. ID : ${result.insertId}`);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  req.body.id = req.params.id;
  try {
    await tables.transaction.update(req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.transaction.delete(req.params.id, req.body.user_id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  readTransactionById,
  readTransactionsByUser,
  expensesAmount,
  categoryExpensesAmount,
  add,
  edit,
  destroy,
};
