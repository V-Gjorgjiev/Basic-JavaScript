let accountMoney = 1000;

function withdraw(amount) {
    if (Number.isNaN(amount)) {
        alert('Please enter a valid amount')
        let newWithdrawnAmount = parseInt(prompt('Enter the amount you want to withdraw in numbers'));
       return withdraw(newWithdrawnAmount);
    } else if (amount > accountMoney) {
        alert('Not enough cash');
        let newWithdrawnAmount = parseInt(prompt('Please enter an amount thats lower'));
       return withdraw(newWithdrawnAmount);
    } else {
        accountMoney -= amount;
        return `You withdrew ${amount}. Your remaining balance is ${accountMoney}`;
    }
}

let withdrawnAmount = parseInt(prompt('Enter the amount you want to withdraw:'));
let moneyLeft = withdraw(withdrawnAmount);
alert(moneyLeft);