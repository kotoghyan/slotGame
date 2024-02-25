// Selecting the necessary elements from the DOM
const volumeButton = document.getElementById("slotGameVideoVolumeControlButton");
const volumeIcon = document.getElementById("slotGameVideoVolumeControl");
const video = document.getElementById("slotGameVideo");
const flag = document.querySelector(".slot-game-flag");
const fireworks = document.querySelector(".slot-game-fireworks");

const userName = document.querySelector(".slot-game-machine-user-email-text");
const blueText1 = document.querySelector(".slot-game-machine-prize-text2");
const prize = document.querySelector(".slot-game-machine-prize-text-second");
const blueText2 = document.querySelector(".slot-game-machine-prize-text3");

// Initializing the spin count
let spinCount = 3;


// Setting the initial text content for the user name
userName.textContent = "User Name";  //PLACEHOLDER

/**
 * Function to set the victory position text
 */
function victoryPosition() {
    if (spinCount === 0) return;

    const prizeText = ["1ST", "2ND", "3RD"];
    blueText1.textContent = `${prizeText[spinCount - 1]} PRIZE!`; //PLACEHOLDER
}

victoryPosition()

blueText2.textContent = "CREDIT"; //PLACEHOLDER
prize.textContent = "$2500"; //PLACEHOLDER

// Initializing the win condition
let winCondition = ""; //We need to get the win condition from the server response and set it here


/**
 * Function to simulate a fetch request
 * @returns {Promise} A promise that resolves with a mock response object
 */
function fetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                winner: "asdfghjklmnn",
                state: "win",
                error: "asd",
            });
        }, 3000);
    });
}

// Array of characters for the slot machine
const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

// Array of paths for the spinner images
const spinnerImagesPaths = [
    "./assets/slot/spinner/Pen_00001.png",
    "./assets/slot/spinner/Pen_00002.png",
    "./assets/slot/spinner/Pen_00003.png",
    "./assets/slot/spinner/Pen_00004.png",
    "./assets/slot/spinner/Pen_00005.png",
    "./assets/slot/spinner/Pen_00006.png",
    "./assets/slot/spinner/Pen_00007.png",
    "./assets/slot/spinner/Pen_00008.png",
    "./assets/slot/spinner/Pen_00009.png",
    "./assets/slot/spinner/Pen_00010.png",
    "./assets/slot/spinner/Pen_00011.png",
    "./assets/slot/spinner/Pen_00012.png",
    "./assets/slot/spinner/Pen_00013.png",
    "./assets/slot/spinner/Pen_00014.png",
];

// Array of paths for the flag images
const flagImagesPaths = [
    './assets/slot/flag/Flag_00080.png',
    './assets/slot/flag/Flag_00081.png',
    './assets/slot/flag/Flag_00082.png',
    './assets/slot/flag/Flag_00083.png',
    './assets/slot/flag/Flag_00084.png',
    './assets/slot/flag/Flag_00085.png',
    './assets/slot/flag/Flag_00086.png',
    './assets/slot/flag/Flag_00087.png',
    './assets/slot/flag/Flag_00088.png',
    './assets/slot/flag/Flag_00089.png',
    './assets/slot/flag/Flag_00090.png',
    './assets/slot/flag/Flag_00091.png',
    './assets/slot/flag/Flag_00092.png',
    './assets/slot/flag/Flag_00093.png',
    './assets/slot/flag/Flag_00094.png',
    './assets/slot/flag/Flag_00095.png',
    './assets/slot/flag/Flag_00096.png',
    './assets/slot/flag/Flag_00097.png',
    './assets/slot/flag/Flag_00098.png',
    './assets/slot/flag/Flag_00099.png',
    './assets/slot/flag/Flag_00100.png',
    './assets/slot/flag/Flag_00101.png',
    './assets/slot/flag/Flag_00102.png',
    './assets/slot/flag/Flag_00103.png',
    './assets/slot/flag/Flag_00104.png',
    './assets/slot/flag/Flag_00105.png',
    './assets/slot/flag/Flag_00106.png',
    './assets/slot/flag/Flag_00107.png',
    './assets/slot/flag/Flag_00108.png',
    './assets/slot/flag/Flag_00109.png',
    './assets/slot/flag/Flag_00110.png',
    './assets/slot/flag/Flag_00111.png',
    './assets/slot/flag/Flag_00112.png',
]

