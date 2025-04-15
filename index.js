// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked");
// }

// >>> Alternative way for useing addEventListener <<<
// document.querySelectorAll("button").addEventListener("click",function(){
//     alert("I got clicked"); // What to do when click detected
// });

// let drum_Btn_List = document.querySelectorAll(".drum"); // returns an array of all html elements in the class "drum"
// for (let i = 0; i < drum_Btn_List.length; i++){
//     drum_Btn_List[i].addEventListener("click",function(){
//         alert("I got clicked"); // What to do when click detected
//     });
// }

function makeSound(key){
    switch(key){
        case "w":
            tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d": 
            tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":    
            snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log("Something went wrong");
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); // add the class .pressed to the button whrn the function is called
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
     // remove the class .pressed to the button whrn the function is called, after 100 ms
}



let drum_Btn_List = document.querySelectorAll(".drum"); // returns an array of all html elements in the class "drum"

for (let i = 0; i < drum_Btn_List.length; i++){
        drum_Btn_List[i].addEventListener("click",function(){
        //  console.log(this.innerHTML);
        let buttonInnerHTML = this.innerHTML; //The keyword this is a special variable that refers to the context in which the current code is running.
        // in this case is the button element (selected by the document.querySelectorAll(".drum"))
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Other way to it:
// let soundList = ["tom-1.mp3","tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];
// for (let i = 0; i < drum_Btn_List.length; i++){
//     drum_Btn_List[i].addEventListener("click",function(){
//         //  console.log(this.innerHTML);
//         // let buttonInnerHTML = this.innerHTML;
//         let audio = new Audio("sounds/" + soundList[i]);
//         audio.play();
//     });
// }
    
document.addEventListener("keydown", function(event){ // whenever a key is pressed the makeSound() will be called
    makeSound(event.key); // event.key gets which key was pressed
    buttonAnimation(event.key);
});

