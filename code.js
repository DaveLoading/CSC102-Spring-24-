//single line commentrollDie
/* multi line comment*/

//this function wil let us play a dice game

function playCraps(){
    // we are going to narrate what the function does through the console 
    console.log("playCraps function was called")

    // roll a die
    var die1 = rollDie();
    console.log("The first die roll is: " + die1)
     
    // roll a die
     var die2 = rollDie();
     console.log("The second die roll is: " + die2)

     //add the rolls together
     var sum= die1 + die2;
     console.log("The sum of the dice rolls is " + sum);

     // output the dice rolls to the html page 
     document.getElementById("die1Result").innerHTML = "Die 1 is: " +die1;
     document.getElementById("die2Result").innerHTML = "Die 2 is: " +die2;
     document.getElementById("crapssum").innerHTML = "Sum is: " + sum;

     //let's code the rules of the dice game
     //if the sum is 7 or 11, we lost
     // || mean or
     //== checks if the values are the same
     if (sum == 7 || sum == 11) 
     {
        document.getElementById("crapsResults").innerHTML = "You Lose";
       
     }
     //now let's check if you win by rolling 2 even numbers that match 
     //first we check if the dice are the same numbers
     //then we check the midulus (remainder) is 0 when the die roll is divided by 2
     // or in other words, was the die roll an even number
     // && means and (both conditions have to be true) 
     else if (die1 == die2 && die1 % 2 == 0 )
     {
       
        document.getElementById("crapsResults").innerHTML = "You Win";

     }
    //if niether of the previous if, or else if statements were true, then this catch-all
    //else statement will be executed
     else{
        document.getElementById("crapsResults").innerHTML = "You Pushed (you tied)";
     }
}
//create a function that generates a die roll - a random number between 1 and 6
function rollDie(){
   //generata a random number
   //math.random gives us a random number between 0 and 1 
    var die=Math.random()* 6;
    //we will hit a rounded whole number that will be returned whenever code calls this function
    return Math.ceil(die);
}


//this function will validate the form input to make sure it meets the criteria
function validateForm(){
   //get the firat name that the user entered on the form
    var firstname = document.getElementById("fname").value;

     //get the last name that the user entered on the form
     var lastname = document.getElementById("lname").value;

     var zipCode = document.getElementById("zip").value;

     console.log("First Name:" + firstname)
     console.log("Last Name:" + lastname)
     console.log("Zip Code:" + zipCode)
     
     //create a variable to hold firstname + space + lastname
     var fullName = firstname + " " + lastname;
     console.log("Full Name:" + fullName)
     
     //do the input validation
     //we will check for more than 20 letters in the first and last names
     //or if no names were entered, the length will be 1 because of the space we add between 
     //first and last name
     if(fullName.length > 20 || fullName.length == 1){
        console.log("Invalid name");
        // let the user know that they did not enter the information in correct;y 
        alert("Please enter a name that is shorter than 20 letters")
        // make sure the form does not submit
        return false;
    }
     else if (zipCode.length !=5){
        console.log("Invalid zip code");
        //let the user know that the zip code was not entered correctly 
        alert("Zip code was not 5 digits. Please try again")
        //make sure the form does not submit
        return false;
     }
     else{
        //they passed validation release the secret code
        console.log("We are good to go.");
        alert("Welcome, "+fullName + ". The secret word is validation.");
        return true
     }
    
}