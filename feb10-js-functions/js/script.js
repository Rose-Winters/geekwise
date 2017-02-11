



// var str = "MaTthEw";
// var modStr = str.substr(1,4);

//console.log(userName);

// .toLowerCase () - lowercase string
// .toUpperCase() - uppercase string
// .substr() - get characters from starting index upto & including ending index
// .trim() - removes excess spaces before & after
// .length - get total number of characters
// .charAt() - get character at specified index

/*
  1. Create a function that asks for the users first name. remove all excess spaces and RETURN value (Function Decleration - NO PARAMETERS)
  2. Create a separate function that will guarantee a capitalization of the First letter, & lowercase all remaining. Pass value as argument into step 3 (Function Expression)
  3. Create another function that will ALERT username.
*/

// var b = function(){
//   var myName = prompt('whats your name?').trim();
//   alert(myName.charAt(0).toUpperCase() + myName.substr(1).toLowerCase());
// };

// function a(){
//   return 'Matt';
// }
// function b(){
//   var myName = a();
//   console.log(myName);
// }
// b();

var extBtn = document.getElementById('external');
var content = document.getElementById('content');
var deleteContent = document.getElementById('void');


extBtn.addEventListener('click', function(){
  content.textContent = prompt('What is your name?');
});
deleteContent.addEventListener('click', function(){
  content.textContent = '';
})

function changeColor(){
  // var randNum = Math.random();
  // console.log(randNum);
  // var randHue = randNum * 360;
  // console.log(randHue);
  // var roundHue = Math.floor(randHue);
  // console.log(roundHue);
  // var addOne = roundHue + 1;
  // console.log(addOne);
  var randNum = Math.floor(Math.random() * 360) + 1;
  document.body.style.backgroundColor = 'hsl('+ randNum +', 50%, 50%)';
}
