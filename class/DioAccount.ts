export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue : number): void => {
    if(this.validateStatus()){
        this.balance += depositValue;
    }
  }

  withdraw = (withdrawValue : number): void => {
    if(this.validateStatus() && this.balance >= withdrawValue){
      this.balance -= withdrawValue
      console.log(`Saque de R$${withdrawValue} realizado.`)
    }else{
      console.log("Saldo insuficiente, saque negado.")
    }
  }

  getBalance = (): number => {
    console.log(`O saldo da conta é: R$${this.balance}`);
    return this.balance;
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
