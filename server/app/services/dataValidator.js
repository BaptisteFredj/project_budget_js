const budgetFormValidator = async (req, res, next) => {
  const formData = req.body;
  const specialCharacters = /[^A-Za-zÀ-ÿ0-9 ]/;

  try {
    if (!formData.name) {
      const error = new Error(
        "Le nom ne peut pas être vide ou composé uniquement d'espaces. Les espaces en début et fin de nom ne comptent pas comme un caractère."
      );
      error.name = "NameError";
    }

    if (formData.name) {
      if (formData.name.length > 100) {
        const error = new Error("Nom trop long : maximum 100 caractères.");
        error.name = "NameError";
        throw error;
      }
      if (formData.name.length < 3) {
        const error = new Error(
          "Nom trop court : 3 caractères minimum. Les espaces en début et fin de nom ne comptent pas comme un caractère."
        );
        error.name = "NameError";
      }
    }

    if (formData.name.match(specialCharacters)) {
      const error = new Error(
        "Seulement les caractères alphanumériques sont autorisés."
      );
      error.name = "CharacterError";
      throw error;
    }

    // At first, i add a "or" condition to check if input is an integer, but the form already does it
    if (Number(formData.amount) <= 0) {
      const error = new Error(
        "Seul les nombres entiers positifs sont acceptés."
      );
      error.name = "AmountError";
      throw error;
    }

    if (new Date(formData.start_date) > new Date(formData.end_date)) {
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

module.exports = {
  budgetFormValidator,
};
