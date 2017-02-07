// var students = ['matthew', 'david', 'haley', 'marisa', 'micaela', 'osvaldo', 'rosamaria', 'alfredo', 'rigoberto', 'leonardo', 'gustavo', 'eric', 'kevin', 'montgomery', 'cobi', 'joshua'];
//
// // function randomStudent(){
// //   var numStudents = students.length;
// //   var randNum = Math.ceil( Math.random() * numStudents ) - 1;
// //   alert(students[randNum]);
// // }
// // randomStudent();
//
// var fruits = ['apples', 'watermelon', 'mangoes', 'tomato', 'raspberry'];
// // console.log(fruits);
//
//
// //Push - adds to the end of an array
// fruits.push('pineapple');
// // console.log(fruits);
//
// //pop - removes from the end of an array
// var lastFruit = fruits.pop();
// // console.log(fruits);
// // console.log(lastFruit);
//
// //Unshift - adds to the front of an array
// fruits.unshift('kiwi');
// // console.log(fruits);
//
// //Shift - removes from the front of an array
// var firstFruit = fruits.shift();
// // console.log(fruits);
// // console.log(firstFruit);
//
// //IndexOf - finds index of an item in an array
// var posFruit = fruits.indexOf('watermelon');
// // console.log(posFruit);
//
// //Splice - remove an item by index number
// // var remFruit = fruits.splice(1, 3);
// //                           ^  ^
// //                     index #  number removed
// // console.log(remFruit);
// // console.log(fruits);
//
// // console.log(fruits);
// // Slice - copies an array
// var copyFruit = fruits.slice(2, 3);
// //                           ^  ^
// //               starting index up-to but not including
// // console.log(fruits);
// // console.log(copyFruit);

/* 1.Create a new array with one school subject
    using the correct methods
   2.two new subjects to the beginning
   3.two new subjects to the end
   4.remove the second from last without damaging original array
*/
// var subjectSchool = ['math'];
// console.log(subjectSchool);
//
// subjectSchool.unshift('t.a.', 'art');
// console.log(subjectSchool);
//
// subjectSchool.push('english', 'science');
// console.log(subjectSchool);
//
// var remSubject = subjectSchool.slice(3, 4);
// console.log(remSubject);
// console.log(subjectSchool);
//
// subjectSchool.sort();
// console.log(subjectSchool);
//
// subjectSchool.reverse();
// console.log(subjectSchool);

var nums = [0, 53, 5, 103, 7, 78, 10];
nums.sort(function(a,b){return a - b});
console.log(nums);
