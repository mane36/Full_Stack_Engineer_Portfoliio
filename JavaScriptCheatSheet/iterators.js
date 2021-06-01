/*
Iterators or Array Methods.
iterating trough an array and can perform various actions.
All Methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Run in CMD: cd FullStackEngineerProjects\Full_Stack_Engineer_Portfoliio\JavaScriptCheatSheet>node iterators.js
*/

arrayExample = [1,2,3,4,5,6,7,8,9,0]

//Do something customized for each element in an Array - forEach()
console.log("forEach()")
arrayExample.forEach((elm) => {
//function body:
  console.log(elm)
})

//Filter elements by a given condition and return a new Array with elements which pass that condition
let newArray = arrayExample.filter(element => element < 5)

console.log("filter():")
console.log(newArray)
