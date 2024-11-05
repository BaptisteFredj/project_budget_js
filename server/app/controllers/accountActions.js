const tables = require("../../database/tables");

const readAccountsByUser = async (req, res, next) => {
  try {
    const accounts = await tables.account.readAccountsByUser(req.body.user_id);
    res.json(accounts);
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

module.exports = { readAccountsByUser, add };
