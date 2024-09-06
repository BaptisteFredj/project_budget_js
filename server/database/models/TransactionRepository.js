const AbstractRepository = require("./AbstractRepository");

class TransactionRepository extends AbstractRepository {
  constructor() {
    super({ table: "transaction" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `
      select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async create(transaction) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (date, amount, type, category_id) VALUES(?, ?, ?, ?)`,
      [
        transaction.date,
        transaction.amount,
        transaction.type,
        transaction.category_id,
      ]
    );

    return result;
  }

  async update(transaction) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET date = ?, amount = ?, type = ?, category_id = ? WHERE id = ?`,
      [
        transaction.date,
        transaction.amount,
        transaction.type,
        transaction.category_id,
        transaction.id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = TransactionRepository;
