const AbstractRepository = require("./AbstractRepository");

class TransactionRepository extends AbstractRepository {
  constructor() {
    super({ table: "transaction" });
  }

  async readTransactionsByUser(userId, date, limit) {
    let limitFilter = "";
    let periodFilter = "";

    if (date === "past") {
      periodFilter = `AND t.date <= CURDATE() ORDER BY t.date DESC`;
    }
    if (date === "future") {
      periodFilter = `AND t.date > CURDATE() ORDER BY t.date ASC`;
    }

    if (limit === "10") {
      limitFilter = ` LIMIT 10`;
    }

    if (limit === "none") {
      limitFilter = "";
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
      WHERE t.user_id = ? ${periodFilter}${limitFilter}`,
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

  async transactionsTotalSum(userId, period) {
    let periodFilter = "";
    if (period === "day") {
      periodFilter = `AND DATE(t.date) = CURDATE()`;
    }
    if (period === "week") {
      periodFilter = `AND WEEK(t.date, 1) = WEEK(CURDATE(), 1)
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (period === "month") {
      periodFilter = `AND MONTH(t.date) = MONTH(CURDATE())
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (period === "year") {
      periodFilter = `AND YEAR(t.date) = YEAR(CURDATE())`;
    }

    const [rows] = await this.database.query(
      `SELECT SUM(amount) total_sum
       FROM ${this.table} t
       WHERE t.user_id = ? ${periodFilter}`,
      [userId]
    );
    return rows[0].total_sum;
  }

  async categoriesTransactionsTotalSum(userId, period) {
    let periodFilter = "";
    if (period === "day") {
      periodFilter = `AND DATE(t.date) = CURDATE()`;
    }
    if (period === "week") {
      periodFilter = `AND WEEK(t.date, 1) = WEEK(CURDATE(), 1)
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (period === "month") {
      periodFilter = `AND MONTH(t.date) = MONTH(CURDATE())
      AND YEAR(t.date) = YEAR(CURDATE())`;
    }
    if (period === "year") {
      periodFilter = `AND YEAR(t.date) = YEAR(CURDATE())`;
    }

    const [rows] = await this.database.query(
      `SELECT c.name, SUM(t.amount) category_amount, c.id
       FROM ${this.table} t
       LEFT JOIN
       category c ON t.category_id = c.id
       WHERE t.user_id = ? ${periodFilter}
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
