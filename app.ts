import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('Gabriel', 11)
const premiumAccount: PremiumAccount = new PremiumAccount('Joao', 12)
peopleAccount.deposit(50)
peopleAccount.withdraw(20)
peopleAccount.getBalance()
companyAccount.getLoan(10000)
companyAccount.getBalance()
premiumAccount.deposit(500)
premiumAccount.withdraw(100)
premiumAccount.getBalance()