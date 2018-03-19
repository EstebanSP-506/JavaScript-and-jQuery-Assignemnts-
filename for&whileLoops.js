//   A            B        D
for (var num = 1; num < 6; num = num + 1)
{
  console.log("I'm counting! The number is ", num); // C
}
console.log("We are done. Goodbye world!");         // E

//A - B-C-D - B-C-D - B-C-D - B-C-D - B-C-D - B - E

var num = 1;                                         // A
while (num < 6)                                      // B
{
  console.log("I'm counting! The number is " + num); // C
  num = num + 1;                                     // D
}
console.log("We are done. Goodbye world!");          // E

//A - B-C-D - B-C-D - B-C-D - B-C-D - B-C-D - B - E.

console.log(Infinity)