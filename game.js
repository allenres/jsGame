let score = 0;
let pointsPerClick = 1;

const upgrades = [
    {id: 1, name: "Large Watering Can", cost: 100, bonus: 4, timesBought: 0},
    {id: 2, name: "Medium Watering Can", cost: 50, bonus: 2, timesBought: 0},
    {id: 3, name: "Garden Hose", cost: 1000, bonus: 40, timesBought: 0},
]

const updatePlantImage = () => {
    const plantImg = document.getElementById("plant-image");
    
    if (score >= 1000) {
        plantImg.src = "images/s3.png"; 
    } else if (score >= 100) {
        plantImg.src = "images/s2.png"; 
    } else {
        plantImg.src = "images/s1.png";
    }
}

const updateDisplay = () => {
    const scoreElement = document.getElementById("score-display");
    const rateElement = document.getElementById("rate-display")

    scoreElement.textContent = 'Height (inches): ' + score;
    rateElement.textContent = 'Growth per Click: ' + pointsPerClick;

    updatePlantImage();
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
        upgradeElement.className = "upgrade-item";
        
        if (score < el.cost) {
            upgradeElement.classList.add("locked");
        }

        const button = document.createElement("button");
        button.textContent = "Purchase Upgrade";
        button.onclick = () => buyUpgrade(el.id);

        if (score < el.cost) {
            button.setAttribute('disabled', 'true');
        }

        upgradeElement.innerHTML = `
            <strong>${el.name}</strong>
            <p class="cost-text">Cost: ${el.cost} inches</p>
            <p>Bonus Growth: +${el.bonus} per click</p>
            <p>Times bought: ${el.timesBought}</p>
        `;

        upgradeElement.appendChild(button);
        upgradesSection.appendChild(upgradeElement);
    });
}
renderUpgrades();

const buyUpgrade = (id) => {
    const upgrade = upgrades[id - 1];
    // if player can afford
    if(score >= upgrade.cost) {
        score -= upgrade.cost;
        // Scale cost
        upgrade.cost = upgrade.cost * 2;
        pointsPerClick += upgrade.bonus;
        //Track how many times each upgrade has been purchased and show count
        upgrade.timesBought += 1;
        updateDisplay();
        renderUpgrades();
    }  
}

// Auto increment
const pointIncrement = () => {
    score += 1;
    updateDisplay();
    renderUpgrades();
}

setInterval(pointIncrement, 1000);