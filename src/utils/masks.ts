export function maskCPF(value: string): string {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d{3})(\d)/g, '$1.$2.$3');
  value = value.replace(/(\d)(\d{2})$/, '$1-$2');
  return value;
}
