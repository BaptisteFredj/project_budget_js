const AbstractRepository = require("./AbstractRepository");

class TransactionRepository extends AbstractRepository {
  constructor() {
    super({ table: "transaction" });
  }

  async readTransactionsByUser(userId, dateFilter) {
    let queryFilter = "";
    if (dateFilter === "past") {
      queryFilter = `AND t.date <= CURDATE() ORDER BY t.date DESC`;
    }
    if (dateFilter === "future") {
      queryFilter = `AND t.date > CURDATE() ORDER BY t.date ASC`;
    }

    const [rows] = await this.database.query(
      `SELECT 
        t.id,
        t.name,
        t.amount,
        DATE_FORMAT(t.date, '%d/%m/%Y') as date,
        c.name AS category_name,
        i.name AS icon_name
      FROM 
        ${this.table} t
      LEFT JOIN 
        category c ON t.category_id = c.id
      LEFT JOIN
        icon i ON c.icon_id = i.id
      WHERE t.user_id = ? ${queryFilter}`,
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
        c.name AS category_name,
        i.name AS icon_name
      FROM 
        ${this.table} t
      LEFT JOIN 
        category c ON t.category_id = c.id
      LEFT JOIN
        icon i ON c.icon_id = i.id
      WHERE 
        t.id = ? AND t.user_id = ?`,
      [transactionId, userId]
    );
    return rows[0];
  }

  async expensesAmount(userId, periodFilter) {
    let queryFilter = "";
    if (periodFilter === "day") {
      queryFilter = `AND DATE(t.date) = CURDATE()`;
    }
    if (periodFilter === "week") {
      queryFilter = `AND WEEK(t.date, 1) = WEEK(CURDATE(), 1)
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (periodFilter === "month") {
      queryFilter = `AND MONTH(t.date) = MONTH(CURDATE())
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (periodFilter === "year") {
      queryFilter = `AND YEAR(t.date) = YEAR(CURDATE())`;
    }

    const [rows] = await this.database.query(
      `SELECT SUM(amount) expenses_amount
       FROM ${this.table} t
       WHERE t.user_id = ? ${queryFilter}`,
      [userId]
    );
    return rows[0].expenses_amount;
  }

  async categoryExpensesAmount(userId, periodFilter) {
    let queryFilter = "";
    if (periodFilter === "day") {
      queryFilter = `AND DATE(t.date) = CURDATE()`;
    }
    if (periodFilter === "week") {
      queryFilter = `AND WEEK(t.date, 1) = WEEK(CURDATE(), 1)
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (periodFilter === "month") {
      queryFilter = `AND MONTH(t.date) = MONTH(CURDATE())
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (periodFilter === "year") {
      queryFilter = `AND YEAR(t.date) = YEAR(CURDATE())`;
    }

    const [rows] = await this.database.query(
      `SELECT c.name, SUM(t.amount) category_amount, c.id
       FROM ${this.table} t
       LEFT JOIN
       category c ON t.category_id = c.id
       WHERE t.user_id = ? ${queryFilter}
       GROUP BY c.name, c.id`,
      [userId]
    );
    return rows;
  }

  async create(transaction) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, date, amount, category_id, user_id) VALUES(?, ?, ?, ?, ?)`,
      [
        transaction.name,
        transaction.date,
        transaction.amount,
        transaction.category_id,
        transaction.user_id,
      ]
    );
    return result;
  }

  async update(transaction) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, date = ?, amount = ?, category_id = ? WHERE id = ? AND user_id = ?`,
      [
        transaction.name,
        transaction.date,
        transaction.amount,
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
