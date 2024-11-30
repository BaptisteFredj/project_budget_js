const AbstractRepository = require("./AbstractRepository");

class BudgetRepository extends AbstractRepository {
  constructor() {
    super({ table: "budget" });
  }

  async readBudgetsByUser(userId) {
    const [rows] = await this.database.query(
      `SELECT 
        b.id,
        c.name AS category_name,
        COALESCE(SUM(t.amount), 0) AS category_sum,
        b.amount,
        DATE_FORMAT(b.start_date, '%d/%m/%Y') as start_date,
        DATE_FORMAT(b.end_date, '%d/%m/%Y') as end_date
      FROM 
        ${this.table} b
      INNER JOIN 
        category c ON b.category_id = c.id
      LEFT JOIN 
        transaction t ON t.category_id = c.id
        AND t.date BETWEEN b.start_date AND b.end_date
      WHERE 
        b.user_id = ?
      GROUP BY 
        b.id, c.name, b.amount, b.start_date, b.end_date`,
      [userId]
    );
    return rows;
  }

  async readBudgetById(budgetId, userId) {
    const [rows] = await this.database.query(
      `SELECT 
        b.id,
        b.amount,
        DATE_FORMAT(b.start_date, '%d/%m/%Y') as start_date,
        DATE_FORMAT(b.end_date, '%d/%m/%Y') as end_date,
        c.name AS category_name
      FROM 
        ${this.table} b
      INNER JOIN 
        category c ON b.category_id = c.id
      WHERE 
        b.id = ? AND b.user_id = ?`,
      [budgetId, userId]
    );
    return rows[0];
  }

  async;

  async create(budget) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (amount, start_date, end_date, category_id, user_id ) VALUES(?, ?, ?, ?, ?)`,
      [
        budget.amount,
        budget.start_date,
        budget.end_date,
        budget.category_id,
        budget.user_id,
      ]
    );

    return result;
  }

  async update(budget) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET amount = ?, start_date = ?, end_date = ?, category_id = ? WHERE id = ? AND user_id = ?`,
      [
        budget.amount,
        budget.start_date,
        budget.end_date,
        budget.category_id,
        budget.id,
        budget.user_id,
      ]
    );
    return result.affectedRows;
  }

  async delete(budgetId, userId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [budgetId, userId]
    );
    return result.affectedRows;
  }
}

module.exports = BudgetRepository;
