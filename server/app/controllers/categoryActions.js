const tables = require("../../database/tables");

const readCategoriesByUser = async (req, res, next) => {
  try {
    const category = await tables.category.readCategoriesByUser(
      req.body.user_id
    );
    res.json(category);
  } catch (error) {
    next(error);
  }
};

const readCategoryById = async (req, res, next) => {
  try {
    const category = await tables.category.readCategoryById(
      req.params.id,
      req.body.user_id
    );
    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.category.create(req.body);
    res
      .status(201)
      .send(`Catégorie ajoutée avec succès. ID : ${result.insertId}`);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  req.body.id = req.params.id;
  try {
    await tables.category.update(req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.category.delete(req.params.id, req.body.user_id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { readCategoriesByUser, readCategoryById, add, edit, destroy };
