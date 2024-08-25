const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
const newCityArrSplice = cities.splice(1,3);
// slice make changes in the original array
//start from index 1 and do include till index 3
console.log("Original: ", cities)
console.log("New: ", newCityArrSplice)

cities.splice(2, 0, "Sydney");
console.log("Original: ", cities)
//2 means the location where to add the new element
//0 means how many elements to remove after index 2
//Sydney is the new element to be added


const citiess = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
//slice dont affect orignal array
const newCityArr = citiess.slice(1,3);
//start from index 1 and donot include till index 3


console.log("Original: ", cities)
console.log("New: ", newCityArr)