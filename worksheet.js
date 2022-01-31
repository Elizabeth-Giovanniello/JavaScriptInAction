// A Variable is the appropriate tool any time we want our program to remember a value so that it can be used later. 
// Once a variable has been declared, it can later be given a new value to reflect the changing state of the application.

// 1. Days of the Week

// a. Create a variable called dayOfWeek assign it a value of the string ‘Monday’.

// b. Print this variable to the console

// c. On a following line, change the value of dayOfWeek so that it has the value ‘Friday’.

// d. Print the statement ‘I can’t wait for Friday!” using the dayOfWeek variable

// e. Put down a breakpoint on the first line of your code in the browser and run your code with the debugger. Use the Step Into button to go from line to line. 
// Hover your mouse over the dayOfWeek variable every place it is used to see its current value change from Monday to Friday before it is printed.

let daysOfWeek = "Monday";
console.log(daysOfWeek);

daysOfWeek = "Friday";

console.log(`I can't wait for ${daysOfWeek}`);


// 2. User Input

// The JavaScript prompt() function is similar to print() in that it will display a message in the console window. However, when called, 
// the prompt() function will return whatever is typed in the terminal after the message is displayed, and save it to a variable.

// a. Create a variable called animalInput and set it equal to the input function call with the phrase ‘What is your favorite animal?’

// b. Create another variable called colorInput and set it equal to the input function call with the phrase ‘What is your favorite color?’

// c. Combine these two variables within a string so you can print the phrase “I’ve never seen a <color> <animal>!”

// One of the most important things when creating a new variable is to think of a descriptive name that explains exactly what this variable represents in your code. 
// If someone with no knowledge of your code were to jump in, they should be able to figure out what your variable represents.

// Try not to abbreviate when creating variable names. The few keystrokes you save will not be worth the potential for confusion!

let animalInput = prompt("What is your favorite animal?");
let colorInput = prompt("What is your favorite color?");
console.log(`I've never seen a ${colorInput} ${animalInput}!`);


// Conditionals

// Before starting the next section, think of your favorite breakfast, your favorite lunch, and your favorite dinner. 
// Write these three things in some comments in your code. Remember to start a line with // to designate it as a comment

// 1. Meals

// a. Create a variable called timeOfDay and give it the value 1300

// b. Below that, create another variable. This time, you choose the name. 
// This variable will end up holding the value of one of the meals you have previous chosen. But right now, you don’t know which it will hold! 
// What would be a good name to use for a variable that might end up with any of those three values?

// c. Now create a conditional with three parts: if timeOfDay has a value of less than 1200, assign your own variable the value of the breakfast you chose.

// d. If timeOfDay is between 1200 and 1700, assign your variable the lunch you chose.

// e. If timeOfDay is greater than 1700, assign your variable the dinner you chose

// f. After these conditionals, print your variable to the console. What value do you expect it to show?

// g. Go back to the line where you created timeOfDay and change its value twice so that you are able to see the other two meals print when you run the code.

// h. Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error. 
// Think about how the variable is being used and what types of values would not make sense to be used that way. 
// Run the code again to see the error get thrown.


// Meals: pancakes, turkey sandwich, steak

let timeOfDay = "error";

var faveMeal;


if (timeOfDay < 1200) {
    faveMeal = "pancakes";
}
else if (timeOfDay >= 1200 && timeOfDay <= 1700) {
    faveMeal = "turkey sandwich";
}
else if (timeOfDay > 1700) {
    faveMeal = "steak";
}

console.log(faveMeal);


// 2. Random Number
// a.Declare a variable to store a random number between 0 and 10. You
// will need to do some research to determine how to generate a random
// number in JavaScript.
// a.A good search term to use: “random number JavaScript”
// b.If the number is between 0 and 2, print to the console “Beatles”
// c.If the number is between 3 and 5, print to the console “Stones”
// d.If the number is between 6 and 8, print to the console “Floyd”
// e.If the number is equal to 9 or 10, print to the console “Hendrix”

randomNum = Math.floor(Math.random() * 11);

if (randomNum <= 2) {
    console.log("Beatles");
}
else if (randomNum >= 3 && randomNum <= 5) {
    console.log("Stones");
}
else if (randomNum >= 6 && randomNum <= 8) {
    console.log("Floyd");
}
else {
    console.log("Hendrix");
}

// 1.Write your own for loop that will display the message “JavaScript is cool!” 7
// times.
// 2.Write your own for loop that will display the numbers 0-10, one number per
// loop. You will need to utilize a variable for this!
// 3.Write a for loop that will print the following sequence:

for(let i = 0; i < 7; i++){
    console.log("JavaScript is cool!");
}

for(let i = 0; i < 11; i++){
    console.log(i);
}

for(let i=0; i < 5; i++){
    console.log("hello");
    console.log("goodbye");
}

// Functions 
// 1. Favorite Movie (void functions)   
// a.Create an appropriately named variable and assign it the value of the
// name of your favorite movie.
// b.On the next line, print this variable to the console. Run your code to
// test it out.
// c.Now, move the previous  two lines  of  code you wrote  into  a function
// named ‘printMovieName’
// d.Run your code again. Why does the movie name no longer print? (See
// slide 11 of the JavaScript in Action PowerPoint)
// e.Now do what slide 11 states is required for a function to run so you can
// test it out! (Hint: – it's the bottom half of the slide!)

function printMovieName(){
    let faveMovie = "Airplane";
    console.log(faveMovie);
}


