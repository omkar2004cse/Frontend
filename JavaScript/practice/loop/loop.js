// Practice Question 1 print even number between 0 to 100 
console.log("Even number from 0 to 100")
for(let i=0;i<=100;i++)
{
    if(i%2==0){
        console.log(i);
    }
}
// Practice 2 Game of Guess Number
number=8
let user_input=prompt("Guess The Number is:-")
while(number!=user_input){
    user_input=prompt("You Entered Wrong Number. Please Try Again:-")
}
console.log("Congratulation You Win")