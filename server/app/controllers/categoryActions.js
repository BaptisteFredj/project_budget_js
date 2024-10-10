const tables = require("../../database/tables");

const readByUserId = async (req, res, next) => {
  try {
    console.info("req body cat Act", req.body);
    if (!req.body.user_id) {
      res.sendStatus(404);
    }
    const category = await tables.category.readByUserId(req.body.user_id);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

const readByCategoryId = async (req, res, next) => {
  try {
    const category = await tables.category.readByCategoryId(req.params.id);
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
  req.body.user_id = req.auth.sub;
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

module.exports = { readByCategoryId, readByUserId, add, edit, destroy };
