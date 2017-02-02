  var externalJavascript = "what the actual heck";
/* ^          ^          ^           ^           ^
keyword      name   assignment     value        end
                     operator
*/

//Variables

//Can do
var camelCase, //best recommended!!!
    not_camel_case,
    camel_Case,
    $dollarCase,
    dollar$case,
    firstVar,
    variable;

/*Can NOT do
var 1stvariable, //no numbers in beginning
    var, //no using function names
    UppercaseCamel, //no capital letters in the beginning. for Constructor Objects Only.
    SUPPERUPPERCASE; //definitely don't.


Javascript Objects
  number
  string
  Boolean
  Float
  Array
  Object
*/

var myNumberObject = 3;
var myNewNumberObject = myNumberObject.toString();
// console.log(myNumberObject)
// console.log(myNewNumberObject);

var myStringObject = "This is a string object";
var myOtherStringObject = 'This is also a string object';
var myNonWorkingStringObject = 'This won\'t work';
var myPoorGrammar = "David's Basketball";

//console.log(myStringObject, myOtherStringObject);

//Boolean Objects
var myBooleanTrue = false;// 0
var myBooleanFalse = true;// 1

//Float Object
var myFloatObject = 3.1;

//Array Object (identified with square brackets)
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];

//console.log(myArrayObject[3]);

//Object Object (identified with curly brackets)
var myObjectObject = {
  make: 'jeep',
  model: 'wrangler',
  color: 'black',
  year: 2014,
  package: function(){
    alert(this.make);
  }
};

//console.log(myObjectObject);

//Javascript Math

var variableA = 5;
var variableB = 10;
var variableC = variableA + variableB;

//console.log(variableC);

var variableD = variableA - variableB;
var variableE = variableA * variableB;
var variableF = variableA / variableB;
var variableG = variableA % variableB; //modulus

console.log(variableD, variableE, variableF, variableG);
