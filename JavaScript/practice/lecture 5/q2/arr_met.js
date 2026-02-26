// give the array of Marks then filter the marks is greater than 90+
marks=[95,33,67,75,78,90,76,98,94,56]


// for-of  loop
// result=[]
// for(let num of marks){
//     if(num>90){
//         result.push(num)
//     }
// }
// console.log(result)

// filter method
let fil=marks.filter(num=>{
    return num>90
})
console.log(fil)

// // Map not work for the specific condition
// let m=marks.map(n=>{
//     if(n>90){
//     return n
//     } 
// })
// console.log(m)