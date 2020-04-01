//function valueLogger with value parameter
function valueLogger(value) {
  console.log(value); //will print the value passed into valueLogger
}

valueLogger(); //undefined since no value was passed in
valueLogger("Good afternoon!"); //prints Good afternoon!; "Good afternoon!" is passed into the function valueLogger
valueLogger(6 / 3); //prints 2; 6 / 3 is calculated and the obtained value is passed into valueLogger
valueLogger(6, 3); //prints 6; 6 is passed into valueLogger; the 3 is ignored since valueLogger has only one parameter
