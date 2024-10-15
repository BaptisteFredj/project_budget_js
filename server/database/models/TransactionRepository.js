const AbstractRepository = require("./AbstractRepository");

class TransactionRepository extends AbstractRepository {
  constructor() {
    super({ table: "transaction" });
  }

  async readTransactionsByUser(userId) {
    const [rows] = await this.database.query(
      `SELECT 
        t.id,
        t.name,
        t.amount,
        DATE_FORMAT(t.date, '%d/%m/%Y') as date,
        t.type,
        c.name AS category_name
      FROM 
        ${this.table} t
      LEFT JOIN 
        category c ON t.category_id = c.id
      WHERE 
        t.user_id = ?`,
      [userId]
    );
    return rows;
  }

  async readTransactionById(transaction) {
    const [rows] = await this.database.query(
      `SELECT 
        t.id,    
        t.name,
        t.amount,
        DATE_FORMAT(t.date, '%d/%m/%Y') as date,
        t.type,
        c.name AS category_name
      FROM 
        ${this.table} t
      LEFT JOIN 
        category c ON t.category_id = c.id
      WHERE 
        t.id = ? AND t.user_id = ?`,
      [transaction.id, transaction.user_id]
    );
    return rows;
  }

  async create(transaction) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, date, amount, type, category_id, user_id) VALUES(?, ?, ?, ?, ?, ?)`,
      [
        transaction.name,
        transaction.date,
        transaction.amount,
        transaction.type,
        transaction.category_id,
        transaction.user_id,
      ]
    );
    return result;
  }

  async update(transaction) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET date = ?, amount = ?, type = ?, category_id = ? WHERE id = ? AND user_id = ?`,
      [
        transaction.date,
        transaction.amount,
        transaction.type,
        transaction.category_id,
        transaction.id,
        transaction.user_id,
      ]
    );
    return result.affectedRows;
  }

  async delete(transaction) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [transaction.id, transaction.user_id]
    );
    return result.affectedRows;
  }
}

module.exports = TransactionRepository;
