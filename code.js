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





// here is the code for moving the main image around
   
//track interval id
   var intervalId = 0;
    
   //this function will make our image move around
   function startImageMove(){
       //create a variable that point sto our HTML meme image
       var meme = document.getElementById("memeImage");

       intervalId = setInterval(function(){
           //create a variable to hold the new x coordinate
           var newX = getRandomCoordinate();

           //create a variable to hold the new y coordinate
           var newY = getRandomCoordinate();

           // let's change the location of our image 
           meme.style.left = newX + "px";
           meme.style.top = newY + "px";

           //output the new info to the console for debugging purposes
           console.log("x: "+ meme.style.left + " top: "+ meme.style.top);
       }, 1000); // the 1000 is time in milliseconds - 1000 is 1 second
       //this code will move the image every 1 second

   }

   //create the function to stop the image from moving 
   function stopImageMove(){
       // call the built in JavaScript function to clear the interval - stop the image from moving
       clearInterval(intervalId);
   }

   //create a function to generate our coordinate randomly 
   function getRandomCoordinate(){
      //this function will return a random coordinate back to the code that called it 
       return Math.floor(Math.random()*1000);
   }


   //**********************************************
   // Here are the 2 functions that run the palindrome checking 
   function PalindromeFun(){
      //console.log(palindromeTest("radar"));
      //console.log(palindromeTest("Fun stuff"));

      //flag variable to test if the user wants to continue 
      var bContinue = true;

      do{
          //prompt the user to enter a word
          var userInput = prompt("Enter a word to see if it is a palindrome: ");
          
          //check to see if the user's word is a palindrome

          var bIsPalindrome = palindromeTest(userInput);

          //create a message for the user
          var message = "";

          //if the word is a palindrome, let the user know
          if (bIsPalindrome){
             //tell the user that their word is a plaindrome
              message = userInput + " is a palindrome!";
          }
          //if the word is not a palindrome, let the user know
          else{
              //tell the user that their word is not a plaindrome
              message = userInput + " is not a palindrome!";
          }

          //display message to the user
          alert(message);

          //Prompt the user to see if they want to continue
          var answer = prompt("Do you want to continue? (y/n)");
          
          // check the answer, if n, exit the loop
          if (answer == "n"){
              //set our boolen loop moniter variable to false, 
              //so that the loop will stop running when the while condition is tested below
              bContinue = false;
          }

      }
      while(bContinue); //while bContinue is true, the loop will keep running ; if bContinue is false, the loop will not run anymore
}

// This function will test a string to see if it is the same backwards   
function palindromeTest(strToTest){
  // remove the whitespace from the string and make it lowercase
  var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();

  console.log("strCleaned=" + strCleaned);

  //put the string into an array so we can easily revers it
  var strArray = strCleaned.split("");

  //now let's revers the order of the letters in the array
  var strReversedArray = strArray.reverse();

  // put the array back into a string 
  var strRev = strReversedArray.join("");

  console.log("strRev=" +strRev);

  // test to see if the 2 strings are the same, 
  //both forwards and backward; if the words are the same, the function will return true
  // if not, the function will return false
  return strRev == strCleaned;

}