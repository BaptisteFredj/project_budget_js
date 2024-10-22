// Showing type in french
export function frenchType(type) {
  if (type === "expense") {
    return "dépense";
  }

  if (type === "income") {
    return "revenu";
  }
  return "transfert";
}

export function toIso(europeanDate) {
  const [day, month, year] = europeanDate.split("/");
  return `${year}-${month}-${day}`;
}

export function budgetFormValidator(formData) {
  const errors = {};
  const specialCharacters = /[^A-Za-zÀ-ÿ0-9 ]/;
  const trimmedName = formData.name.trim();

  if (!trimmedName.length) {
    errors.NameError =
      "Le nom ne peut pas être vide ou composé uniquement d'espaces. Les espaces en début et fin de nom ne comptent pas comme un caractère.";
  }
  if (trimmedName) {
    if (trimmedName.length > 100) {
      errors.NameError = "Nom trop long : maximum 100 caractères.";
    }
    if (trimmedName.length < 3) {
      errors.NameError =
        "Nom trop court : 3 caractères minimum. Les espaces en début et fin de nom ne comptent pas comme un caractère.";
    }
  }

  if (trimmedName.match(specialCharacters)) {
    errors.CharacterError =
      "Seulement les caractères alphanumériques sont autorisés.";
  }

  if (Number(formData.amount) <= 0) {
    errors.AmountError = "Seul les nombres entiers positifs sont acceptés.";
  }

  if (new Date(formData.startDate) > new Date(formData.endDate)) {
    errors.DateError =
      "La date de démarrage d'un budget doit forcément être avant sa date de fin.";
  }

  return errors;
}
