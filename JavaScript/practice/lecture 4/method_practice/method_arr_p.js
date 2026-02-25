let size=prompt("Enter a Size of Array:-")
let company=[]
let element;
for(let i=0;i<size;i++){
    element=prompt(`Enter a comapny in Array at ${i}`)
    company.push(element)
}
console.log(company)

// condition 1:-remove the frist company from the array
company.splice(0,1)
console.log("Remove the Frist company from List:-",company)

// 