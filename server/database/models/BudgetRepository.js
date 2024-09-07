const AbstractRepository = require("./AbstractRepository");

class BudgetRepository extends AbstractRepository {
  constructor() {
    super({ table: "budget" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT 
  budget.id,
  budget.name,
  budget.amount,
  budget.start_date,
  budget.end_date,
  category.name AS category_name
FROM 
  ${this.table}
JOIN 
  category ON budget.category_id = category.id;
`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT 
  budget.name,
  budget.amount,
  budget.start_date,
  budget.end_date,
  category.name AS category_name
FROM 
  ${this.table}
JOIN 
  category ON budget.category_id = category.id
WHERE
  budget.id = ?;
`,
      [id]
    );
    console.info(rows[0]);
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
