var form = document.querySelector('form');
//
// console.log('childElementCount' in form);
//
// if(!'childElementCount' in form){
//   for(var i = 0; i < form.children.length; i++){
//     console.log(form.children[i]);
//   }
// }else{
//   for(var i = 0; i < form.childElementCount; i++){
//     console.log(form.children[i]);
//   }
// }
// if( 'Notification' in window){
// }else{
//   console.log('Notifications are available');
// }
//
// form.forEach(function(e, i){
//   console.log(e);
// });
//
// for (i = 0; i < form.children.length; i++) {
//   console.log(form.children[i]);
// }
//
// IN keyword
console.log(form);
var formArr = [];

formArr.push(form.method, form.hidden, form.length, form.childNodes[5].nodeName, form.clientWidth);

console.log(formArr);
