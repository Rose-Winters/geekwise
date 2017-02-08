(function(){

var firstNames = ['Rosa', 'Victor', 'Osvaldo', 'Vanessa', 'Alfredo'].sort(),
    cerealNames = ['Cinnamon Toast Crunch', 'Fruity Pebbles', 'Tootie Frooties', 'Life', 'Frosted Flakes', 'Lucky Charms'].sort();

console.log(firstNames);
console.log(cerealNames);

// ceil rounds up ... floor rounds down
   var randNum = firstNames[Math.floor( Math.random() * firstNames.length )];
   var randNum2 = cerealNames[Math.floor( Math.random() * cerealNames.length )];
   var funcExec = function(){
   alert(arguments[0] + ' ' + arguments[1]);
}(randNum, randNum2);
})();
//IIFE - Immediately Invoked Function Executable
//
//  var userName = prompt('what\'s your name?'),
//      num1 = parseInt(prompt('pick a number')),
//      num2 = parseInt(prompt('pick another number'));
//
//  Function Declaration
// function funcDec(a, b, c){
//   alert('Congratulations ' + a + ', you will have ' + (b + c) + ' kids in the near future!');
// }
//
// funcDec(userName, num1, num2);
//
//   1. create a car object
//     2. minimum of 3 properties and values
//     3. write a function named myModel
//     4. call the myModel function passing in the car object
//     5. pass the car object into your function call
//     6. alert the model of your car
//  var carObject = {
//       year: 2006,
//       make: 'BMW',
//       model: '320i'
// };
//
// function myModel(model){
//   alert(model.model);
// }
// parameter 'a' is SCOPED to function myModel
//
// myModel(carObject);
//
// var funcExec = function(){
//   alert(arguments[0]);
// }('Rosa', 12);
