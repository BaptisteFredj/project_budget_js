function nameValidator(name) {
  const specialCharacters = /[^A-Za-zÀ-ÿ0-9 ]/;
  const errors = {};

  if (!name) {
    errors.NameError =
      "Le nom ne peut pas être vide ou composé uniquement d'espaces. Les espaces en début et fin de nom ne comptent pas comme un caractère.";
  }
  if (name) {
    if (name.length > 100) {
      errors.NameError = "Nom trop long : maximum 100 caractères.";
    }
    if (name.length < 3) {
      errors.NameError =
        "Nom trop court : 3 caractères minimum. Les espaces en début et fin de nom ne comptent pas comme un caractère.";
    }
  }

  if (name.match(specialCharacters)) {
    errors.CharacterError =
      "Seulement les caractères alphanumériques sont autorisés.";
  }

  return errors;
}

export default function budgetFormValidator(formData) {
  const errors = {};
  Object.assign(errors, nameValidator(formData.name));

  if (Number(formData.amount) <= 0) {
    errors.AmountError = "Seul les nombres entiers positifs sont acceptés.";
  }

  if (new Date(formData.startDate) > new Date(formData.endDate)) {
    errors.DateError =
      "La date de démarrage d'un budget doit forcément être avant sa date de fin.";
  }

  return errors;
}
