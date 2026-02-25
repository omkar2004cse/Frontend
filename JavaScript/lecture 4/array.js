// let x=prompt("What is Your Name:-")
// console.log(x)
// let arr=[12,13,14,15]
// console.log("Array is:-",arr)
// arr[1]=25
// console.log("Array are Mutable in JavaScript:-",arr)
// console.log("Length of array is:-",arr.length)
let arr=[]
let size=prompt("Enter a Size of Array:-")
for(let i=0;i<size;i++)
{
   arr[i]=prompt("Enter a Array Element of index",i) 
}
console.log(arr)
console.log("Array length:-",arr.length)
console.log("Type is:-",typeof(arr))
console.log("Array Elements:-")
for(let j of arr)
{
   console.log(j)
}

// array is support to the index
// array of js is mutable
arr[2]=87
console.log(arr)

// Looping in array
cities=['pune','mumbai','Delhi','Kolhapur','Sangli','Satara']
console.log("Access the element of Cities:-")
for(let k=0;k<cities.length;k++){
   console.log(cities[k])
}

// using the for-of loop and for-in loop
console.log("\nArray Element by the for-of lopp:-")
for(let m of cities){
   console.log(m)
}
console.log("Array Element by the For_in loop:-")
for(let n in cities){
   console.log(cities[n])
}