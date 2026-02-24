// string is sequence of character
let str='I am Programmer'
console.log(`${str} \nlength of string is:-${str.length}`)

// string Method
console.log(`string Method UpperCase:- ${str.toUpperCase()}`)

console.log(`string Method LowerCase:- ${str.toLowerCase()}`)
console.log(`string Method trime:- ${str.trim()}`)
console.log(`string Method Replace:- ${str.replace("a", 'p')}`)
console.log(`string Method ReplaceAll:- ${str.replaceAll("a","p")}`)
console.log(`string Method charAt:- ${str.charAt(5)}`)

console.log(`string Method Concatination:- ${str.concat(prompt("Enter string 2"))}`)

console.log(`string Method Slice:- ${str.slice(1,4)}`)