// 2. Favorite Band (return functions)   
// a.Write a function that asks a user to enter their favorite band
// b.On the next line, the function should return the user’s response
// c.When you call the function, save the returned result as a new variable. 
// d.After the function is called, print the returned result.

function getFaveBand(){
    let usersFaveBand = prompt("What is your favorite band?");
    return usersFaveBand;
}

faveBand = getFaveBand();
console.log(faveBand);

// 3. Concert (parameters)   
// a.Create   a   new   function   called  concertDisplay.  This   function   should
// have one parameter called musicalAct
// b.Inside the function, ask the user to enter the street they live on and
// save it as a variable called myStreet.
// c.Print a string that combines the variable that holds the user’s response
// along   with   the  musicalAct  parameter.   The   message   should   end   up
// saying   “It   would   be   great   if   <musicalAct>   played   a   show   on
// <myStreet>!”
// d.Now when you call the  concertDisplay  function, pass in the variable
// that was returned from the Favorite Band section.

function concertDisplay(musicalAct){
    let myStreet = prompt("Enter the street you live on:");
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`);
}

concertDisplay(faveBand);

// Arrays
// 1.Desktop Items   
// a.Create a new variable called desktopItems. Establish this variable as
// an array by setting it equal to a pair of square brackets [].
// b.When   creating   an   array   literal   like   this,   we   can   insert   some   initial
// values at the same time it is created:
// i.Between the brackets, add a few strings to describe three items
// you see around you (‘desk’, ‘lamp’, etc.) Make sure to separate
// the items with commas OUTSIDE the quote marks.
// c.What index values do these 3 items have?
// d.Print to the console the item that resides at index 1.
// e.On a new line, use the JavaScript array method that allows you to add
// new things to an existing array to add the string ‘Infinity Gauntlet’ to
// your desktopItems array.
// f.Now,   utilize   a  for   loop  to   iterate  over   your   array  and   print   out   each
// item one at a time.

var desktopItems = ['glass', 'tissue', 'speaker'];
console.log(desktopItems[1]);
desktopItems.push('Infinity gauntlet');

for(i=0; i<desktopItems.length; i++){
    console.log(desktopItems[i]);
}

// Magic Number
// This exercise will bring together all the pieces you have learned about so far!
// 1.Create a variable called magicNumber and give it an initial value of 50
// 2.Create a variable called guess and give it an initial value of 0
// 3.Create a while loop that will allow a user to continue to input a guess until
// they correctly choose the magic number.
// 4.If the number guessed is lower than the magic number, it should print “Too
// low!”
// 5.If the number guessed is higher than the magic number, it should print “Too
// high!”
// 6.If the number is within 10 of the magic number in either direction, it should
// print the appropriate message and additionally print “Getting warmer!”
// 7.If the number is correctly guessed, instead of “Getting warmer!”, print the
// magic number along with a congratulations message and break the loop.
// 8.Once you have tested and determined it works, go back to the beginning and
// change magicNumber to be assigned a random number between 0 and 100
// instead of the hardcoded value.
// 9.Play your new guessing game a few times! Try to beat your own score
// 10.After playing a few times, put down  a breakpoint  at the start of the
// while   loop   and   run   it   with   the   debugger.   Hover   over   the  magicNumber
// variable to see how much easier it is to determine the value of your variables
// by debugging this way!

var magicNumber = Math.floor(Math.random() * 101);
var maxScore;

function magicNumberGame(bestScore){
    topScore = bestScore
    var guess = 0;
    var score = 0;
    console.log("Welcome to the Magic number game! We have selected a number between 1 and 100. It is your job to guess it in as few guesses as possible. Good luck!");
    while(guess != magicNumber){
        score ++;
        guess = prompt("Enter your guess for the magic number:");
        console.log(`Guess: ${guess}`);
        if(guess < magicNumber){    
            console.log(`Too low!`);
            if(magicNumber - guess <= 10){
                console.log("Getting warmer!");
            }
        }
        else if(guess > magicNumber){
            console.log(`Too high!`);
            if(guess - magicNumber <= 10){
                console.log("Getting warmer!");
            }
        }
        else if(guess == magicNumber){
            if(typeof topScore === 'undefined'){
            topScore = score;
                alert(`Congratulations! You have correctly guessed the magic number in just ${score} guesses! You have set the record for this game. ${magicNumber} cheers for you!`);
            }
            else if(score < topScore){
                alert(`Congratulations! You have correctly guessed the magic number in just ${score} guesses! That beats the previous record of ${topScore} guesses! You have set the new record. ${magicNumber} cheers for you!`);
                topScore = score;
            }
            else if(score == topScore){
                alert(`Congratulations! You have correctly guessed the magic number in just ${score} guesses! ${magicNumber} cheers for you! You've tied with the previous record. Play again to see if you can beat it!`);
            }
            else{
                alert(`Congratulations! You have correctly guessed the magic number in just ${score} guesses! ${magicNumber} cheers for you! The current record is ${topScore} guesses. Play again to see if you can beat it!`);
            }
        }
        else{
            console.log("That is not a valid number.");
        }
    }
    var response = "sadf";
    while (response[0].toLowerCase() != "y" && response[0].toLowerCase() != "n"){
        response = prompt(`Would you like to play again and try to beat your previous score? y/n`);
        if (response[0].toLowerCase() == "y"){
            magicNumberGame(topScore);
        }
        else if (response[0].toLowerCase() == "n"){
            alert("Ok, maybe next time! Goodbye.");
            break;
        }
    }
}

magicNumberGame(maxScore);