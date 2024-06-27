// const student = {
//     fullname: "laptop",
//     marks: 93,
//     printmarks: function() {
//         console.log("Marks =", this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
    
// };

// const karanArjun ={
//     salary : 90000,
//     calcTax() {
//         console.log("tax rate is 30%");
//     },
// }

// karanArjun.__proto__ = employee; // Done to use functions of one class in another class


// Classes and Constructors


// class Toyota{
//     constructor(brand, mileage){
//         console.log("constructer is called");
//         this.brand=brand;
//         this.mileage=mileage;
//     }

//     start() {
//         console.log("the car has started");
//     }

//     end() {
//         console.log("the car has stopped");
//     }

//     // setbrand(brand) {
//     //     this.brandName = brand;
//     // }
// };

// let fortuner= new Toyota("Hill climb", 10);
// console.log(fortuner);
// // fortuner.setbrand("Hill CLimb");
// let lexus = new Toyota("lexus", 5);
// console.log(lexus);


// Inheritance and super keyword

// class person{
//     constructor(name){
//         console.log("enter parent constructor");  // to get execution sequence
//         this.species="sab gay hae";
//         this.name=name;
//     }

//     // wake(){
//     //     console.log("its morninng wake up");
//     // }

//     eat(){
//         console.log("eat");
//     }

//     // sleep(){
//     //     console.log("sleep");
//     // }

//     // work(){
//     //     console.log("do something");
//     // }
// }

//     class engineer extends person{
//         constructor(name){
//             console.log("enter child constructor");
//             super(name); // to invoke parent constructor // child class passes it to parent class
//             // this.branch = branch;
//             console.log("exit parent constructor");
//         }
//         work(){
//             super.eat(); // to call parent method first
//             console.log("start working");
//         }
//     }

//     // class doctor extends person{
//     //     work(){
//     //         console.log("treat patients");
//     //     }
//     // }

//    let b2= new engineer("loddu");


// Practice questions

// let DATA= "this is some data";

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log(`The is ${DATA}`);
//     }
// };

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }

//     editData(){
//         DATA="This is new data";
//     }
// };


// let b2b= new User("bittu","kilvis@gmail.com");

// let admi = new Admin("admin","admin@lula.com");


// Error Handling

let a=5;
let b=10;

console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
// console.log("a+b = ",a+c);  // Gives error and code stops working here never reaches the next line
// To run code further and get error object we use try and catch
try{
    console.log("a+b = ",a+c);
}catch(err){
    console.log(err);
};
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);



