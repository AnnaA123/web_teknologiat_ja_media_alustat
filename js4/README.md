Create an lotto app that randomly selects 7 unique numbers from range 1..40 and shows them to the user in ascending order. The app should have a button to select new set of numbers. You might find it useful to structure the logic of the application into following functions (note: even though you might find some of these functions in Javascript library, implement them yourself).
<br>
a. Write function drawNumber that takes two parameters, low and high, and returns a random number from the interval low..high (inclusive). Hint: you might find Math.random and Math.floor useful.
<br>
b. Write function valueIsIn that takes as parameters an array a and a value v and returns true if the array contains the value, false otherwise. Does the implementation differ if you assume the array is in sorted order?
<br>
c. Write function drawNumbers that takes three parameters, low, high, and count, and returns an array of count unique random numbers from range low..high (inclusive) in sorted order.