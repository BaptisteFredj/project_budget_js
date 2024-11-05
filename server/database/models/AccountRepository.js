const AbstractRepository = require("./AbstractRepository");

class AccountRepository extends AbstractRepository {
  constructor() {
    super({ table: "account" });
  }

  async readAccountsByUser(userId) {
    const [rows] = await this.database.query(
      ` SELECT a.id id, a.name name, a.amount amount
        FROM ${this.table} a
        WHERE user_id = ?`,
      [userId]
    );
    return rows;
  }

  async readAccountById(accountId, userId) {
    const [rows] = await this.database.query(
      ` SELECT a.id id, a.name name, a.amount amount
          FROM ${this.table} a
          WHERE a.id = ? AND a.user_id = ?`,
      [accountId, userId]
    );
    return rows[0];
  }

  async create(account) {
    const [result] = await this.database.query(
      ` INSERT INTO ${this.table} (name, amount, user_id)
          VALUES (?, ?, ?)`,
      [account.name, account.amount, account.user_id]
    );

    return result;
  }

  async delete(accountId, userId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ? AND user_id = ?`,
      [accountId, userId]
    );
    return result.affectedRows;
  }
}

module.exports = AccountRepository;
