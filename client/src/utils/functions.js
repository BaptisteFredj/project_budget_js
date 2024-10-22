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
  const specialCharacters = /[^\p{L}0-9 ]/gu;

  if (formData.name.length > 100) {
    errors.NameError = "Nom trop long : maximum 100 caractères.";
  }

  if (formData.name.match(specialCharacters)) {
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
