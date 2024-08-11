const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
const newCityArrSplice = cities.splice(1,3);
// slice make changes in the original array
//start from index 1 and do include till index 3
console.log("Original: ", cities)
console.log("New: ", newCityArrSplice)


const citiess = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
//slice dont affect orignal array
const newCityArr = citiess.slice(1,3);
//start from index 1 and donot include till index 3


console.log("Original: ", cities)
console.log("New: ", newCityArr)