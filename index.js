//a function DECLARATION called greetingGenerator
function greetingGenerator() {
  const phrase = "Good Morning!"; //local variable; not accessible globally
  const p = "Hey!"; //local variable; not accessible globally
  console.log(p); //will print "Hey!" b/c function accesses local variable value before looking outside for the global variable value
  return phrase; //will return "Good Morning!"
}

const p = "Hello!"; //global variable p has value "Hello!"
console.log(p); //Hello! ; cannot go inside the scope of the function to find the local variable's value--uses global variable's value

//console.log(phrase);

const saying = greetingGenerator(); //Hey! the function is called and prints Hey! rather than Hello b/c the function first looks for a local value. It will only look outside its scope when no local value is available.absolute

//saying(); //throws an error b/c saying is NOT a function--it is a string
saying; //no output at all
