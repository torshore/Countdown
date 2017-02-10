var countdownGenerator = function (x) {

 return function () {

   if (x == 3) {
     console.log("T-minus " + x + "...");
   } else if (x == 2) {
     console.log("T-minus " + x + "...");
   } else if (x == 1) {
     console.log("T-minus " + x + "...");
   } else if (x == 0) {
     console.log("Blast Off!");
   } else {
     console.log("Rockets already gone, bub!");
   }
   x -= 1;
 }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // R

