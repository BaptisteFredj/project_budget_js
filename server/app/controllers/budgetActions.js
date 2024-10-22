const tables = require("../../database/tables");

const readBudgetsByUser = async (req, res, next) => {
  try {
    const budgets = await tables.budget.readBudgetsByUser(req.body.user_id);
    res.json(budgets);
  } catch (error) {
    next(error);
  }
};

const readBudgetById = async (req, res, next) => {
  req.body.id = req.params.id;
  try {
    const budget = await tables.budget.readBudgetById(req.body);
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
    const categoryBelongsToUser = await tables.category.readCategoryById({
      id: req.body.category_id,
      user_id: req.body.user_id,
    });

    if (categoryBelongsToUser) {
      const result = await tables.budget.create(req.body);
      res
        .status(201)
        .send(`Budget ajouté avec succès. ID : ${result.insertId}`);
    } else {
      res.status(404).send(`La catégorie n'existe pas.`);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  req.body.id = req.params.id;
  try {
    const categoryBelongsToUser = await tables.category.readCategoryById({
      id: req.body.category_id,
      user_id: req.body.user_id,
    });

    if (categoryBelongsToUser) {
      await tables.budget.update(req.body);
      res.sendStatus(204);
    } else {
      res.status(404).send(`La catégorie n'existe pas.`);
    }
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

module.exports = { readBudgetById, readBudgetsByUser, add, edit, destroy };
