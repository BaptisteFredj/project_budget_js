const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async readCategoriesByUser(userId) {
    const [rows] = await this.database.query(
      `
      SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
    return rows;
  }

  async readCategoryById(categoryId, userId) {
    const [rows] = await this.database.query(
      `
      SELECT * FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [categoryId, userId]
    );
    return rows[0];
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
      `UPDATE ${this.table} SET name = ?, icon = ? WHERE id = ? AND user_id = ?`,
      [category.name, category.icon, category.id, category.user_id]
    );
    return result.affectedRows;
  }

  async delete(categoryId, userId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [categoryId, userId]
    );
    return result.affectedRows;
  }
}

module.exports = CategoryRepository;
