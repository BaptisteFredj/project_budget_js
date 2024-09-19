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

export function standardDate(iso8601date) {
  return iso8601date.substring(0, 10);
}

export function frenchDate(iso8601date) {
  const date = iso8601date.substring(0, 10);
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}
