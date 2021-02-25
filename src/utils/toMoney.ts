export function toMoney(value: number | string): string {
  const formattedValue = Number(value);
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(formattedValue);
}
