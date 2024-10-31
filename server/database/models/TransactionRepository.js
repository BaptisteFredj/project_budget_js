const AbstractRepository = require("./AbstractRepository");

class TransactionRepository extends AbstractRepository {
  constructor() {
    super({ table: "transaction" });
  }

  async readTransactionsByUser(userId, dateFilter) {
    let queryFilter = "";
    if (dateFilter === "past") {
      queryFilter = ` AND t.date <= CURDATE() ORDER BY t.date DESC`;
    }
    if (dateFilter === "future") {
      queryFilter = ` AND t.date > CURDATE() ORDER BY t.date ASC`;
    }

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
      WHERE t.user_id = ?${queryFilter}`,
      [userId]
    );
    return rows;
  }

  async readTransactionById(transactionId, userId) {
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
      [transactionId, userId]
    );
    return rows[0];
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
      `UPDATE ${this.table} SET name = ?, date = ?, amount = ?, type = ?, category_id = ? WHERE id = ? AND user_id = ?`,
      [
        transaction.name,
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

  async delete(transactionId, userId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [transactionId, userId]
    );
    return result.affectedRows;
  }
}

module.exports = TransactionRepository;
