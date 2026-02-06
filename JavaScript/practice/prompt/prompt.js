let num=prompt("Enter a Number:-")
if(num%5==0){
    console.log(num,"is Multiple of 5")
}
else{
    console.log(num,"is not Multiple of 5")
}
let mark=prompt("Enter a Your Mark:-");
if(mark<=100 && mark>=80){
    console.log("Grade is A")
}
else if(mark<=79 && mark>=60)
{
    console.log("Grade is B")
}
else if(mark>=35 && mark<=59)
{
    console.log("Grade is C")
}
else{
    console.log("Fail")
}