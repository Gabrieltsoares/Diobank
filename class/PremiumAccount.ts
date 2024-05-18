import { DioAccount } from "./DioAccount"

export class PremiumAccount extends DioAccount{

    constructor(name: string,  accountNumber: number){
        super(name, accountNumber)
      }

    deposit = (depositValue : number): void => {
        if(this.validateStatus()){
            this.balance += (depositValue + 10);
            console.log("Você recebeu R$10,00 de bônus no seu deposito")
        }
      }
}