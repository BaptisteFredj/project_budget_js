const AbstractRepository = require("./AbstractRepository");

class BudgetRepository extends AbstractRepository {
  constructor() {
    super({ table: "budget" });
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

  async create(budget) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, amount, start_date, end_date, category_id, user_id ) VALUES(?, ?, ?, ?, ?, ?)`,
      [
        budget.name,
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
      `UPDATE ${this.table} SET name = ?, amount = ?, start_date = ?, end_date = ?, category_id = ? WHERE id = ?`,
      [
        budget.name,
        budget.amount,
        budget.start_date,
        budget.end_date,
        budget.category_id,
        budget.id,
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

module.exports = BudgetRepository;
