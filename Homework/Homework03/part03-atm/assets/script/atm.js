let withdrawnAmount = parseInt(prompt('Enter the amount you want to withdraw:'));
let accountMoney = 1000;

function withdraw(amount) {
    if (Number.isNaN(amount)) {
        alert('Please enter a valid amount')
    } else if (amount > accountMoney) {
        return 'Not enough cash';
    } else {
        accountMoney -= amount;
        return `You withdrew ${amount}. Your remaining balance is ${accountMoney}`;
    }
}

let moneyLeft = withdraw(withdrawnAmount);
alert(moneyLeft);