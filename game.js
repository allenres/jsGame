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
    renderUpgrades();
});


const renderUpgrades = () => {
    const upgradesSection = document.getElementById("upgrades");
    upgradesSection.innerHTML = "";

    upgrades.forEach(el => {
        const upgradeElement = document.createElement("div");

        const button = document.createElement("button");
        button.textContent = "Buy Upgrade";
        button.onclick = () => buyUpgrade(el.id);

        if(score < el.cost){
            button.setAttribute('disabled', 'true');
        }

        upgradeElement.innerHTML = `
            <p>${el.name}</p>
            <p>${el.cost}</p>
            <p>${el.bonus}</p>`;

        upgradeElement.appendChild(button);
        upgradesSection.appendChild(upgradeElement);
    })
}

const buyUpgrade = (id) => {
    const upgrade = upgrades[id - 1];
    // if player can afford
    if(score >= upgrade.cost) {
        score -= upgrade.cost;
        pointsPerClick += upgrade.bonus;
        updateDisplay();
        renderUpgrades();
    }  
}

renderUpgrades();

const pointIncrement = () => {
    score += 1;
    updateDisplay();
    renderUpgrades();
}

setInterval(pointIncrement, 1000);