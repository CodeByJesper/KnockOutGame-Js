// $ = functionS takes one paramater(_id) and returns document.getElementById(id)
function $(_id){
    return document.getElementById(_id);
}


$('roll').addEventListener("click", RollTheDice);
$('play-again').addEventListener("click", RestartGame);


// Declare global variables (Could be done locally for cleaner code)        
let currentRoll;
let diceOneValue;
let diceTwoValue;
const DICE_ONE = $("game-dice-one");
const DICE_TWO = $("game-dice-two");
const dices = ['images/d1.png', 'images/d2.png', 'images/d3.png', 'images/d4.png', 'images/d5.png', 'images/d6.png' ];
let scoreBoardArr = [];
let totalScore = 0;
let multiplier = false; // This is a multiplier the player can choose to unlock when about to start his/her third try

      
    function RollTheDice(){

        // Call animate.js script to do animation of dice spin
        animateSpinDice(); 
                
        // Generate two random numbers and store them to the two dices
        diceOneValue = GenerateRandomNumber();
        diceTwoValue = GenerateRandomNumber();
                
        // Update the two dices by passing two parameters containing the random numbers.
        UpdateDice(diceOneValue,diceTwoValue);  
                
        // Pass the two dices as parameters to KeepScore function
        KeepScore(diceOneValue,diceTwoValue);

        // Pass the two dices to checkIfGameOver function
        CheckIfGameOver(diceOneValue, diceTwoValue);       
                   
    }
    
    function UpdateDice(_diceOneValue, _diceTwoValue){
        
        // Update the images of the two dices
        // Call the dices array and getting element by passing dice value as index
        DICE_ONE.src = dices[_diceOneValue];
        DICE_TWO.src = dices[_diceTwoValue];
        
    }
    
    function GenerateRandomNumber(){

        //Generate a random number between 0 and 5 and returns it
        let randomNumber = Math.floor(Math.random() * 6);
        return randomNumber;
    }   
    
    function KeepScore(_diceOneValue, _diceTwoValue){
        
        // Get html <h1> element that prints the score and store it
        let score = $('score-points');

        if(multiplier){
            _diceOneValue = (_diceOneValue + 1) * 2;
            _diceTwoValue = (_diceTwoValue + 1) * 2;
            
        }
        else{
             // Add +1 to dices values beacuse they are between 0-5 for array indexing purposes (Could be done in a separate function)
        _diceOneValue+=1;
        _diceTwoValue+=1;
        }
       

        // Add the sum of the two dices and store it in currentRoll
        currentRoll = _diceOneValue + _diceTwoValue;

        // Store the value of currentRoll in totalScore
        totalScore += currentRoll;

        // Add the two dices to the score board array as an object containing two elements
        // This has not been implemented yet
        scoreBoardArr.push(_diceOneValue, _diceTwoValue);
        
        // update the text of html element with showing the score on the game screen 
        score.innerText = `SCORE ${totalScore} points`;
    
    }  
 
    function CheckIfGameOver(_diceOneValue, _diceTwoValue){ 

        // There is a minor bug or problem with functionallity 
        // The game over screen shows directly when you get you knock out number
        // The player dont get the chance to se their number
        // Easyliy fixed but havent gotten around to doing it yet

        // Add +1 to dices values beacuse they are between 0-5 for array indexing purposes (Could be done in a separate function)
        _diceOneValue+=1;
        _diceTwoValue+=1;

        // Add the sum of the two dices to sumOfDices variable
        let sumOfDices = _diceOneValue + _diceTwoValue;
        
        // Determine if the current roll was equal to the Knock Out Number the player choose
        if(sumOfDices === knockOutNumber){

            // displays a knock out image on top of everything
            DisplayKnockOutImg();

            // Stops the timer
            StopTimer();

            // When player gets game over we wait 2seconds and then hides the knock out image
            // Shows the game over screen
            setTimeout(function(){

                // Hides the knock out image
                HideKnockOutImg();
            
                // Hide the game screen and show the game over screen
                $('game-over-screen-container').style.display = 'flex';
                $("game-container").style.display = "none";

                // Populate the game over screen with elements
                RenderGameOverScreen();
                
                // Creates the history section on game over page
                CreateRollHistory();

            }, 2000)
            
        }

        function RenderGameOverScreen(){

            // Get the time, score and scoreboard html elements and store them in respektive variables
            let time = $('timer');
            let score = $('score');
            //let scoreBoard = document.getElementById('score-board');

            // Update the text of the html elements
            time.innerText = `You played for ${secondsElapsed} seconds`;
            score.innerText = `${totalScore} points`;         
           
        }

        function CreateRollHistory(){

            //prints the scorebaord array two items at a time
            // If index is even do a line break
            // else add a "-" between the two numbers
            // Had problems with 0 being even. but fixed it by putting scoreBoard.innerHTML += scoreBoardArr[i] after the if statement
            for(let i = 0; i < scoreBoardArr.length; i++){

                if(i % 2 == 0){
                    scoreBoard.innerHTML += '<br>';
                }
                else{
                    scoreBoard.innerHTML += ' - ';
                }

                scoreBoard.innerHTML += scoreBoardArr[i];

            } 

        }
        
    }

    // Displays an image when the player hits his/her knock out number
    function DisplayKnockOutImg(){
        console.log('works')
        $('knock-out-container').style.display = 'flex';
    }

    // Hides the image 
    function HideKnockOutImg(){
        $('knock-out-container').style.display = 'none';
    }

    function RestartGame(){

        // Hide the game over screen and show the start game screen
        $('game-over-screen-container').style.display = 'none';
        $("start-game-container").style.display = "flex";

        // Hide the input for username 
        $('question-name-h1').style.display = 'none';
        $('player-name').style.display = 'none';

        // Get html <h1> element that prints the score and store it
        let score = $('score-points');

        // Set everything back to start values
        totalScore = 0;
        score = 0;
        secondsElapsed = 0;
        scoreBoardArr = [];
        secondsElapsed = 0;
        diceOneValue = 0;

        scoreBoardArr = [];
    }   