const AbstractRepository = require("./AbstractRepository");

class TransactionRepository extends AbstractRepository {
  constructor() {
    super({ table: "transaction" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT 
  transaction.id,
  transaction.name,
  transaction.amount,
  transaction.date,
  transaction.type,
  category.name AS category_name
FROM 
  ${this.table}
LEFT JOIN 
  category ON transaction.category_id = category.id;
`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT 
  transaction.name,
  transaction.amount,
  transaction.date,
  transaction.type,
  category.name AS category_name
FROM 
  ${this.table}
JOIN 
  category ON transaction.category_id = category.id
  WHERE transaction.id = ?;`,
      [id]
    );
    return rows[0];
  }

  async create(transaction) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, date, amount, type, category_id) VALUES(?, ?, ?, ?, ?)`,
      [
        transaction.name,
        transaction.date,
        transaction.amount,
        transaction.type,
        transaction.category_id,
      ]
    );
    console.info(result);
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
