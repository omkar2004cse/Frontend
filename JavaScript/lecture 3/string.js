let st=prompt("Enter a String:-")
console.log("String is :-",st)
console.log("Length of string is:-",st.length)
// Template Literals
let product={
    P_name:"pen",
    price:60,
    brand:"Reynolds",
}

console.log("product is",product.P_name,"price is",product.price,"brand is",product.brand)
// Template Literals
console.log("String Template Literals is:-")
console.log(`product is ${product.P_name} price is ${product.price} brand is${product.brand}`)
//String Method 
console.log("String Method")
console.log("UpperCase:-",st.toUpperCase())
console.log("Lower Case is:-",st.toLowerCase())
console.log("Remove Space is:-",st.trim())
console.log("Print string from index 1 to 4",st.slice(1,4))
st2="king"
console.log("Concatination of string is:-",st.concat(st2))
console.log("Replace a by t",st.replace("a","t"))
console.log("character at that index is:-",st.charAt(1))