var btn = document.getElementById('btn');
var div = document.getElementsByTagName('div');
var classes = document.getElementsByClassName('color');

var lis = document.querySelectorAll('li:nth-of-type(odd)');
var ul = document.querySelector('ul');

var input = document.querySelector('input[type= "text"]');
var inputBtn = document.querySelector('input[type= "submit"]');


inputBtn.addEventListener('click', function(e){
  e.preventDefault();

  console.log(e);
  console.log('clicked the form submit button');
});

console.log(div);

for(var a = 0; a < lis.length; a++){
  lis[a].style.backgroundColor = 'purple';
  lis[a].style.color = 'white';
}

// div.addEventListener('mouseover', function(){
//   alert('hovering the div');
// });

for(var i = 0; i < div.length; i++){
  div[i].addEventListener('mouseover', function(){
    alert('hovering the div');
  });
}

for(var j = 0; j < classes.length; j++){
  classes[j].addEventListener('click', function(){
    alert('clicked on the list item');
  });
}


btn.addEventListener('click', function(){
  var userName = prompt('what is your name?').trim();
  if(userName.length < 5 || user === ''){
      alert('incorrect');
  }else{
    alert(userName);
  }
  //TERNARY OPERATION
  // user.lenght >= 5 ? alert(user) : alert('too short');
});
