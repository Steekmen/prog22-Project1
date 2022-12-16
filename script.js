// Created 2 variables and bound them with dinosaur and cactus
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// Specify that the keybord will trigger function
document.addEventListener("keydown", function (event) {
    jump();
});

// Adds a "jump" class to "dino" and removes it after 0.3s
function jump() {

    if (dino.classList != "jump") {  // Makes sure that class "jump" is adds only when it is absent
        // Otherwise the "dino" will start the jump animation when it is not over yet

        dino.classList.add("jump") // Adds class "jump"

        setTimeout(function () {
            dino.classList.remove("jump") // Set the time when the jump is over
        }, 300)
    }
}

// Scoring variables
let timer;
let points;
const showPoints = document.getElementById("your-points");

function start() {
    points = 0; // Resseting our score after the start
    cactus.classList.add("start") // Start the game by clicking on the button (cactus movement to the left)

    // Disable "start" button during game
    document.querySelector(".button").disabled = true;

    let isAlive = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")); // Get current dino Y (top) position
        console.log(dinoTop)
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); // Get current cactus X (left) position

        // Setting boundaries for stopping the game
        if (cactusLeft < 41 && cactusLeft > 0 && dinoTop >= 119) {
            cactus.classList.remove("start") // Stopping cactus movement

            // Stops position checking
            clearInterval(isAlive)

            // Stopping scoring, "points"
            clearInterval(timer)
            alert("Your Game is Over! Your points: " + points) // Displays your points

            // Reactivate "start" button after the game is over
            document.querySelector(".button").disabled = false;
        }
    }, 10)

    // Function that gives points
    timer = setInterval(function () {
        points++;
        showPoints.textContent = points;
    }, 100)
}