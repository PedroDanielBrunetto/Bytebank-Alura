export function ValidaDebito(
  target: any,
  property: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (valorDoDebito: number) {
    if (valorDoDebito <= 0)
      throw new Error("O valor do débito deve ser maior que zero");

    if (valorDoDebito >= this.saldo)
      throw new Error("Seu saldo é insuficiente para realizar o débito");

    return originalMethod.aplly(this, [valorDoDebito]);
  };

  return descriptor;
}

export function ValidaDeposito(
  target: any,
  property: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (valorDoDeposito: number) {
    if (valorDoDeposito <= 0) {
      throw new Error("O valor a ser depositado deve ser maior que zero!");
    }

    return originalMethod.aplly(this, [valorDoDeposito]);
  };

  return descriptor;
}
