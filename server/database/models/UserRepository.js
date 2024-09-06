const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
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

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, password, avatar) VALUES(?, ?, ?, ?)`,
      [user.username, user.email, user.password, user.avatar]
    );

    return result;
  }

  async update(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, email = ?, password = ?, avatar = ? WHERE id = ?`,
      [user.username, user.email, user.password, user.avatar, user.id]
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

module.exports = UserRepository;
