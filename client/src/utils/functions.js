// Showing type in french
export default function frenchType(type) {
  if (type === "expense") {
    return "dépense";
  }

  if (type === "income") {
    return "revenu";
  }
  return "transfert";
}
