let arr1 =['in a week','in few minutes','in one year','10 years from today'];
let arr2 =['marrie','play with','travel with','adopt'];
let arr3 =[' monkey',' horse',' whale',' fish'];
const randomNum = ()=>{
    return (Math.floor(Math.random()*3))
}
const randomSen =()=>{
    return (arr1[randomNum()]+" you will "+arr2[randomNum()]+arr3[randomNum()]);
}
console.log(randomSen());
console.log(randomSen());
console.log(randomSen());
console.log(randomSen());