#! /usr/bin/env node
import inquirer from "inquirer"

const  currencies:any  = {
    USD: 1, //Based currency
    EUR: 0.91,
    INR:74.57,
    DINAR: 0.76,
    PKR: 280,
};    



let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "enter from currency",
            type: "list",
            choices: ["USD" ,"EUR", "INR" , "DINAR" , "PKR" ]
        },
        {
            name: "to",
            message: "enter to currency",
            type: "list",
            choices: ["USD" ,"EUR", "INR" , "DINAR" , "PKR", ]
        },
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]
)

let fromAmount = currencies[user_answer.from]
let toAmount = currencies[user_answer.to]
let Amount = user_answer.amount
let baseAmount = Amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)

