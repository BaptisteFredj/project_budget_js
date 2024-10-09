const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readByUserId(userId) {
    const [rows] = await this.database.query(
      `
      SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
    return rows;
  }

  async readByCategoryId(categoryId) {
    const [rows] = await this.database.query(
      `
      SELECT * FROM ${this.table} WHERE id = ?`,
      [categoryId]
    );
    return rows;
  }

  async create(category) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, icon, user_id) VALUES(?, ?, ?)`,
      [category.name, category.icon, category.user_id]
    );

    return result;
  }

  async update(category) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, icon = ? WHERE id = ?`,
      [category.name, category.icon, category.id]
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

module.exports = CategoryRepository;