// Array of paths for the fireworks images
const fireworksImagesPaths = [
    './assets/slot/fireworks/Salut_00005.png',
    './assets/slot/fireworks/Salut_00006.png',
    './assets/slot/fireworks/Salut_00007.png',
    './assets/slot/fireworks/Salut_00008.png',
    './assets/slot/fireworks/Salut_00009.png',
    './assets/slot/fireworks/Salut_00010.png',
    './assets/slot/fireworks/Salut_00011.png',
    './assets/slot/fireworks/Salut_00012.png',
    './assets/slot/fireworks/Salut_00013.png',
    './assets/slot/fireworks/Salut_00014.png',
    './assets/slot/fireworks/Salut_00015.png',
    './assets/slot/fireworks/Salut_00016.png',
    './assets/slot/fireworks/Salut_00017.png',
    './assets/slot/fireworks/Salut_00018.png',
    './assets/slot/fireworks/Salut_00019.png',
    './assets/slot/fireworks/Salut_00020.png',
    './assets/slot/fireworks/Salut_00021.png',
    './assets/slot/fireworks/Salut_00022.png',
    './assets/slot/fireworks/Salut_00023.png',
    './assets/slot/fireworks/Salut_00024.png',
    './assets/slot/fireworks/Salut_00025.png',
    './assets/slot/fireworks/Salut_00026.png',
    './assets/slot/fireworks/Salut_00027.png',
    './assets/slot/fireworks/Salut_00028.png',
    './assets/slot/fireworks/Salut_00029.png',
    './assets/slot/fireworks/Salut_00030.png',
    './assets/slot/fireworks/Salut_00031.png',
    './assets/slot/fireworks/Salut_00032.png',
    './assets/slot/fireworks/Salut_00033.png',
    './assets/slot/fireworks/Salut_00034.png',
    './assets/slot/fireworks/Salut_00035.png',
    './assets/slot/fireworks/Salut_00036.png',
    './assets/slot/fireworks/Salut_00037.png',
    './assets/slot/fireworks/Salut_00038.png',
    './assets/slot/fireworks/Salut_00039.png',
    './assets/slot/fireworks/Salut_00040.png',
    './assets/slot/fireworks/Salut_00041.png',
    './assets/slot/fireworks/Salut_00042.png',
    './assets/slot/fireworks/Salut_00043.png',
    './assets/slot/fireworks/Salut_00044.png',
    './assets/slot/fireworks/Salut_00045.png',
    './assets/slot/fireworks/Salut_00046.png',
    './assets/slot/fireworks/Salut_00047.png',
    './assets/slot/fireworks/Salut_00048.png',
    './assets/slot/fireworks/Salut_00049.png',
    './assets/slot/fireworks/Salut_00050.png',
    './assets/slot/fireworks/Salut_00051.png',
    './assets/slot/fireworks/Salut_00052.png',
    './assets/slot/fireworks/Salut_00053.png',
    './assets/slot/fireworks/Salut_00054.png',
    './assets/slot/fireworks/Salut_00055.png',
    './assets/slot/fireworks/Salut_00056.png',
    './assets/slot/fireworks/Salut_00057.png',
    './assets/slot/fireworks/Salut_00058.png',
    './assets/slot/fireworks/Salut_00059.png',
    './assets/slot/fireworks/Salut_00060.png',
    './assets/slot/fireworks/Salut_00061.png',
    './assets/slot/fireworks/Salut_00062.png',
    './assets/slot/fireworks/Salut_00063.png',
    './assets/slot/fireworks/Salut_00064.png',
    './assets/slot/fireworks/Salut_00065.png',
    './assets/slot/fireworks/Salut_00066.png',
    './assets/slot/fireworks/Salut_00067.png',
    './assets/slot/fireworks/Salut_00068.png',
    './assets/slot/fireworks/Salut_00069.png',
    './assets/slot/fireworks/Salut_00070.png',
    './assets/slot/fireworks/Salut_00071.png',
    './assets/slot/fireworks/Salut_00072.png',
    './assets/slot/fireworks/Salut_00073.png',
    './assets/slot/fireworks/Salut_00074.png',
    './assets/slot/fireworks/Salut_00075.png',
    './assets/slot/fireworks/Salut_00076.png',
    './assets/slot/fireworks/Salut_00077.png',
    './assets/slot/fireworks/Salut_00078.png',
    './assets/slot/fireworks/Salut_00079.png',
    './assets/slot/fireworks/Salut_00080.png',
    './assets/slot/fireworks/Salut_00081.png',
    './assets/slot/fireworks/Salut_00082.png',
    './assets/slot/fireworks/Salut_00083.png',
    './assets/slot/fireworks/Salut_00084.png',
    './assets/slot/fireworks/Salut_00085.png',
    './assets/slot/fireworks/Salut_00086.png',
    './assets/slot/fireworks/Salut_00087.png',
    './assets/slot/fireworks/Salut_00088.png',
    './assets/slot/fireworks/Salut_00089.png',
    './assets/slot/fireworks/Salut_00090.png',
    './assets/slot/fireworks/Salut_00091.png',
    './assets/slot/fireworks/Salut_00092.png',
    './assets/slot/fireworks/Salut_00093.png',
    './assets/slot/fireworks/Salut_00094.png',
    './assets/slot/fireworks/Salut_00095.png',
    './assets/slot/fireworks/Salut_00096.png',
    './assets/slot/fireworks/Salut_00097.png',
    './assets/slot/fireworks/Salut_00098.png',
    './assets/slot/fireworks/Salut_00099.png',
    './assets/slot/fireworks/Salut_00100.png',
    './assets/slot/fireworks/Salut_00101.png',
    './assets/slot/fireworks/Salut_00102.png',
    './assets/slot/fireworks/Salut_00103.png',
    './assets/slot/fireworks/Salut_00104.png',
    './assets/slot/fireworks/Salut_00105.png',
    './assets/slot/fireworks/Salut_00106.png',
    './assets/slot/fireworks/Salut_00107.png',
    './assets/slot/fireworks/Salut_00108.png',
    './assets/slot/fireworks/Salut_00109.png',
    './assets/slot/fireworks/Salut_00110.png',
    './assets/slot/fireworks/Salut_00111.png',
    './assets/slot/fireworks/Salut_00112.png',
    './assets/slot/fireworks/Salut_00113.png',
    './assets/slot/fireworks/Salut_00114.png',
    './assets/slot/fireworks/Salut_00115.png',
    './assets/slot/fireworks/Salut_00116.png',
    './assets/slot/fireworks/Salut_00117.png',
    './assets/slot/fireworks/Salut_00118.png',
    './assets/slot/fireworks/Salut_00119.png',
    './assets/slot/fireworks/Salut_00120.png',
    './assets/slot/fireworks/Salut_00121.png',
    './assets/slot/fireworks/Salut_00122.png',
    './assets/slot/fireworks/Salut_00123.png',
    './assets/slot/fireworks/Salut_00124.png',
    './assets/slot/fireworks/Salut_00125.png',
    './assets/slot/fireworks/Salut_00126.png',
    './assets/slot/fireworks/Salut_00127.png',
    './assets/slot/fireworks/Salut_00128.png',
    './assets/slot/fireworks/Salut_00129.png',
    './assets/slot/fireworks/Salut_00130.png',
    './assets/slot/fireworks/Salut_00131.png',
    './assets/slot/fireworks/Salut_00132.png',
    './assets/slot/fireworks/Salut_00133.png',
    './assets/slot/fireworks/Salut_00134.png',
    './assets/slot/fireworks/Salut_00135.png',
    './assets/slot/fireworks/Salut_00136.png',
    './assets/slot/fireworks/Salut_00137.png',
    './assets/slot/fireworks/Salut_00138.png',
    './assets/slot/fireworks/Salut_00139.png',
    './assets/slot/fireworks/Salut_00140.png',
    './assets/slot/fireworks/Salut_00141.png',
    './assets/slot/fireworks/Salut_00142.png',
    './assets/slot/fireworks/Salut_00143.png',
    './assets/slot/fireworks/Salut_00144.png',
    './assets/slot/fireworks/Salut_00145.png',
    './assets/slot/fireworks/Salut_00146.png',
    './assets/slot/fireworks/Salut_00147.png',
    './assets/slot/fireworks/Salut_00148.png',
    './assets/slot/fireworks/Salut_00149.png',
    './assets/slot/fireworks/Salut_00150.png',
    './assets/slot/fireworks/Salut_00151.png',
    './assets/slot/fireworks/Salut_00152.png',
    './assets/slot/fireworks/Salut_00153.png',
    './assets/slot/fireworks/Salut_00154.png',
    './assets/slot/fireworks/Salut_00155.png',
    './assets/slot/fireworks/Salut_00156.png',
    './assets/slot/fireworks/Salut_00157.png',
    './assets/slot/fireworks/Salut_00158.png',
    './assets/slot/fireworks/Salut_00159.png',
    './assets/slot/fireworks/Salut_00160.png',
    './assets/slot/fireworks/Salut_00161.png',
    './assets/slot/fireworks/Salut_00162.png',
    './assets/slot/fireworks/Salut_00163.png',
    './assets/slot/fireworks/Salut_00164.png',
    './assets/slot/fireworks/Salut_00165.png',
    './assets/slot/fireworks/Salut_00166.png',
    './assets/slot/fireworks/Salut_00167.png',
    './assets/slot/fireworks/Salut_00168.png',
    './assets/slot/fireworks/Salut_00169.png',
    './assets/slot/fireworks/Salut_00170.png',
    './assets/slot/fireworks/Salut_00171.png',
    './assets/slot/fireworks/Salut_00172.png',
    './assets/slot/fireworks/Salut_00173.png',
    './assets/slot/fireworks/Salut_00174.png',
    './assets/slot/fireworks/Salut_00175.png',
    './assets/slot/fireworks/Salut_00176.png',
    './assets/slot/fireworks/Salut_00177.png',
    './assets/slot/fireworks/Salut_00178.png',
    './assets/slot/fireworks/Salut_00179.png',
    './assets/slot/fireworks/Salut_00180.png',
    './assets/slot/fireworks/Salut_00181.png',
    './assets/slot/fireworks/Salut_00182.png',
    './assets/slot/fireworks/Salut_00183.png',
    './assets/slot/fireworks/Salut_00184.png',
    './assets/slot/fireworks/Salut_00185.png',
    './assets/slot/fireworks/Salut_00186.png',
    './assets/slot/fireworks/Salut_00187.png',
    './assets/slot/fireworks/Salut_00188.png',
    './assets/slot/fireworks/Salut_00189.png',
    './assets/slot/fireworks/Salut_00190.png',
    './assets/slot/fireworks/Salut_00191.png',
    './assets/slot/fireworks/Salut_00192.png',
    './assets/slot/fireworks/Salut_00193.png',
    './assets/slot/fireworks/Salut_00194.png',
    './assets/slot/fireworks/Salut_00195.png',
    './assets/slot/fireworks/Salut_00196.png',
    './assets/slot/fireworks/Salut_00197.png',
    './assets/slot/fireworks/Salut_00198.png',
    './assets/slot/fireworks/Salut_00199.png',
    './assets/slot/fireworks/Salut_00200.png',
    './assets/slot/fireworks/Salut_00201.png',
    './assets/slot/fireworks/Salut_00202.png',
    './assets/slot/fireworks/Salut_00203.png',
    './assets/slot/fireworks/Salut_00204.png',
    './assets/slot/fireworks/Salut_00205.png',
    './assets/slot/fireworks/Salut_00206.png',
    './assets/slot/fireworks/Salut_00207.png',
    './assets/slot/fireworks/Salut_00208.png',
    './assets/slot/fireworks/Salut_00209.png',
    './assets/slot/fireworks/Salut_00210.png',
    './assets/slot/fireworks/Salut_00211.png',
    './assets/slot/fireworks/Salut_00212.png',
    './assets/slot/fireworks/Salut_00213.png',
    './assets/slot/fireworks/Salut_00214.png',
    './assets/slot/fireworks/Salut_00215.png',
    './assets/slot/fireworks/Salut_00216.png',
    './assets/slot/fireworks/Salut_00217.png',
    './assets/slot/fireworks/Salut_00218.png',
    './assets/slot/fireworks/Salut_00219.png',
    './assets/slot/fireworks/Salut_00220.png',
    './assets/slot/fireworks/Salut_00221.png',
]

