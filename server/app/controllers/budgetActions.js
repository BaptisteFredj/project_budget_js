const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const budgets = await tables.budget.readAll();
    res.json(budgets);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const budget = await tables.budget.read(req.params.id);
    if (budget == null) {
      res.sendStatus(404);
    } else {
      res.json(budget);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.budget.create(req.body);
    res.status(201).send(`Budget ajouté avec succès. ID : ${result.insertId}`);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const budget = { ...req.body, id: req.params.id };
  try {
    await tables.budget.update(budget);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.budget.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add, edit, destroy };
