const tables = require("../../database/tables");

const readAccountsByUser = async (req, res, next) => {
  try {
    const accounts = await tables.account.readAccountsByUser(req.body.user_id);
    res.json(accounts);
  } catch (error) {
    next(error);
  }
};

const readAccountById = async (req, res, next) => {
  try {
    const account = await tables.account.readAccountById(
      req.params.id,
      req.body.user_id
    );
    if (account == null) {
      res.sendStatus(404);
    } else {
      res.json(account);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const result = await tables.account.create(req.body);
    res.status(201).send(`Compte créé avec succès. ID : ${result.insertId}`);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  req.body.id = req.params.id;
  try {
    await tables.account.update(req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.account.delete(req.params.id, req.body.user_id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { readAccountById, readAccountsByUser, add, edit, destroy };
