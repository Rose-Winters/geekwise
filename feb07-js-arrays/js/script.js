var students = ['matthew', 'david', 'haley', 'marisa', 'micaela', 'osvaldo', 'rosamaria', 'alfredo', 'rigoberto', 'leonardo', 'gustavo', 'eric', 'kevin', 'montgomery', 'cobi', 'joshua'];

function randomStudent(){
  var numStudents = students.length;
  var randNum = Math.ceil( Math.random() * numStudents ) - 1;
  alert(students[randNum]);
}
randomStudent();
