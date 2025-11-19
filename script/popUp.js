// $ function takes one paramater(_id) and returns document.getElementById(id)
function $(_id){
    return document.getElementById(_id);
}

// Global varibale
let playerEmail; // Could verify email adress, save in database and use for later 

// Takes html element id and returns method for creating element
function Create(_element){
    return document.createElement(_element);
}

// Takes html element class and returns method
function GetEl(_element){
    return document.querySelector(_element);
}

// Returns id of pop up container
function ParentElement(){
    return 'popUp-container';
}

// Creates the pop up where the player can pay with giving me their email to unlock a x2 multiplier
// Is called by StartGamePageController function inside handleForm.js when the user is about to start game 3
function PopUp(){

//Creates the pop up container and child elements
PopUpContainer();
CloseBtn();
FirstHeadLine();
SecondHeadLine();
InputField();
BuyBtn();

// Check if the player press the buy btn
// If is pressed do simple check of email adress to make sure its a valid email
// If valid email then call function "TransactionOK"
// Else advise the player to enter a valid email
$('buy').addEventListener('click', function(){
      
    playerEmail = $('mail').value;
    if(playerEmail){
        let emailOK = checkEmail();
        if(emailOK){
            TransactionOK();
        }
        else{
            $('secondHeadLine').innerText = 'You need to enter a VALID email';
            $('secondHeadLine').style.color = 'red';
        }
    }
    else{
        $('secondHeadLine').innerText = 'You need to enter your email';
        $('secondHeadLine').style.color = 'red';
    }
    })

// Check if player clicks the "close" button
// If clicked close the pop up
$('closePopUp').addEventListener('click', function(){
    $('popUp-container').style.display = 'none';
})
}

// If player buy the multiplier activate the multiplier, close pop up and show multiplier img
function TransactionOK(){
    multiplier = true;
    $('popUp-container').style.display = 'none';
    ShowMultiplierImg();


}

// Checks if user entered a valid email adress and returns true or false
function checkEmail(){

    if(playerEmail.includes('@') && playerEmail.includes('.')){
        console.log('Valid Email');
        return true;
    }

    else{
        console.log('Email NOT Valid')
        return false;

    }
    
}

// ## CREATE HTML ELEMENTS ## 

// Create the container
function PopUpContainer(){
    let container = Create('div')
    let parentEl = GetEl('body')
    container.setAttribute('id','popUp-container')
    parentEl.prepend(container);
}

// Create Close button
function CloseBtn(){
    let btn = Create('a');
    let parentEl = $(ParentElement());
    btn.innerHTML = '&times;';
    btn.setAttribute('href', '#')
    btn.setAttribute('id', 'closePopUp');

    parentEl.appendChild(btn);
}

// Create head line 1
function FirstHeadLine(){
    let headLine = Create('h1');
    let parentEl = $(ParentElement());
    headLine.innerText = 'Would you like a higher score?'
    parentEl.appendChild(headLine);
}

// Create head line 2
function SecondHeadLine(){
    let headLine = Create('h2');
    let parentEl = $(ParentElement());
    headLine.setAttribute('id', 'secondHeadLine');
    headLine.innerText = 'Pay with you email';
    parentEl.appendChild(headLine);
}

// Create a text input field
function InputField(){
    let inputText = Create('input'); 
    let parentEl = $(ParentElement());
    inputText.setAttribute('placeholder', 'E-mail');
    inputText.setAttribute('id', 'mail');
    parentEl.appendChild(inputText);
}

// Create a buy button
function BuyBtn(){
    let btn = Create('button');
    let parentEl = $(ParentElement());
    btn.innerText = 'Buy x2 multiplier';
    btn.setAttribute('id', 'buy');
    parentEl.appendChild(btn);
}

// Creates an img that show "2x" image on screen when the player unlocks the multiplier
function ShowMultiplierImg(){
    let multiplier = Create('img');
    let parentEl = $('multiplier');
    multiplier.src = 'images/multi.png';
    parentEl.appendChild(multiplier);

    $('multiplier').style.display = 'flex';
}

