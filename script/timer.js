// Script for timer
// $ = function takes one paramater(_id) and returns document.getElementById(id)
function $(_id){
    return document.getElementById(_id);
}

// Declare global variable (Colud format to minutes and seconds but i haven't)
let secondsElapsed = 0;
let myTimerInterval;

function Timer(){

    // Get html element and store them
    $('box').style.display = 'flex';
    
    // Start timer calling startTimer function and passing 1000ms as timeout
    myTimerInterval = setInterval(startTimer, 1000);
    
}
    
function startTimer(){

    // Increment secondsElapsed with 1
    secondsElapsed++;

    // Update the text of html timer element
    $("time-elapsed").innerHTML = `${secondsElapsed} seconds`;
        
}

function StopTimer(){

    // Stop the timer
    clearInterval(myTimerInterval);

}

