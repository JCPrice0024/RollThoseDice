// rollThoseDice generates 2 random numbers and using those numbers it does 2 things. First it picks an image wiht the dice face
// that corresponds to the roll. Secondly it takes those numbers and compares them to declare the winner of the roll.
function rollThoseDice() {
    var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    
    document.querySelector(".dice-img1").setAttribute("src", images[randomNum1]); 
    document.querySelector(".dice-img2").setAttribute("src", images[randomNum2]); 

    if (randomNum1 > randomNum2) {
        document.querySelector(".title-heading").innerHTML = "<i class='fa-solid fa-flag victory'></i> Player 1 Wins!!"
    } else if (randomNum1 < randomNum2) {
        document.querySelector(".title-heading").innerHTML = "Player 2 Wins!! <i class='fa-solid fa-flag victory'></i>"
    } else {
        document.querySelector(".title-heading").innerHTML = "It's a Draw"
    }
}
