var origString = "The original",
    firstString = "A literal string",
    secondString = new String("A string object");
    //concatString = firstString+secondString;

var firstName = "Rosa",
    middleName = "Maria",
    firstLastName = "Gomez",
    secondLastName = "Solano",
    fullName = firstName +  " Maria " + firstLastName + " Solano ";

var getIndex = firstString.match('it');
//console.log(getIndex);

var birthYear = 1999,
    findAge = 2020 - birthYear,
    tooMuch = "My Name is " + firstName + " Maria " + firstLastName + " " + secondLastName + ". I was born on " + birthYear + " and in 2020, I will be " + findAge + ".";
console.log(tooMuch);
