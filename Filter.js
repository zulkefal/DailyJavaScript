// const ages = [32, 33, 16, 40];
// const result = ages.filter((age)=>age!==32);
// console.log(result);
// console.log(ages)



// const resultAgain = ages.filter((age)=>
// {
//     return age!==32
// });
// console.log(ages);
// console.log(resultAgain)


const objects= [{
    name:"abc",
    age:32
},
{
    name:"def",
    age:33
},
{
    name:"ghi",
    age:16
},
{
    name:"jkl",
    age:40
}]

const result = objects.filter((object)=>object.age!==32);
console.log(result)