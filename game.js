let score = 0;
let pointsPerClick = 1;


const updateDisplay = () => {
    const scoreElement = document.getElementById("score-display");
    const rateElement = document.getElementById("rate-display")

    scoreElement.textContent = 'Height: ' + score;
    rateElement.textContent = 'Inches per click: ' + pointsPerClick;
}

const clickButton = document.getElementById("click-btn");

clickButton.addEventListener("click", () => {
    score += pointsPerClick;
    updateDisplay();
});