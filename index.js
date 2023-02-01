// //Normal function
// document.querySelector(".drum").addEventListener("click", alertButton);
// function alertButton() {
//     alert("I got clicked");
// };

// Anonymous function
let buttons = document.querySelectorAll(".drum");
for(let i=0; i<buttons.length;i++) {

    buttons[i].addEventListener("mousedown", function() {
        let key = this.innerHTML;
        playSound(key);
        this.classList.add("pressed");
    });

    buttons[i].addEventListener("mouseup", function() {
        this.classList.remove("pressed");
    });

    buttons[i].addEventListener("mouseout", function() {
        this.classList.remove("pressed");
    });

}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    button = document.querySelector("."+event.key);
    button.classList.add("pressed");
    console.log(button);
});

document.addEventListener("keyup", function(event) {
    let key = event.key;
    button = document.querySelector("."+event.key);
    button.classList.remove("pressed");
});

function playSound(key){
         // let audio = new Audio('sounds\\tom-'+(i+1)+'.mp3');
        // audio.play();

        let keySound = {"w": "tom-1", "a": "tom-2", "s": "tom-3", "d": "tom-4", "j": "snare", "k": "crash", "l": "kick-bass"};
        let audio = new Audio('sounds\\'+keySound[key]+'.mp3');
        
        // switch (this.innerHTML) {
        //     case "w":
        //         audioName = "tom-1";
        //         break;
        //     case "a":
        //         audioName = 'tom-2';
        //         break;
        //     case "s":
        //         audioName = 'tom-3';
        //         break;
        //     case "d":
        //         audioName = 'tom-4';
        //         break;
        //     case "j":
        //         audioName = 'kick-bass';
        //         break;
        //     case "k":
        //         audioName = 'crash';
        //         break;
        //     case "l":
        //         audioName = 'snare';
        //         break;  
        // }

        // let audio = new Audio('sounds/'+audioName+'.mp3');
        audio.play();
}

