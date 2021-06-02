/*
Iterators and Array Methods OR Loops.
iterating trough an array and can perform various actions.

All Array Methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
All Loops here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement

Run in CMD: cd FullStackEngineerProjects\Full_Stack_Engineer_Portfoliio\JavaScriptCheatSheet
+ node iterators.js
*/

arrayExample = [1,2,3,4,5,6,7,8,9,0]

/*
Iterators and Array Methods
*/

console.log('terators and Array Methods\n')

//Do something customized for each element in an Array - forEach()
console.log("forEach()")
arrayExample.forEach((elm) => {
//function body:
  console.log(elm)
})
console.log('\n')


//Filter elements by a given condition and return a new Array with elements which pass that condition
let newArray = arrayExample.filter(element => element < 5)
console.log("filter():")
console.log(newArray)
console.log('\n')


/*
Loops
*/
console.log('Loops\n')


//for statement
console.log('Regular for statement:')
for (let i = 0; i<arrayExample.length; i++){
  console.log(arrayExample[i])
}
console.log('\n')


//for...in
//The for...in statement iterates a specified variable (i) over all the enumerable properties of an object (obj).
//For each distinct property, JavaScript executes the specified statements.
console.log('Iterating trough properties of an Object: For...in')
const examplObject = {
  name : 'object',
  id : 102
}
console.log('Regular for statement:')
for (let i in examplObject){
  console.log(examplObject[i])
}
console.log('\n')
