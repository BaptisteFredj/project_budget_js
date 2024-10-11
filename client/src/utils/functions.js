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
