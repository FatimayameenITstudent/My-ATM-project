#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "fastcash", "checkbalance"],
        },
    ]);
    //if user select withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`Your remaining balance is ${balance}`);
        }
        else {
            console.log(`You have insufficient balance`);
        }
    }
    // if user select fast cash
    else if (operationAns.operation === "fastcash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (fastcashAns.amount <= myBalance) {
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`Your remaining balance is${balance2}`);
        }
        else {
            console.log(`You have insufficient amount`);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(myBalance);
    }
}
else {
    console.log("your pin is incorrect");
}
