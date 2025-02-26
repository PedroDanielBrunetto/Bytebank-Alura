export function ValidaDebito(target, property, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0)
            throw new Error("O valor do débito deve ser maior que zero");
        if (valorDoDebito >= this.saldo)
            throw new Error("Seu saldo é insuficiente para realizar o débito");
        return originalMethod.aplly(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaDeposito(target, property, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        return originalMethod.aplly(this, [valorDoDeposito]);
    };
    return descriptor;
}
