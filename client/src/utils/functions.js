export function toIso(europeanDate) {
  const [day, month, year] = europeanDate.split("/");
  return `${year}-${month}-${day}`;
}

export function formattedNumber(number) {
  return new Intl.NumberFormat("fr-FR").format(number);
}
