#! user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { number } from "@inquirer/prompts";

const Raandomnumber:number = Math.floor(10000 + Math.random() * 90000)
let myBalance:number = 12000;
const Question = await inquirer.prompt([
{
name:"q",
 type:"input",
   message:"Enter Your Name:",
    validate:function (value){
      if(value.trim() !== ""){
          return true;
          
      }
       else{
        return `please enter the valid name!`


       }

    },

     },
     {
        name:"courses",
         type:"list",
          message:"please select the course and inroll now",
           choices:['MS.OFFICE',"JAVASCRIPT","TYPESCRIPT","HTML","PYTHON"]


     }

]);

const tutionFee:{[key:string]:number} = {

"MS.OFFICE":2000,
"JAVASCRIPT":1000,
"TYPESCRIPT":4000,
"HTML":1500,
"PYTHON":3000,
};

console.log(chalk.blueBright(`\n TutionFee:${tutionFee[Question.courses]}`));

console.log(chalk.blueBright(`\n your balance is: ${myBalance}`));

const paymentmethod = await inquirer.prompt([
  {
  name:"payment",
   type:"rawlist",
     message:"please select the payment transfer",
      choices:["Bank Transfer","Easy Paisa","Jazz Cash"]
  
  },
  
  {
     name:"amount",
      type:"number",
       message:"please put the amount",
          }
  
  ]);
  console.log(chalk.greenBright(`you select payment method ${paymentmethod.payment}`))

let TutionFee = tutionFee[Question.courses]
let PaymentAmount = parseFloat(paymentmethod.amount)

if(TutionFee === PaymentAmount){
console.log(chalk.blueBright(`Congratulations! you are enroll now in ${Question.courses} courses`))

const AnsView = await inquirer.prompt([

{
name:"v",
 type:"list",
   message:"pleae select the view",
    choices:['View Status','Exit']


}
])
console.log(AnsView.v)
if(AnsView.v == "View Status"){
console.log(chalk.greenBright(`Student Name:${Question.q}`))
console.log(chalk.greenBright(`Student Balance:${myBalance === PaymentAmount}`))
console.log(chalk.blueBright(`Student ID:${Raandomnumber}`))
console.log(chalk.greenBright(`Student Course:${Question.courses}`))
console.log(chalk.blueBright(`Tution Fee Paid:${paymentmethod.amount}`))

}
}
else{

console.log(chalk.greenBright('Try again'))

}

setTimeout(() => {

console.log(chalk.blueBright("Ok Go Home"))},5000)































