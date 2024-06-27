// // console.log("1");
// // console.log("2");
// // setTimeout(()=>{
// //     console.log("hello");
// // }, 4000); // Timeout time provided in ms
// // console.log("3");
// // console.log("4");

// // Callbacks

// // sync programming callback

// // function sum(a, b) {
// //     console.log(a+b);
// // }

// // function calculator(a, b, sumCallback) {
// //     sumCallback(a, b);
// // }

// // calculator(1,20,sum);

// // Callback Hell

// // function getData(dataId ){
// //    setTimeout(() => {
// //     console.log("data =",dataId);
// //    }, 2000);  // 2 sec
// // }; 

// // we need to print this data one after one with 2 sec delay but JS will not let us do this as for every function call it will start the timer and move to the next line so they will be printed together at same time 
// // getData(1);
// // getData(2);
// // getData(3);



// // But we can do so with the help of callbacks


// // function getData(dataId, getNextData){
// //     setTimeout(() => {
// //      console.log("data =",dataId);
// //      if(getNextData){
// //         getNextData();
// //      }
// //     }, 2000);  // 2 sec
// //  }; 
 
// //  // call back hell or pyramid of doom
// //  getData(1, () =>{  // A callback is passed
// //     console.log("getting data2...");
// //     getData(2, () =>{  // A callback is passed
// //         console.log("getting data3...");
// //         getData(3 , ()=>{ // A callback is passed
// //             console.log("getting data4...");
// //             getData(4);
// //         });
// //      });
// //  });


// //  Promises

// //resolve
// // let promise = new Promise((resolve,rejected) =>{
// //     console.log("I am a promise");
// //     resolve("success");
// // });

// //rejected

// // let promise = new Promise((resolve,reject) =>{
// //         console.log("I am a promise");
// //         reject("rejected");
// //     });

// // In general programming we don't create the promises but rather they are provided to us by API's and we to handle them\

// // demo of how will a API will return us promise
// // resolve case

// // function getData(dataId, getNextData){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() =>{
// //             console.log("data =", dataId);
// //             resolve("success");
// //             if(getNextData){
// //                 getNextData();
// //             }
// //         },5000);
// //     });
// //  }; 

// // rejected case 
// // function getData(dataId, getNextData){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() =>{
// //             // console.log("data =", dataId);
// //             reject("error");      // will show error at time of returning the data
// //             if(getNextData){
// //                 getNextData();
// //             }
// //         },5000);
// //     });
// //  }; 


// // How to use promises

// // promise.then((res) =>{...})

// // const getPromise = () => {
// //     return new Promise((resolve,reject)=>{
// //         console.log("I am a promise");
// //         // resolve("success");
// //         // reject with error
// //         reject("netwrok error");
// //     });
// // };

// // let promise=getPromise();

// // promise.then((res)=>{
// //     console.log("promise fullfilled", res);
// // });

// // // To catch the error

// // promise.catch((err)=>{
// //     console.log("rejected", err);
// // });


// // Promise chain


// // We want to fetch the data 1 first then data 2 in this sequence but we are unable to do so 
// // function asyncFunc1() {
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(()=>{
// //             console.log("data1");
// //             resolve("success");
// //         },4000);
// //     });
// // };


// // function asyncFunc2() {
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(()=>{
// //             console.log("data2");
// //             resolve("success");
// //         },4000);
// //     });
// // };


// // console.log("fetching data1.....");

// // let p1= asyncFunc1();
// // p1.then((res) => {
// //     console.log(res);
// // });

// // // after calling for the async func 1 it will not wait for it's completion rather it will proceed with async  func 2 simulteanously

// // console.log("fetching data2.....");

// // let p2= asyncFunc2();
// // p2.then((res) => {
// //     console.log(res);
// // });

// // To do so:-

// function asyncFunc1() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// };


// function asyncFunc2() {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// };


// console.log("fetching data1.....");

// // let p1= asyncFunc1();
// // p1.then((res) => {
   
// //     console.log("fetching data2.....");
// //     let p2= asyncFunc2();
// //     p2.then((res) => {});
// // });

// // modified form  // promise chaining

// asyncFunc1().then((res)=>{
//     console.log("Fetching Data2.....");
//     asyncFunc2().then((res)=>{
        
//     });
// });









const arr = [2,7,13,14,15];
const target_value = 9;
let sum=0;

for(let i=0;i<arr.length()-1;i++){
    sum=0;
    sum=sum+arr[i];
    for(let j=i+1;j<arr.length();j++){
        sum+arr[j];
        if(sum==target_value){
            console.log(`${i} and ${j}`);
        }else{
            continue;
        }
    }
}
