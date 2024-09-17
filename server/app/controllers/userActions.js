const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  req.body.created_at = new Date();
  try {
    const result = await tables.user.create(req.body);
    res
      .status(201)
      .send(`Utilisateur ajouté avec succès. ID : ${result.insertId}`);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const user = { ...req.body, id: req.params.id };
  try {
    await tables.user.update(user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.user.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, add, edit, destroy };
