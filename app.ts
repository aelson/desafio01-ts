import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

console.log("=== People Account ===")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log("peopleAccount.name:", peopleAccount.getName())
console.log("peopleAccount.getBalance():", peopleAccount.getBalance())
console.log("peopleAccount.deposit(1000)")
peopleAccount.deposit(1000)
console.log("peopleAccount.withdraw(190)")
peopleAccount.withdraw(190)
console.log("peopleAccount.getBalance():", peopleAccount.getBalance())

console.log("\n\n=== Company Account ===")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log("companyAccount.name:", companyAccount.getName())
console.log("companyAccount.getBalance():", companyAccount.getBalance())
console.log("companyAccount.deposit(500)")
companyAccount.deposit(500)
console.log("companyAccount.withdraw(245)")
companyAccount.withdraw(245)
console.log("companyAccount.getBalance():", companyAccount.getBalance())

console.log("\n\n=== Special Account ===")
const specialAccount: SpecialAccount = new SpecialAccount('VIP', 30)
console.log("specialAccount.name:", specialAccount.getName())
console.log("specialAccount.getBalance():", specialAccount.getBalance())
console.log("specialAccount.deposit(12390)")
specialAccount.deposit(12390)
console.log("specialAccount.withdraw(8743)")
specialAccount.withdraw(8743)
console.log("specialAccount.getBalance():", specialAccount.getBalance())
