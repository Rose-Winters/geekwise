
var nav = document.querySelector('nav');
var hero = document.getElementById('hero');
var sec1 = document.querySelector('section:nth-of-type(1)');
var sec2 = document.querySelector('section:nth-of-type(2)');
var sec3 = document.querySelector('section:nth-of-type(3)');

console.log(sec1);
console.log(sec2);
console.log(sec3);
var dist = 0,
    navHeight = 0,
    heroHeight = 0;

window.addEventListener('scroll', function(evt){
  dist = window.scrollY;
  heroHeight = hero.clientHeight;
  if(dist > heroHeight){
    sec1.classList.add('vis');
  }else{
    sec1.classList.remove('vis');
  }
  // navHeight = nav.clientHeight;
  //
  // if(dist > navHeight){
  //   nav.classList.add('fixed', 'anim');
  // }else{
  //   nav.classList.remove('fixed', 'anim');
  // }
})








/*var a;

const GITHUB_URL = 'http://github.com/';
console.log(GITHUB_URL);

console.log('Notification' in window);

// if(!'Notification' in window){
//   console.log('not available');
// }else{
//   console.log('is available');
// }

var btn = document.querySelector('button');
console.log(btn);

if( !'childElementCount' in btn){
  itIsnt();
}else{
  itIs();
}

function itIs(){
  alert('The method is available');
}
function itIsnt(){
  alert('The method is NOT available');
}
*/
