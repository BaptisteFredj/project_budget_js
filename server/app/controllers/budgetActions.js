const tables = require("../../database/tables");

const readBudgetsByUser = async (req, res, next) => {
  try {
    const budgets = await tables.budget.readBudgetsByUser(req.body.user_id);
    res.json(budgets);
  } catch (error) {
    next(error);
  }
};

const readBudgetsById = async (req, res, next) => {
  req.body.id = req.params.id;
  try {
    const budget = await tables.budget.readBudgetsById(req.body);
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
  req.body.id = req.params.id;
  try {
    await tables.budget.update(req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  req.body.id = req.params.id;
  try {
    await tables.budget.delete(req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { readBudgetsById, readBudgetsByUser, add, edit, destroy };
