let message = prompt("How much money do you have for a new gaming laptop?");

if (message === null) {
    alert("You have cancelled the input");
    console.log(null);
} else {
    let money = parseInt(message);
    if (isNaN(money) || money < 0) {
        alert("Please enter a valid amount of money");
        console.log("Please enter a valid amount of money");
    } else if (money === 0) {
        alert("You have entered €0, which means you are broke :(");
        console.log("You have entered €0, which means you are broke :(");
    } else if (money <= 699 && money >= 0) {
        alert(`You have €${money}, which is not enough to buy a new gaming laptop`);
        console.log(`You have €${money}, which is not enough to buy a new gaming laptop`);
    } else {
        alert(`You have €${money}, which is enough to buy a new gaming laptop`);
        console.log(`You have €${money}, which is enough to buy a new gaming laptop`);
    }
}