const printNum=()=>{
    for(i=0;i<10;i++)
        {
        
            console.log(`Number is ${i+1}`);

        }
}

printNum();

const printNum5=()=>{
    for(i=0;i<10;i++)
        {
        
            console.log(`5 X ${i+1} = ${5*(i+1)}`);

        }
}

printNum5();

const whileSum= ()=>{
    let result=0;
    let i=0;
    while(i<10)
    {
        result+=i;
        i++;
    }
    return result;
}

const finalResult=whileSum();
console.log(finalResult)

const whileSum10= ()=>{
    let result=0;
    let i=10;
    while(i>0)
    {
        result+=i;
        i--;
    }
    return result;
}

const finalResults=whileSum10();
console.log(finalResults)

const doWhileSum=()=>{
    let result=0;
    let i=0;
    do{
        result+=i;
        i++;
    }while(i<5)

    console.log("Result is ",result);
}

doWhileSum()

const calculateFactorial=(a)=>{
    let result=1;
    for(i=1;i<=a;i++)
    {
        result*=i;
    }
    console.log(`Factorial of ${a} is ${result}`);
}
calculateFactorial(5);

const printStars=()=>{
    for(i=0;i<5;i++)
    {
        let pattern=''
        for(j=0;j<=i;j++)
        {
            pattern+='*';
        }
        console.log(pattern)
    }
}
printStars();

const fruits = ["apple", "orange", "cherry","apple", "orange", "cherry","apple", "orange", "cherry","apple", "orange", "cherry"];

fruits.forEach((fruit,index)=>{
    console.log(fruit,index);
})

// in In this example, the value of the current index is logged to the console.
// x prints key
// person[x] prints value

const person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
console.log(x);
}

const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  console.log(x)
}
