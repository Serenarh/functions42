//declaration of function doubleValueLogger which has a 2 value parameter
function doubleValueLogger(value1, value2) {
  console.log(value1, value2); //prints the 2 values passed to the function
}

doubleValueLogger("Glorious", "Day!"); //prints Glorious Day! since these are the 2 values passed to doubleValueLogger
doubleValueLogger("Greetings!"); //prints Greetings! undefined; Greetings! is the only value passed to doubleValueLogger. Since there are spaces for 2 parameters, the second space returns the value undefined.
