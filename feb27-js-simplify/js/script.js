var login = document.getElementById('login');
var loginForm =
'<form>' +
  '<h1>Please Login</h1>' +
  '<label>' +
    '<span>username</span>' +
    '<input type="text" placeholder="username">' +
  '</label>' +
  '<label>' +
    '<span>password</span>' +
    '<input type="password" placeholder="password">' +
  '</label>' +
  '<label>' +
    '<span></span>' +
    '<input onclick="change()" type="submit" value="Submit">' +
  '</label>' +
'</form>';
login.innerHTML = loginForm;

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault();
  getFormVals();
});
var form = document.querySelector('#login form');

// get all input values and save to a variable
// Form object

function getFormVals(){
  var formInputs = [];
  for (var i = 0; i < form.length - 1; i++) {
    formInputs.push(form.elements[i].value);
  }
  console.log(dropCapInputs(formInputs));
};
function dropCapInputs(arr){
  if(Array.isArray(arr)){
    arr.forEach(function(e, i){
      arr[i] = arr[i].toLowerCase();
    });
    return arr;
  }
};

function change(){
  document.querySelector('input[type="submit"]').value = "Good Job!";
};