/**
 * Function to start the game
 */
function start() {
    const startSpinner = document.getElementById("startSpinner");
    animateSpinner(startSpinner);
}

/**
 * Function to create a button container for the winner
 */
function crateButtonWinnerContainer() {
    // Selecting the main container
    const mainContainer = document.querySelector('.slot-game-wrapper')

    // Creating the button container and appending it to the main container
    const buttonContainer = createElem('div', 'slot-game-spinner-button-winner-container')
    mainContainer.appendChild(buttonContainer)

    // Creating the button and appending it to the button container
    const button = createElem('button', 'slot-game-spinner-button-winner')
    buttonContainer.appendChild(button)

    // Creating the image for the button and appending it to the button
    const imgButton = createElem('img')
    imgButton.src = 'assets/button/button.png'
    button.appendChild(imgButton)

    // Adding an event listener to the button to restart the game when clicked
    button.addEventListener("click", restartGame);
}

/**
 * Function to restart the game
 */
function restartGame() {
    // Resetting the opacity of the flag and fireworks
    flag.style.opacity = 0
    fireworks.style.opacity = 0

    // Removing the button container and the column container
    document.querySelector('.slot-game-spinner-button-winner-container').remove()
    document.querySelector('.slot-game-machine-column-container').remove()

    // Drawing the contents of the game
    drawContents()

    // Adding an event listener to the start spinner to start the game when clicked
    const startSpinner = document.getElementById("startSpinner");
    startSpinner.addEventListener("click", start);

    // Setting the victory position
    victoryPosition()
}

