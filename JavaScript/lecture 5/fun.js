function display(){

    console.log("Hello Coder..")
}

display()

// parameter and argumnet and Return 
function sum(x,y) // parameter
{
    s=x+y
    return s
}

let su=sum(12,42)
console.log(s)

// Arrow Function  
let mul=(a,b)=>{
    m=a*b
    return m
}

console.log(mul(12,5))

// for each loop
let arr=[1,2,3,4,5,6,7,8,9,10,11]

arr.forEach((num)=>{
    console.log(num**2)
}
)// or 


console.log("forEach loop and Arrow Function:-")
let squre=(val)=>{
    console.log(val**2)
}
let brr=[1,2,3,4,5,6,7,8,9,10,11]
brr.forEach(squre)
arr.forEach(num=>{
    console.log(num)
}
)


// Map loop in array 
// the give output in the array from
console.log("By the map")
a=[12,32,43,54,64]
console.log(a)
let b=a.map(num=>{
    console.log(num*2)
    return num*2
})
console.log(b)


// Filter Method

console.log("Filter Method in Array:-")
console.log(arr)
let fil=arr.filter(num=>{
    if (num%2===0){
        return num
    }
})

console.log("Filtered the Array is:-",fil)