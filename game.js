let score = 0;
let pointsPerClick = 1;

const upgrades = [
    {id: 1, name: "Large Watering Can", cost: 3, bonus: 4},
    {id: 2, name: "Medium Watering Can", cost: 1, bonus: 2}
]

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

// const uprgadesSection = document.getElementById("upgrades");
// uprgadesSection.innerHTML += upgrades.forEach(e => `<p>${e.id}</p>`);