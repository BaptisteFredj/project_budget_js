const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const icons = await tables.icon.browse();
    res.json(icons);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse };
