//print off even and odd number from 1 to 100
for (let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

// number guessing game 
game_num=87
user_num=prompt("Enter a Your Number:-")
while(user_num!=game_num){
    user_num=prompt("Your Guess is Wrong. Please Enter a Number:-")
}
console.log("Your Guess is Correct.")