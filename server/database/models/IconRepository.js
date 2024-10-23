const AbstractRepository = require("./AbstractRepository");

class IconRepository extends AbstractRepository {
  constructor() {
    super({ table: "icon" });
  }

  async browse() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = IconRepository;
