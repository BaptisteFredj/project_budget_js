const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const category = await tables.category.read(req.params.id);
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
  const category = { ...req.body, id: req.params.id };
  try {
    await tables.category.update(category);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.category.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add, edit, destroy };