/**
 * Function to create an element
 * @param {string} tag - The tag name of the element
 * @param {string} className - The class name of the element
 * @param {string} text - The text content of the element
 * @returns {HTMLElement} The created element
 */
function createElem(tag, className, text) {
    const elem = document.createElement(tag);
    elem.className = className;
    if (text) elem.textContent = text;
    return elem;
}

let count = 0;

/**
 * Function to draw the contents of the game
 */
function drawContents() {
    const numColumns = 12;
    const numRows = 120;
    count++;

    // Selecting the container
    const container = document.getElementById("slotGameMachineContainer");

    // Creating the column containers and appending them to the container
    const columnContainer = createElem(
        "div",
        `slot-game-machine-column-container`
    );
    const columnContainer1 = createElem(
        "div",
        `slot-game-machine-column-container1`
    );

    columnContainer.appendChild(columnContainer1);

    // Creating the columns and rows and appending them to the column containers
    for (let i = 0; i < numColumns; i++) {
        const column1 = createElem("div", `slot-game-machine-column1`);
        for (let j = 0; j < numRows; j++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            const row = createElem("h2", "slot-game-machine-row", char);
            column1.appendChild(row);
        }

        columnContainer1.appendChild(column1);
    }

    container.appendChild(columnContainer);
}

/**
 * Function to create the spinner
 */
