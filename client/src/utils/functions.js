export function toIso(europeanDate) {
  const [day, month, year] = europeanDate.split("/");
  return `${year}-${month}-${day}`;
}

export function formattedNumber(number) {
  return new Intl.NumberFormat("fr-FR").format(number);
}

export function computePercentage(amount, totalAmount) {
  if (amount === 0 || totalAmount === 0) {
    return 0;
  }

  return ((amount / totalAmount) * 100).toFixed(1);
}
