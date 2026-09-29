let monthlyBudget = Number(prompt("Enter your total monthly budget (KES): e.g 50000"));
let expenseName = prompt("Enter expense name: e.g Rent");
let expenseAmount = Number(prompt("Enter expense amount (KES): e.g 15000"));

let remainingBalance = monthlyBudget - expenseAmount;

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

console.log("=== SpendWise Budget Summary ===");
console.log(`Monthly Budget: KES ${monthlyBudget}`);
console.log(`Expense: ${expenseName} - KES ${expenseAmount}`);
console.log(`Remaining Balance: KES ${calculateBalance(monthlyBudget, expenseAmount)}`);
console.log(remainingBalance >= 0 ? "Status: Within Budget ✅" : "Status: Overspent ❌");