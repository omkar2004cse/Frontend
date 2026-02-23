//take user input and check the number is divisible of 5 or not
num=Number(prompt("Enter a User input:-"))
if (num%5==0){
    console.log("Number is Divisible of 5")

}
else{
    console.log("Number is not divisible of 5")
}

let score=prompt("Enter a your Score:-")
if (score>=80 && score<=100){
    console.log("You get the A Grade")
}
else if (score<80 && score>=60){
    console.log("You get the B grade")
}
else if (score<60 && score>35){
    console.log("You Passs")
}
else{
    console.log("Fail")
}