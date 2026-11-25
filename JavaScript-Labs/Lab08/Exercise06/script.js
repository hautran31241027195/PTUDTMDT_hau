/* Exercise 8.6 – Using built-in JavaScript objects */
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write(stringOne);
document.write("<br>typeof stringOne=" + typeof stringOne);        // object
document.write("<br>typeof stringThree=" + typeof stringThree);    // string

if (stringOne == stringTwo)
    document.write("<br>stringOne has = value to stringTwo");
if (stringOne == stringFour)
    document.write("<br>stringOne has = value to stringFour");      // không in: 2 object khác nhau
if (stringOne === stringTwo)
    document.write("<br>stringOne has = value and = type to stringTwo"); // không in: khác kiểu
if (stringTwo === stringThree)
    document.write("<br>stringTwo has = value and = type to stringThree");
if (stringTwo === stringFour)
    document.write("<br>stringTwo has = value and = type to stringFour");   // không in

// Date
var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");

// Math
document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>");
