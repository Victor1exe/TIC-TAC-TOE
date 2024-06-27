// console.log("fuck sambhog");

// const student = {
//     name:"raj",
//     class:"cse",
//     rollno:88,
//     isPass:false
// };

// student.rollno= student.rollno+1;

// let a=5
// let b=8
// console.log("a+b=",a+b);




// alert and prompt
// alert("hello!!")
// let name = prompt("Enter your name :")
// console.log(name);




// Template Literals
// let sen =`This is a template literal`;
// console.log(sen);
// console.log(typeof sen);
// need :
// let obj={
//     item:"pen",
//     price:100,
//     color:"red"
// }
// let output=`The name of product is ${obj.item}, its price is ${obj.price} and its color is ${obj.color}`;
// console.log(output);



// let arr = [85,97,44,37,76,60]
// let sum=0; 
// for(let i of arr){
//     sum=sum+i;
// }
// console.log( sum/arr.length);



// Update items with new values with 10% off :-

// let items = [250,645,300,900,50]

// // we have to track index for it in case of for of loop
// let i=0;
// for(let item of items){
//     let offer=item*0.1;
//     items[i]=item-offer;
//     i++;
// }

// for(let i=0;i<items.length;i++){
//     console.log(items[i]);
// }


//  Splice method


//  // adding items
//  let arr = [1,2,3,4,5,6,7];

// //  arr.splice(2,0,101,102);

// //  console.log(arr);

// // Delete items

// // arr.splice(2,1);
// // console.log(arr);

// // Replace items

// arr.splice(2,1,8);
// console.log(arr);





// FUNCTIONS:-

// Arrow function
// const val  = (a,b)=>{
//     let sum=a+b;
//     return sum;
// };

// console.log(val(3,5));

// let mult = (a,b) =>{
//    let mul=a*b;
//     return mul;
// };

// console.log(mult(9,8));


// let printHello = () =>{
//     console.log("hell0");
// };

// printHello();

// let str ="datya";

// function vowelCheck(str) {
//     let cnt=0;
//      for( let i of str){
//         if(i==='a' || i==='e' || i==='i' ||  i==='o' || i==='u'){
//             cnt++;
//         }
//      }
//      return cnt;
// }
// let cnt=vowelCheck(str);
// console.log(cnt); 

// FOR EACH ARRAY

// let arr= [1,2,3,4,5];

// arr.forEach(function printVal(val) {
//         console.log(val);
// });

// arr.forEach((val) => {
//     console.log(val);
// });

// let cities = ["pune","delhi","hodal"]

// cities.forEach((val,idx,cities) =>{
//     console.log(val.toUpperCase(),idx,cities);
// });



// let arr= [1,2,3,4,5,6];

// arr.forEach((val) =>{
//     console.log(val*val);
// });


// Map method

// let array =[1,2,3,4,5];

// let newarr=array.map((val)=>{
//     return val/2;
// });

// console.log(newarr);


// Filter method

// let arr = [1,2,3,4,5,6,7,8,9];

// let newarr= arr.filter((val)=>{
//     return val%2===0;
// });

// console.log(newarr);



// Reduce method

// let arr = [5,8,656,43,22,1];

// const p=arr.reduce((prev,res)=>{
//     return prev<res?prev:res;
// });
// console.log(p);

// let arr=[98,54,2,1,13,99,90,65,93];

// let newarr=arr.filter((val)=>{
//     return val>=90;
// });

// console.log(newarr);

// let n=prompt("Enter a number :");

// let arr=[];
//  for(let i=1;i<=n;i++){
//         arr[i-1]=i;
// }

// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });

// let product=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });

// console.log(sum);

// console.log(product);

// console.dir(window.document.body);
// console.log(window.document.body);


// DOM manipulation :-

// Access elements by ID

// let head1=window.document.getElementById("heading1");
// console.dir(head1);

// let headings=window.document.getElementsByClassName("heading1");
// console.log(headings);

// let para=window.document.getElementsByTagName("p");
// console.dir(para);

// let para=window.document.querySelector("p");
// console.dir(para);


// // To print the first element node as by default there are text and comments node present in the DOM
// console.dir(window.document.body.firstElementChild);


// const para=document.querySelector("#hsf");
// console.log(para.lastChild.nodeName);

// Next siblings


// const par=document.querySelector("#hsf2");
// let dta =(par.firstElementChild);
// console.log(dta.nextElementSibling);


// let divine=document.querySelector("#div1");
// console.dir(divine);


// let d=document.querySelector("h2");
// d.innerText=d.innerText+ " from apna college."
// console.log(d.innerText);


// let d1=document.querySelector(".bankey");
// d1.innerText=d1.innerText+" hucus pucus poo poo poo.";
// console.log(d1.innerText);
// let d2=d1.nextElementSibling;
// d2.innerText=d2.innerText+" ujda sim sim tu tu tu.";
// console.log(d2.innerText);
// let d3=d2.nextElementSibling.nextSibling;
// d3.innerText=d3.innerText+" kidher ko chala tu tu tu.";
// console.log(d3.innerText);


// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);


//GET AND SET ATTRIBUTE

// let  name=div.getAttribute("name");
// console.log(name);


// let par=document.querySelector("p");
// console.log(par.setAttribute("para","newclass"));


// Style attribute

// let div=document.querySelector("div");
// console.log(div);

// div.style.backgroundColor="green";

// div.style.backgroundColor="purple";

// div.style.fontSize="20px";

// Creating new element

// let newBtn= document.createElement("button");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.after(newBtn);

// let newheading=document.createElement("h1");
// newheading.innerHTML="<i>New Heading</i>"
// div.before(newheading);

// let p=document.querySelector("p");
// p.remove();


// let p=document.createElement("button");
// p.innerText="click me sir ji";

// let div=document.querySelector("div");
//  div.appendChild(p);

// let btn=document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.color="white";
// btn.style.backgroundColor="red";
// document.querySelector("body").prepend(btn);



// Class list and adding new class with current class css attributes


// let para=document.querySelector("p");
// para.classList.add("newclass");




// EVENTS and Event Listeners IN JAVASCRIPT

// let btn1=document.querySelector("#btn1");

// btn1.onclick =(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.clientX, e.clientY);
// };

// btn1.addEventListener("click", (evt)=>{
//     console.log("btn1 was clicked h1");

// })

// btn1.addEventListener("click", ()=>{
//     console.log("btn1 was clicked h2");
// })

// const handler3 =()=>{
//     console.log("btn1 was clicked h3");
// }

// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", (evt)=>{
//     console.log("btn1 was clicked h4");

// })

// let div1=document.querySelector("#div1");


// btn1.removeEventListener("click", handler3);

// let currmode = "Light";
// let body= document.querySelector("body");

// let modeBtn = document.querySelector("#mode");
// modeBtn.addEventListener("click", () => {
//     if (currmode === 'Light') {
//         currmode = "Dark";
//         body.classList.add("dark");
//         body.classList.remove("light"); // Necessary To change the color theme alaways
//     } else {
//         currmode =  "Light";  
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// })

// let stats="style1";

// let box=document.querySelector("#hdf");
// box.addEventListener("mouseover", ()=>{
//     if(stats=== 'style1'){
//         stats= "style2";
//         box.classList.add("sty2");
//         box.classList.remove("sty1");
//         console.log("You are changing to style 2");
//     } else{
//         stats= "style1";
//         box.classList.add("sty1");
//         box.classList.remove("sty2");
//         console.log("You are changing to style 1");
//     }
// })












