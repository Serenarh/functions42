//start = beginning int; end = ending int; incr = incremented jump; all will be passed to the function numberSummer
function numberSummer(start, end, incr) {
  let total = 0;
  for (let i = start; i <= end; i += incr) {
    total += i;
  }
  return total;
}
console.log(numberSummer(0, 21, 3)); //start with 0, end at 21, count by 3s
