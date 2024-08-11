const ages = [32, 33, 16, 40];
const result = ages.filter((age)=>age!==32);
console.log(result);
console.log(ages)



const resultAgain = ages.filter((age)=>
{
    return age!==32
});
console.log(ages);
console.log(resultAgain)