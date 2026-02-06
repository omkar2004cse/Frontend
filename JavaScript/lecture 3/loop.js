//Loop 
console.log("*For Loop")
for(let i=1;i<=8;i++)
{
    console.log("Jay Shree Ram")
}
// calculate sum 1 to n
let num=prompt("Enter the nth number is:-")
sum=0
for(let i=1;i<=num;i++)
{
    sum=sum+i
}
console.log("Sum of 1 to",num,"is:-",sum)
// While loop
console.log("**While loop")
let i=1
while(i<=10)
{
    console.log(i)
    i++
}
// do While
console.log("***do While Loop")
console.log("Multiplication Table")
let a=1
table=2
do{
    t=table*a;
    console.log(t)
    a++
}while(a<=10);
// For of loop
console.log("****For Of Loop to String\nstring element :-")
st="Jay Hanuman"
size=0
for(let i of st)
{
    console.log(i)
    size++
}
console.log("Size of string is:-",size)

console.log("*****For of loop to Array\nelement of array:-")
arr=[1,2,3,4,5,'om',12.55];
size=0
for(let i=0;i<=6;i++)
{
    console.log(arr[i]);
    size++;
}
console.log("Size of array is:-",size)
// for in loop
console.log("*******For in Loop to Object data type in JavaScript is:-")
const student={
    s_name:"omkar",
    roll_no:14,
    address:"Amanapur",
    percentage:81.42
}
for(let i in student){
    console.log("key :-",i,"value:-",student[i])
}


