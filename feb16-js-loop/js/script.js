var alert1 = document.getElementById('btn-1');
var alert2 = document.getElementById('btn-2');
var userNameArray = [];
var moviesArray = ['cinderella', 'snow white', 'sleeping beauty', 'bambi', 'oliver and company', 'moana'];

for(var i = 0; i < moviesArray.length; i++){
  console.log(moviesArray[i]);
}
// moviesArray.forEach(function(el){
//   console.log(el);
// });

alert1.addEventListener('click', userPrompt);
alert2.addEventListener('click', function(){
  alert('remove');
});

function populateArray(un){
  userNameArray.push(un);
  console.log(userNameArray);
  if(userNameArray.length >= 5){
    outputArray();
  }
}

function outputArray(){
  userNameArray.forEach(function(el, idx){
    console.log(idx + ' ; ' + el);
  });
  /* FOR LOOP
  for(var i = 0; i < userNameArray.length; i = i++){
    console.log(userNameArray[i]);
  }
  */
}

function userPrompt(){
  var userName = prompt('gimme yo name foo');
  if(userName === null){
    alert('please enter your username')
    return;
  }

  var userNameParsed = parseInt(userName);
  var userNameNaN = isNaN(userNameParsed);
  var userNameBlank = userName.trim() === "";
  // console.log( "original:" + userName);
  // console.log( "parsed:" + userNameParsed);
  // console.log( "is it NaN:" + userNameNaN);
  // console.log("is it blank:" + userNameBlank);

  if(
    userNameNaN === false &&
    userNameBlank === false ||
    userNameNaN === true &&
    userNameBlank === true
  ){
      alert('you entered bad info');
  }else{
    // alert('you may continue');
    populateArray( userName);
  }
}
