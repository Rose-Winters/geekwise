// 6 Object Types

/*Object Object
  Array Object
  String Object
  Number Object
  Float Object
  Boolean Object
*/

var myObjectVar = {
      make: 'BMW',
      model: '328i',
      color: 'red',
      year: 2006
    },
    myArrayVar = ['purple', 'violet', 'lavender'],
    myStringVar = 'Rosa Gomez',
    myNumberVar = 6,
    myFloatVar = 12.99,
    myBooleanVar = 'true';

console.log(myObjectVar);
console.log(myArrayVar);
console.log(myStringVar);
console.log(myNumberVar);
console.log(myFloatVar);
console.log(myBooleanVar);


var strOne = 'this is a string',
    strTwo = "this is also a string",
    strThree = 'is this a string";',
    strFour = "this is david's basketball",
    strFour = "this is david\'s basketball",
    strFive = 'Eric said: "Here have David\'s Corn Nuts"';
    //Escaping characters

var numOne = 1,
    numTwo = '2'; //is a string because it's in quotes

var fltOne = 5.7,
    fltTwo = 0.0000000001;

var boolOne = true,
    boolTwo = false;

  //booTwo == 0;

var arrOne = ['one', 'two', 'three'],
    arrTwo = [1, 2, 3],
    arrThree = [false, 1, 'two',3];

var objOne = {
      one: 'blue',
      two: 'orange',
      three: 'pink'
    };

// = is an assignment operator

/*
  create Two new variables
  Add the two variables together
  assign sum to a new variable
  console result of sum
*/

var numThree = 10,
    numFour = 20,
    numSum = (numThree + numFour),
    numSubtract = (numThree - numFour),
    numDivide = (numThree / numFour),
    numMultiply = (numThree * numFour),
    numModulus = numThree % numFour;
console.log(numSum);
console.log(numSubtract);
console.log(numDivide);
console.log(numMultiply);
console.log(numModulus);
