/*
all 3 alerts (alert, prompt, confirm)
4 objects. (string, number, float, boolean)
minimum if 10 variable saves
minimum of 5 confirms
use 1 if statement
use 2 mathematical operations (+, -, *, /)
if(isNaN(numFive)){
  alert('its not a number');
}
else{
alert('it is a number')
}
*/
var userResp = confirm('Are you a boy?');

if(userResp){
    alert('I guess you\'re a boy then.');
    var gender = "little boy";
}else{
    alert('Perfect, you\'re a girl.');
    var gender = "girl";
}
var userName = prompt('What is your name?');
var wlcmState = 'Congratulations ' + userName + ', you are indeed a ' + gender;
alert(wlcmState);

var ageGroup = confirm('So, are you older than 18?');
if(ageGroup){
  var tYes = confirm('Amazing, would you like to participate in our survey?');
  if(tYes){
    alert('cool, let\'s continue.');
  }else{
    alert('Well then what are you doing here?');
    alert('If you don\'t leave then i\'ll take it as a yes!');
    alert('That\'s it! You are participating then.');
  }
}else{
  alert('LEAVE NOW!!!');
  var click = userName + ', what are you still doing here?';
  alert(click);
  var stop = 'You are just wasting your time here, ' + userName;
  alert(stop);
  var iGuess = 'I guess I\'ll give you the survey then, sheesh!';
  alert(iGuess);
}


var mathX = 2000,
    mathY = 100,
    mathDiv = mathY / mathX,
    mathSub = mathX - mathY,
    mathMul = mathX * mathY,
    mathAdd = mathX + mathY;

var simpleMath = confirm("Is " + mathX + " + " + mathY + " = " + mathAdd + "?");
if(simpleMath){
  alert('You did good, unlike many others. \;\)');
}else{
  alert('WOW!!! I can\'t believe you got that wrong,' + userName);
}
var questionColor = prompt('So, what\'s your favorite color?');
alert('Cool that\'s my favorite color too!');
alert('Nah jk, unless in fact your favorite color is purple.');

var leavePlease = confirm('Would you like to leave now?');
if(leavePlease){
  alert('Come on ' + userName + ', I\'m running out of questions.');
  alert('Alright, one more question and then we are done here.');
  alert('Your next question shall be a true or false question. Hope you are ready.');
  var question1 = confirm(mathY + ' / ' + mathX + ' = ' + mathDiv);
  if(question1){
    alert('Good Job! You can do simple math. Goodbye now, ' + userName);
  }else{
    alert('You nincompoop, this is simple math. Get it right.');
    alert('Good day to you, ' + userName + '. Go learn some more math now!');
  }
}else{
  alert('Perfect! Me too. Have a nice day, ' + userName + '.');
}
