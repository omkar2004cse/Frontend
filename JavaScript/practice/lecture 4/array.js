let marks=[85,97,44,37,76,60];
let avg;
let total=0;
for(let i=0;i<marks.length;i++){
    total+=marks[i]
}
console.log("Marks Total is:-",total)
avg=total/(marks.length)
console.log("Average of Marks is:-",avg)

// offer 10% on each product price
let product=[250,645,300,900,50]
for(let i=0;i<product.length;i++){
    product[i]=product[i]-((10*product[i])/100)
}
console.log("Offer Apply Price:-",product)