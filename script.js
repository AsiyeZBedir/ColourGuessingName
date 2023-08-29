const numColors = 6;
let colors = [];
let pickedColor;

const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const colorButtons = document.getElementById("colorButtons");
const resetButton = document.getElementById("resetBtn");

init();

function init() {
    setupColorButtons();
    resetGame();
    resetButton.addEventListener("click", resetGame);
}

function setupColorButtons() {
    for (let i = 0; i < numColors; i++) {
        const colorButton = document.createElement("div");
        colorButton.classList.add("colorButton");
        colorButtons.appendChild(colorButton);

        colorButton.addEventListener("click", function () {
            const clickedColor = colors[i];
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Doğru!";
                changeColors(clickedColor);
                resetButton.textContent = "Tekrar Oyna";
            } else {
                colorButton.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Yanlış, tekrar deneyin.";
            }
        });
    }
}

function resetGame() {
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Yeniden Başla";
    messageDisplay.textContent = "";

    for (let i = 0; i < colorButtons.children.length; i++) {
        const colorButton = colorButtons.children[i];
        if (colors[i]) {
            colorButton.style.backgroundColor = colors[i];
            colorButton.style.display = "block";
        } else {
            colorButton.style.display = "none";
        }
    }

    colorDisplay.style.backgroundColor = "steelblue";
}

function generateRandomColors(num) {
    const colorArr = [];
    for (let i = 0; i < num; i++) {
        colorArr.push(randomColor());
    }
    return colorArr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColors(color) {
    for (let i = 0; i < colorButtons.children.length; i++) {
        colorButtons.children[i].style.backgroundColor = color;
    }
    colorDisplay.style.backgroundColor = color;
}