function createSpinner() {
    // Selecting the spinner container
    const spinnerContainer = document.getElementById(
        "slotGameMachineSpinnerContainer"
    );

    // Creating the spinner image and appending it to the spinner container
    const spinnerImage = document.createElement("img");

    spinnerImage.className = "slot-game-spinner";
    spinnerImage.id = "startSpinner";
    spinnerImage.src = "./assets/slot/spinner/Pen_00000.png";
    spinnerImage.alt = "spinner";

    spinnerContainer.appendChild(spinnerImage);
}

const spinnerImages = [];
spinnerImagesPaths.forEach((path) => {
    const img = new Image();
    img.src = path;
    spinnerImages.push(img);
})

/**
 * Function to animate the spinner
 * @param {HTMLImageElement} spinnerImage - The spinner image
 */
function animateSpinner(spinnerImage) {
    const startSpinner = document.getElementById("startSpinner");

    let index = 0;

    function animate() {
        spinnerImage.src = spinnerImagesPaths[index];
        index++;

        if (index < spinnerImagesPaths.length) {
            requestAnimationFrame(animate);
        } else {
            // we need to get the win condition from the server response and set it here i wait winner in string format
            //need assign to winCondition hear
            fetch().then((res) => {
                winCondition = res.winner.toUpperCase();
            });

            spin();
        }
    }

    animate();
    startSpinner.removeEventListener('click', start);
}


let flagAnimationId;
let fireworksAnimationId;

const flagImages = [];
flagImagesPaths.forEach((path) => {
    const img = new Image();
    img.src = path;
    flagImages.push(img);
});

/**
 * Function to animate the flag
 */
