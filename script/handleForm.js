// $ = function takes one paramater(_id) and returns document.getElementById(id)
function $(_id){
    return document.getElementById(_id);
}

// Declare global variable 
let knockOutNumber;
let playerName;
let roundsPlayed = 0;


    // Add eventlistners to the btns
    $("yes-played-btn").addEventListener("click", PlayerHasPlayedBefore);
    $("start-game-btn").addEventListener("click", StartGamePageController);
    $("how-to-play-btn").addEventListener("click", ShowHowToPlayPage);
    
    
    function PlayerHasPlayedBefore(){

        // Call this function if the player has played the game before

        // Hide the first html section and show the next
        $("question-container").style.display = "none";
        $("start-game-container").style.display = "flex";
        $("how-to-play-container").style.display = "none";

    }

    // Show how to play the game and changes the "yes-played-btn" text.
    function ShowHowToPlayPage(){
        $("how-to-play-container").style.display = "flex";
        $('yes-played-btn').innerText = "Lets Go"
    }

    function StartGamePageController(){

        // Call this function when player press start game button

        
        roundsPlayed++;

        if(roundsPlayed === 3){
            PopUp();
        }

        // Get the player name from text field.
        playerName = $('player-name').value;
        
        // Checks if the player has choosen a playername and knock out number
        CheckIfFormFilled();

    }
    
    function StartGame(){


        // Hide the start game container html element and show game screen
        $("start-game-container").style.display = "none";
        $("game-container").style.display = "flex";

        $("knock-out-number-label").innerText = `Knock Out Number: ${knockOutNumber}`;
        // Greet the player
        //GreetPlayer();

        // Start the timer by calling timer.js script
        Timer();  
        
    }

    function CheckIfFormFilled(){

        // If the player has choosen booth name and knock out number start the game
        if(playerName && knockOutNumber){
            StartGame();
        }
        // else encourage the player to make their choices by changing text 
        else{
            
            $('question-name-h1').innerHTML = '! Have you choosen your name !';
            $('knock-out-picker-h1').innerHTML="! Have you selected your number !"
        }
        

    }
/*
    function GreetPlayer(){

        // Add the player name to greeting
        $('player-greeting').innerHTML = ` ${playerName}`;
        
    }
*/
    function GetKnockOutNumber(_knockOutNumber){ // Gets its parameter from onclick event in html
        
        // Assign choosen knock ou number to global variable knockOutNumber
        knockOutNumber = _knockOutNumber;
        
        // Determine which button beeing press and highlight it and make other buttons original color
        if(knockOutNumber === 6){
            $('knock-out-number-btn-6').style.backgroundColor = 'white';
            $('knock-out-number-btn-7').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-8').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-9').style.backgroundColor = '#6B6E70';
        }
        else if(_knockOutNumber === 7){
            $('knock-out-number-btn-7').style.backgroundColor = 'white';
            $('knock-out-number-btn-6').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-8').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-9').style.backgroundColor = '#6B6E70';
        }
        else if(_knockOutNumber === 8){
            $('knock-out-number-btn-8').style.backgroundColor = 'white';
            $('knock-out-number-btn-6').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-7').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-9').style.backgroundColor = '#6B6E70';
        }
        else if(_knockOutNumber === 9){
            $('knock-out-number-btn-9').style.backgroundColor = 'white';
            $('knock-out-number-btn-6').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-7').style.backgroundColor = '#6B6E70';
            $('knock-out-number-btn-8').style.backgroundColor = '#6B6E70';
        }

    }

