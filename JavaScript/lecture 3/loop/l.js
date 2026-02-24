// print 1 to 5 "Welcome in Coding"
for(let i=1;i<=5;i++){
    console.log("Welcome in Coding...")
}

// print sum of 1 to n number sum
let num=prompt("Enter a number to calculate the sum:-");
let sum=0;
for(let j=1;j<=num;j++){
    sum=sum+j;
}
console.log("sum of all number is:-",sum)

// while loop
j=1
while(j<=num){
    console.log(j)
    j++
}

// for in loop  --- object
obj={
    name:"omkar",
    roll_no:59,
    address:"Palus",
    
}
for (let k in obj){
    console.log("key",k," values:-",obj[k])
}

// for of loop in string and array
st="omkar jadhav"
for(let m of st){
    console.log(m)
}