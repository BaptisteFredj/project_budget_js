const AbstractRepository = require("./AbstractRepository");

class AccountRepository extends AbstractRepository {
  constructor() {
    super({ table: "account" });
  }
}

module.exports = AccountRepository;
