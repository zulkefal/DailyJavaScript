const sumNumber = (a,b)=>{
    return a+b;
}
const result = sumNumber(2,3);
console.log(result)

/////
const subtractNumebr = (a,b)=>{
    return a-b;
}
const result1 = subtractNumebr(2,3);
console.log(result1)

const divideNumebr = (a,b)=>{
    return a/b;
}
const result2 = divideNumebr(2,3);
console.log(result2)

const multiplyNumber = (a,b)=>{
    return a*b;
}
const result3 = multiplyNumber(2,3);
console.log(result3)

const findReminder = (a,b)=>{
    return a%b;
}
const result4 = findReminder(3,2);
console.log(result4)

const ab = 10;
console.log(ab)
const bc=20;
console.log(bc)


function compare(a,b){
    if(a!=b){
        console.log("Both are same") ;
    }else{
        console.log("Both are Not same") ;
    }
}

compare(10,10);


let aa=10;
const bb=10;

function DataTypes(a,b){
    if( a ===  b){
        console.log("Both variable are same") ;
    }else{
        console.log("Both variable are Not same") ;
    }
}
DataTypes(aa,bb);
