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

  async create(account) {
    const [result] = await this.database.query(
      ` INSERT INTO ${this.table} (name, amount)
          VALUES (?, ?)`,
      [account.name, account.amount]
    );

    return result;
  }
}

module.exports = AccountRepository;
