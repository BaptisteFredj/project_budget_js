const nameValidator = async (name) => {
  const specialCharacters = /[^A-Za-zÀ-ÿ0-9 ]/;
  const trimmedName = name.trim();

  if (!trimmedName) {
    const error = new Error(
      "Le nom ne peut pas être vide ou composé uniquement d'espaces. Les espaces en début et fin de nom ne comptent pas comme un caractère."
    );
    error.name = "NameError";
    throw error;
  }

  if (trimmedName) {
    if (trimmedName.length > 100) {
      const error = new Error("Nom trop long : maximum 100 caractères.");
      error.name = "NameError";
      throw error;
    }
    if (trimmedName.length < 3) {
      const error = new Error(
        "Nom trop court : 3 caractères minimum. Les espaces en début et fin de nom ne comptent pas comme un caractère."
      );
      error.name = "NameError";
      throw error;
    }
  }

  if (trimmedName.match(specialCharacters)) {
    const error = new Error(
      "Seulement les caractères alphanumériques sont autorisés."
    );
    error.name = "CharacterError";
    throw error;
  }
};

const budgetFormValidator = async (req, res, next) => {
  const { name, amount, start_date: startDate, end_date: endDate } = req.body;

  try {
    await nameValidator(name);

    // At first, i add a "or" condition to check if input is an integer, but the form already does it
    if (Number(amount) <= 0) {
      const error = new Error(
        "Seul les nombres entiers positifs sont acceptés."
      );
      error.name = "AmountError";
      throw error;
    }

    if (new Date(startDate) > new Date(endDate)) {
      const error = new Error(
        "La date de démarrage d'un budget doit forcément être avant sa date de fin."
      );
      error.name = "DateError";
      throw error;
    }
    return next();
  } catch (error) {
    return res.json({ name: error.name, message: error.message });
  }
};

const transactionFormValidator = async (req, res, next) => {
  const { name, amount } = req.body;

  // Regex to allow positive numbers, forbid 0, allow up to 2 decimal places - more info below exports for clarity
  const validNumber = /^(?!0$)\d+(\.\d{1,2})?$/;

  try {
    await nameValidator(name);

    if (!amount.toString().match(validNumber)) {
      const error = new Error(
        "Seul les nombres positifs sont acceptés, jusqu'à 2 décimales."
      );
      error.name = "AmountError";
      throw error;
    }

    return next();
  } catch (error) {
    return res.json({ name: error.name, message: error.message });
  }
};

module.exports = {
  budgetFormValidator,
  transactionFormValidator,
};

// regex = /^(?!0$)\d+(\.\d{1,2})?$/;
// (?!0$) : forbid 0
// \d+ : the integer part of the number can have 1 or more digits
// (\.\d{1,2})? : allow decimal point followed by 1 or 2 digits (fractional part). The "?" means it's optional
// "^" means start of the string, and "$" the end of it
