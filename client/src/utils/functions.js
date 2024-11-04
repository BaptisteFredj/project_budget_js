// Showing type in french
export function frenchType(type) {
  if (type === "expense") {
    return "Dépense";
  }

  if (type === "income") {
    return "Revenu";
  }
  return "Transfert";
}

export function toIso(europeanDate) {
  const [day, month, year] = europeanDate.split("/");
  return `${year}-${month}-${day}`;
}
