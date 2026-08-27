// function sum(a,b){
//     return 20+40;
// }
// // const a = sum();
// // console.log("a = "+a);
// function sumofsum(){
//     console.log(sum()+sum());
// }
// sumofsum();
// function sum(a,b){
//     return a+b;
// }
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,400));
// }
// sumofsum();

// function info(RollNo ,Name ,College ,Branch){
//     return "\nRollNo:"+RollNo+"\nName:"+Name+"\nCollege:"+College+"\nBranch:"+Branch;
// }
// function myinfo(){
//     const mydata = info("504","Pushakar","ABES","CSE",)
//     const mydata1= info("0048","Abhishek","ABES","CSE")
//     console.log(mydata);
//     console.log(mydata1);
// }
// myinfo();

// function generateNumber(){
//     return Math.floor(Math.random()*10000);
// }
// const randomNumber= generateNumber();
// function findEvenNo(){
//     if(randomNumber%2==0) console.log("EvenNumber")
// }
// console.log(randomNumber);
// findEvenNo();
// const sum=(a,b)=>{
//     return a+b;
// }
// const result = sum(20,50);
// console.log(result);
// (()=>{console.log("Hey....using IIFE")})();
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(Clbk, msg){
//     const result = Clbk(20,40);
//     return msg+result;
// }
// sumWithMsg(sum, "Hii...Sum=");
// console.log(sum);

// function login(msg,error){
//     if(error){
//         console.log("username or password is incorrect");
//     }else{
//         console.log(msg);
//     }
// }
// function loginHandler(username, password, clbk){
//     const myUsername = "Abhishek94";
//     const myPassword = "123456";
//     if(username == myUsername && password == myPassword){
//         clbk("success",null);
//     }else{
//         clbk(null,"Username or password is incorrect");
//     }

// }
// loginHandler("Abhishek94","1236",login);

// setTimeout(()=>{
//     console.log("Hello")
//     setTimeout(()=>{
//         console.log("Two")
//         setTimeout(()=>{
//             console.log("Three")
//             setTimeout(()=>{
//                 console.log("four")
//                 setTimeout(()=>{
//                     console.log("five")
//                     setTimeout(()=>{
//                         console.log("six")
//                         setTimeout(()=>{
//                             console.log("seven")
//                             setTimeout(()=>{
//                                 console.log("eight")
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// console.log("One");
// setTimeout(()=>console.log("Two"));
// console.log("Three");
// let a;
// let b;
// function sumofsqrt(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }
// function sumOfSqrtWithName(name,clbk){
//     const result = clbk(64,49);
//     return name+result;
// }
// const result=sumOfSqrtWithName("Abhishek Kumar...Sum=",sumofsqrt);
// console.log(result);

const myPromise = new Promise((resolve, reject) => {
  let username = "AbhishekKumar";
  let password = "123456";
  if (username == "AbhishekKumar" && password == "123456") {
    resolve("succes");
  } else {
    reject("Invalid user");
  }
});
// myPromise.then((msg)=>{
//     console.log(msg);
// })
// .catch(msg=>{
//     console.log(msg);
// })
// .finally(()=>console.log("All resource has been closed"))

async function loginHandler() {
  try {
    const loginStatus = myPromise;
    console.log(loginStatus);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Closing all the open resources.....");
  }
}
loginHandler();
