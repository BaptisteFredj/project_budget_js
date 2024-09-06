const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const transactions = await tables.transaction.readAll();
    res.json(transactions);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const transaction = await tables.transaction.read(req.params.id);
    if (transaction == null) {
      res.sendStatus(404);
    } else {
      res.json(transaction);
    }
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
  const transaction = { ...req.body, id: req.params.id };
  try {
    await tables.transaction.update(transaction);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.transaction.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add, edit, destroy };
