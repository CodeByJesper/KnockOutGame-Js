// Script for animating the dice roll

// $ = function takes one paramater(_id) and returns document.getElementById(id)
function $(_id){
    return document.getElementById(_id);
}

function animateSpinDice(){

    // Get html elements and store them
    let diceOne = $("game-dice-one");
    let diceTwo = $("game-dice-two");

    // Declare current rotation
    let currentRotation = 0;

    // Declare a timer using setInterval method passing animation and frames of animation
    let timer = setInterval(animation, 1);
    
    function animation(){

        // Determine if currentrotation is less than 360 degrees
        if(currentRotation < 360)
        {   
        //increment rotation with 1
        currentRotation++;

        // Do the rotation of dice images
        diceOne.style.transform = `rotate(${currentRotation}deg)`;
        diceTwo.style.transform = `rotate(${currentRotation}deg)`;  

        // Disable roll button while animating
        DisableRollBtn();

        }
        else{
        // If the animation is completed - stop it
        clearInterval(timer);  
        
        //Activate roll button after animation completes
        ActivateRollBtn();

        }       
    }
}

// Deactivated for testing purposes

function DisableRollBtn(){

    // Disable html button that spins the two dices
    $('roll').disabled = true;

}

function ActivateRollBtn(){
    
        //Activates the html button that spins the two dices
        btn = $('roll').disabled = false;

}


