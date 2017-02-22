var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('input[type="submit"]');
var user = [];

submit.addEventListener('click', function(evt){
  evt.preventDefault();

var formInputs = document.querySelector('form').elements;
for (var i = 0; i < formInputs.length - 1; i++){
  // user.push(formInputs[i].value);
  // formInputs[i].value = '';
  if(formInputs[i].type === 'radio' && formInputs[i].checked || formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value){
     console.log(formInputs[i].value);
    user.push(formInputs[i].value);
  }
  if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
    console.log(true);
    user.push(true);
  }
}

console.log(user);
user = [];
  // inputs.forEach(function(e, i){
  //   user.push(inputs[i].value);
  // });
  // alert(user);
  //
  // while(user.length > 0){
  //   user.pop();
  // }
});
