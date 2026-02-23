// console.log("Hello World...");
// alert("Welcome in Coding....!")

// variables

// name="Omkar Jadhav"
// roll_no=12
// marks=78.3
// married=null
// is_working=true
// console.log(name,marks,roll_no,married,is_working)



// varible declaration
// early used the var keyword befor the variable declaration 
// after the es6 updated varsion of js the let and const keyword is used to declare the variavle
// the var,let,const 
// var - is redeclare and updated and globle scope
// let - is variable is not redeclare and also updated by once declare and block scope
// const- variable is not redeclareand not updated after once declaration and it is block scope

// let name='omkar';
// const age=21;
// var marks=78.66;
// console.log(name,age,marks) 

// let name; //is also possible
// name='omkar';  // updated 
// //const age; //is not allow
// const age=21; //is allow 

// data types check used the typeof _variable_name
// name='omkar';
// age=21;
// marks=76.86;
// console.log(typeof name,typeof age, typeof marks);


// object is collection of differrnt data types in single variable is konws as object
// object is collection of key and values pair
// const object in that we can update the key valus 

const student={
    name :'omkar',
    age :21,
    marks : 78.66,
    place : "palus"

}
console.log(student)
console.log(typeof(student))

student.marks=78.43
console.log(student)

student['age']=22;
console.log(student)

console.log(student.key)