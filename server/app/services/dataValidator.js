const budgetFormValidator = async (req, res, next) => {
  const formData = req.body;
  const specialCharacters = /[^a-zA-Z0-9 ]/g;

  try {
    if (formData.name.length > 100) {
      throw new Error("Nom trop long : maximum 100 caractères.");
    }
    if (formData.name.match(specialCharacters)) {
      throw new Error(
        "Seulement les caractères alphanumériques sont autorisés."
      );
    }
    // At first, i add a "or" condition to check if input is an integer, but the form already does it
    if (Number(formData.amount) <= 0) {
      throw new Error("Seul les nombres entiers positifs sont acceptés.");
    }
    if (new Date(formData.start_date) > new Date(formData.end_date)) {
      throw new Error(
        "La date de démarrage d'un budget doit forcément être avant sa date de fin."
      );
    }

    return next();
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = {
  budgetFormValidator,
};
