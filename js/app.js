// JAvascript Drum Kit

let listButtons = document.getElementsByTagName("button");
console.log(listButtons);

for (let i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener("click", function () {
        // console.log("clicked");
        let buttonText = this.innerHTML;
        makeSound(buttonText);
    })
}

//keypress

document.addEventListener("keypress", function (e) {
    let keyPressed = e.key;
    makeSound(keyPressed);
})

function makeSound(letterClickedOrPressed) {
    switch (letterClickedOrPressed) {
        case "w":
            let tom1 = new Audio("sounds/w.wav");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/a.wav");
            tom2.play();
            break;

        case "j":
            let tom3 = new Audio("sounds/j.wav");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/d.wav");
            tom4.play();
            break;

        case "s":
            let tom5 = new Audio("sounds/s.wav");
            tom5.play();
            break;

        case "k":
            let tom6 = new Audio("sounds/k.wav");
            tom6.play();
            break;

        case "l":
            let tom7 = new Audio("sounds/l.wav");
            tom7.play();
            break;
    }
    buttonAnimation(letterClickedOrPressed);
}

function buttonAnimation(letterClickedOrPressed) {
    let buttonAnimation = document.getElementsByClassName(letterClickedOrPressed)[0];
    //if to prevent console error 
    if (buttonAnimation) {

        buttonAnimation.classList.add("pressed");


        setTimeout(function () {
            buttonAnimation.classList.remove("pressed");
        }, 200);;
    }

}