function animateFlag() {
    let index = 0;

    function animate() {
        flag.style.pointerEvents = "none";
        flag.src = flagImages[index].src;
        index = (index + 1) % flagImages.length;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

/**
 * Function to animate the fireworks
 */
const fireworksImages = [];
fireworksImagesPaths.forEach((path) => {
    const img = new Image();
    img.src = path;
    fireworksImages.push(img);
});

/**
 * Function to stop the flag animation
 */
function animateFireworks() {
    let index = 0;

    function animate() {
        fireworks.style.pointerEvents = "none";
        fireworks.src = fireworksImages[index].src;
        index = (index + 1) % fireworksImages.length;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}


function stopFlagAnimation() {
    cancelAnimationFrame(flagAnimationId);
}

function stopFireworksAnimation() {
    cancelAnimationFrame(fireworksAnimationId);
}

/**
 * Function to declare the winner
 */
function winner() {
    animateFlag()
    animateFireworks()
}

/**
 * Function to spin the slot machine
 */
function spin() {
    if (spinCount === 0) return

    spinCount--

    let loops1 = 0;
    let loops2 = 2;

    anime({
        targets: ".slot-game-machine-column1",
        top: "13650px",
        easing: "easeInQuad",
        delay: anime.stagger(25),
        duration: 5000,
        update: function (anim) {
            if (anim.progress >= 40) {
                document
                    .querySelectorAll(".slot-game-machine-column1")
                    .forEach((el) => {
                        anime.remove(el);
                    });
                anime({
                    targets: ".slot-game-machine-column1",
                    top: [
                        {value: "0px", duration: 0, delay: 0},
                        {value: "2200px", duration: 1000, delay: 0},
                    ],
                    easing: "linear",
                    loop: true,
                    loopComplete: function (param) {
                        loops1++;
                    },
                    update: function (anim) {
                        if (winCondition && loops1 === 2) {
                            document
                                .querySelectorAll(".slot-game-machine-column1")
                                .forEach((el) => {
                                    anime.remove(el);
                                });
                            document
                                .querySelectorAll(".slot-game-machine-column1")
                                .forEach((el) => {
                                    el.remove();
                                });

                            const numColumns = 12;
                            const numRows = 60;

                            const columnContainer = document.querySelector(
                                ".slot-game-machine-column-container"
                            );

                            const columnContainer2 = createElem(
                                "div",
                                `slot-game-machine-column-container2`
                            );

                            for (let i = 0; i < numColumns; i++) {
                                loops2++;
                                const column2 = createElem("div", `slot-game-machine-column2`);
                                for (let j = 0; j < numRows; j++) {
                                    const char =
                                        characters[Math.floor(Math.random() * characters.length)];
                                    const row = createElem(
                                        "h2",
                                        `slot-game-machine-row number-${j}`,
                                        char
                                    );
                                    column2.appendChild(row);
                                }

                                columnContainer2.appendChild(column2);
                            }
                            columnContainer.appendChild(columnContainer2);

                            let val = 0;

                            document.querySelectorAll(".number-36").forEach((el, index) => {
                                el.textContent = winCondition[index];
                            });

                            let update = 0
                            const row36 = document.querySelectorAll(".number-36");
                            row36.forEach((el) => {
                                el.style.color = 'black'
                            })

                            document
                                .querySelectorAll(".slot-game-machine-column2")
                                .forEach((el, i) => {
                                    anime({
                                        targets: el,
                                        top: `${2500}px`,
                                        duration: 2500 + val,
                                        easing: "easeOutQuart",
                                        update: function (anim) {
                                            if (anim.progress > 50 && update === 0) {
                                                update = 1
                                                flag.style.opacity = 1
                                                fireworks.style.opacity = 1
                                                crateButtonWinnerContainer()
                                                const winnerButton = document.querySelector(".slot-game-spinner-button-winner-container");
                                                winnerButton.style.opacity = 1
                                                winner()
                                            }
                                        },
                                    });
                                    val += 25;
                                });
                        }
                    },
                });
            }
        },
    });
}

// Function to create the spinner
createSpinner();

/**
 * Function to run the game
 * This function does the following:
 * 1. Draws the initial contents of the game
 * 2. Adds an event listener to the start spinner to start the game when clicked
 * 3. Adds an event listener to the volume button to mute/unmute the video when clicked
 */
function runGame() {
    // Draw the initial contents of the game
    drawContents();

    // Select the start spinner from the DOM
    const startSpinner = document.getElementById("startSpinner");

    // Add an event listener to the start spinner to start the game when clicked
    startSpinner.addEventListener("click", start);

    // Add an event listener to the volume button to mute/unmute the video when clicked
    volumeButton.addEventListener("click", () => {
        // If the video is currently muted, unmute it and change the volume icon to the volume on icon
        if (video.muted) {
            video.muted = false;
            volumeIcon.src = "assets/icons/volumeOn.svg";
        }
        // If the video is currently unmuted, mute it and change the volume icon to the volume off icon
        else {
            video.muted = true;
            volumeIcon.src = "assets/icons/volumeOff.svg";
        }
    });
}

// Run the game
runGame();
