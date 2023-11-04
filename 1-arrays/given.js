/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 */

/**
 * Question 1
 * 
 * initialise an empty array to the variable `classroom supplies`
 * Add the following items to the array in this order one by one base on the following positions:
 * pen, paper, desk, computer
 * console log out classroom supplies. 
 * Write a single line comment as to what will be displayed
 * then sort the array using .sort() method
 * then console log the array.
 * Write a single line comment as to what will be displayed
 * then add a single line comment to show what is displayed in the terminal
 */
var classroomSupplies = [];

classroomSupplies.push("pen");
classroomSupplies.push("paper");
classroomSupplies.push("desk");
classroomSupplies.push("computer");

console.log(classroomSupplies);
classroomSupplies.sort(classroomSupplies);

//  This will display the sorted 'classroomSupplies' array in alphabetical order.




/**
 * Question 2
 * 
 * initialise an empty array to the variable `travel places`
 * Add the following items to the array one at a time:
 * Toronto, New York, Australia, Spain
 * console log out travel places
 * add a single line comment as to what the output will be
 */

var travelPlaces = [];


travelPlaces.push("Toronto");
travelPlaces.push("New York");
travelPlaces.push("Australia");
travelPlaces.push("Spain");


console.log(travelPlaces);
//  This will display an array containing the travel destinations in the order they were added;







/**
 * Question 3
 * 
 * initialise the variable called `baking recipies` to an array containing the values:
 * brownies, cookies, cakes, tarts
 * Then remove the last item in the array using the pop method.
 * Then console log out the baking recipies. Write a single line comment as to what will be displayed.
 */

var bakingRecipes = ["brownies", "cookies", "cakes", "tarts"];


bakingRecipes.pop(tarts);


console.log(bakingRecipes);
//  This will display the array with the last item ("tarts") removed. The output will be: brownies, cookies cakes.;





/**
 * Question 4
 * 
 * initialise the variable `schedule` to a 2-Dimensional array containing the values below:
 * 
 *          column[0]   column[1]                           column[2]
 * Row 1    COMP 1170   Fundamentals Frontend Web Tech      3.0
 * Row 2    MDIA 1055   Vector Graphics                     3.0
 * Row 3    MDIA 1106   Design                              3.0
 * Row 4    MDIA 1620   Basic Systems Operations and Prog   3.0
 * 
 * then use console.table() to showcase the information in a table.
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * I am taking _MDIA 1106_, _Design_ that is worth _3.0_ credits
 * 
 */
var schedule = [
    ["COMP 1170", "Fundamentals Frontend Web Tech", 3.0],
    ["MDIA 1055", "Vector Graphics", 3.0],
    ["MDIA 1106", "Design", 3.0],
    ["MDIA 1620", "Basic Systems Operations and Prog", 3.0],
  ];
  console.table(schedule);

const courseCode = schedule[3][0];
const courseName = schedule[3][1];
const credits = schedule[3][2];

console.log('$coruseCode, $courseName, $Credits');




