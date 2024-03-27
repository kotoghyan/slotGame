/**
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 * FIND PLACEHOLDER COMMENTS AND REPLACE THEM WITH THE NECESSARY CODE.
 */

/**
 * This JavaScript file is for a slot game. It includes the logic for the game's animations,
 * the game's state, and the game's interactions.
 */
// Get DOM elements
const volumeButton = document.getElementById(
  "slotGameVideoVolumeControlButton"
);
const bgVolumeButton = document.getElementById("slotGameAudioVolumeControlButton");

const volumeIcon = document.getElementById("slotGameVideoVolumeControl");
const bgVolumeIcon = document.getElementById("slotGameAudioVolumeControl");

const flag = document.querySelector(".slot-game-flag");
const video = document.getElementById("slotGameVideo");
const bgVideo = document.getElementById("slotGameVideoBg");
const firework = document.getElementById("fireworksId");

let flagAnimationId;

const userName = document.querySelector(".slot-game-machine-user-email-text");
const blueText1 = document.querySelector(".slot-game-machine-prize-text2");
const prize = document.querySelector(".slot-game-machine-prize-text-second");
const blueText2 = document.querySelector(".slot-game-machine-prize-text3");
// Create an fireworksAudio element
const letterAudio = new Audio("./assets/letter.mp3");
const fireworksAudio = new Audio("./assets/fireworks.mp3");
const applauseAudio = new Audio("./assets/applause.mp3");
const rollFinishAudio = new Audio("./assets/roll_finish.mp3");
const handlePullAudio = new Audio("./assets/handle_pull.mp3");
const scoreAudio =  new Audio("./assets/Score.mp3");
const bgAudio = document.getElementById("bgAudio");

fireworksAudio.loop = true;
scoreAudio.loop = true
scoreAudio.volume = .2
bgAudio.loop = true

const frontVideo = createElem("source", "frontVideo");
frontVideo.id = "slotGameVideoSource";
frontVideo.src = "assets/tv/declare_winner_walkthrough.mp4";
frontVideo.type = "video/mp4";
video.appendChild(frontVideo);


let spinCount = 3;

let winCondition = ""; //We need to get the win condition from the server response and set it here
let email = "";

/**
 * Function to set the user's name
 * @param {string} email - The user's email
 */
function setUserName(email = "") {
  userName.textContent = email;
}

/**
 * Function to set the victory position
 */
function victoryPosition() {
  if (spinCount === 0) return;

  const prizeText = ["1ST", "2ND", "3RD"];
  blueText1.textContent = `${prizeText[spinCount - 1]} PRIZE!`;
}

function setPrize(prizes) {
  prize.textContent = `$${prizes}`;
}

blueText2.textContent = "CREDIT"; //PLACEHOLDER

//TEMP start
let callBeckToStartText1Time = true;
let callResetGame1Time = true;
let anim1Time1;
let anim1Time2;
let anim1Time3;
let anim1Time4;
let anim1Time5;
let anim1Time6;
let soundTimeOutId;
let restartId;
let restartGameId;
let del = 1200;
let block = 0;
let createdColumns = 0;
let currentIndex = 0;
let prevIndex = 1;
let timeoutWin = 1000;
let colorBlocker = 0;
let firstOpen = 0;
let backToStartInterval;

/**
 * Function to clear animation timeouts
 */
function clearAnimTimeouts() {
  clearTimeout(anim1Time1);
  clearTimeout(anim1Time2);
  clearTimeout(anim1Time3);
  clearTimeout(anim1Time4);
  clearTimeout(anim1Time5);
  clearTimeout(anim1Time6);
  clearTimeout(restartId);
  clearTimeout(backToStartInterval);
  createdColumns = 0;
  currentIndex = 0;
  prevIndex = 1;
  timeoutWin = 1000;
  callBeckToStartText1Time = true;
  callResetGame1Time = true;
  block = 0;
  del = 1200;
  colorBlocker = 0;
}

//TEMP end
const START_TEXT = [" ", " ", "L", "M", "C", "T", " ", "P", "L", "U", "S", " "];

/**
 * Function to fetch data
 * @returns {Promise} - A promise that resolves with the winner and email
 */
function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        winner: "  LMCT PLUS ",
        email: "asdfg*******@gmail.com",
      });
    }, 3000);
  });
}

// Characters for the slot game
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

// Paths for the spinner images
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

// Paths for the bronze flag images
const bronzeFlagImagesPaths = [
  "./assets/slot/bronzeFlag/flag_00000.png",
  "./assets/slot/bronzeFlag/flag_00001.png",
  "./assets/slot/bronzeFlag/flag_00002.png",
  "./assets/slot/bronzeFlag/flag_00003.png",
  "./assets/slot/bronzeFlag/flag_00004.png",
  "./assets/slot/bronzeFlag/flag_00005.png",
  "./assets/slot/bronzeFlag/flag_00006.png",
  "./assets/slot/bronzeFlag/flag_00007.png",
  "./assets/slot/bronzeFlag/flag_00008.png",
  "./assets/slot/bronzeFlag/flag_00009.png",
  "./assets/slot/bronzeFlag/flag_00010.png",
  "./assets/slot/bronzeFlag/flag_00011.png",
  "./assets/slot/bronzeFlag/flag_00012.png",
  "./assets/slot/bronzeFlag/flag_00013.png",
  "./assets/slot/bronzeFlag/flag_00014.png",
  "./assets/slot/bronzeFlag/flag_00015.png",
  "./assets/slot/bronzeFlag/flag_00016.png",
  "./assets/slot/bronzeFlag/flag_00017.png",
  "./assets/slot/bronzeFlag/flag_00018.png",
  "./assets/slot/bronzeFlag/flag_00019.png",
  "./assets/slot/bronzeFlag/flag_00020.png",
  "./assets/slot/bronzeFlag/flag_00021.png",
  "./assets/slot/bronzeFlag/flag_00022.png",
  "./assets/slot/bronzeFlag/flag_00023.png",
  "./assets/slot/bronzeFlag/flag_00024.png",
  "./assets/slot/bronzeFlag/flag_00025.png",
  "./assets/slot/bronzeFlag/flag_00026.png",
  "./assets/slot/bronzeFlag/flag_00027.png",
  "./assets/slot/bronzeFlag/flag_00028.png",
  "./assets/slot/bronzeFlag/flag_00029.png",
  "./assets/slot/bronzeFlag/flag_00030.png",
];

// Paths for the silver flag images
const silverFlagImagesPaths = [
  "./assets/slot/flag/Flag_00080.png",
  "./assets/slot/flag/Flag_00081.png",
  "./assets/slot/flag/Flag_00082.png",
  "./assets/slot/flag/Flag_00083.png",
  "./assets/slot/flag/Flag_00084.png",
  "./assets/slot/flag/Flag_00085.png",
  "./assets/slot/flag/Flag_00086.png",
  "./assets/slot/flag/Flag_00087.png",
  "./assets/slot/flag/Flag_00088.png",
  "./assets/slot/flag/Flag_00089.png",
  "./assets/slot/flag/Flag_00090.png",
  "./assets/slot/flag/Flag_00091.png",
  "./assets/slot/flag/Flag_00092.png",
  "./assets/slot/flag/Flag_00093.png",
  "./assets/slot/flag/Flag_00094.png",
  "./assets/slot/flag/Flag_00095.png",
  "./assets/slot/flag/Flag_00096.png",
  "./assets/slot/flag/Flag_00097.png",
  "./assets/slot/flag/Flag_00098.png",
  "./assets/slot/flag/Flag_00099.png",
  "./assets/slot/flag/Flag_00100.png",
  "./assets/slot/flag/Flag_00101.png",
  "./assets/slot/flag/Flag_00102.png",
  "./assets/slot/flag/Flag_00103.png",
  "./assets/slot/flag/Flag_00104.png",
  "./assets/slot/flag/Flag_00105.png",
  "./assets/slot/flag/Flag_00106.png",
  "./assets/slot/flag/Flag_00107.png",
  "./assets/slot/flag/Flag_00108.png",
  "./assets/slot/flag/Flag_00109.png",
  "./assets/slot/flag/Flag_00110.png",
];

// Paths for the gold flag images
const goldFlagImagesPaths = [
  "./assets/slot/goldenFlag/flag_00000.png",
  "./assets/slot/goldenFlag/flag_00001.png",
  "./assets/slot/goldenFlag/flag_00002.png",
  "./assets/slot/goldenFlag/flag_00003.png",
  "./assets/slot/goldenFlag/flag_00004.png",
  "./assets/slot/goldenFlag/flag_00005.png",
  "./assets/slot/goldenFlag/flag_00006.png",
  "./assets/slot/goldenFlag/flag_00007.png",
  "./assets/slot/goldenFlag/flag_00008.png",
  "./assets/slot/goldenFlag/flag_00009.png",
  "./assets/slot/goldenFlag/flag_00010.png",
  "./assets/slot/goldenFlag/flag_00011.png",
  "./assets/slot/goldenFlag/flag_00012.png",
  "./assets/slot/goldenFlag/flag_00013.png",
  "./assets/slot/goldenFlag/flag_00014.png",
  "./assets/slot/goldenFlag/flag_00015.png",
  "./assets/slot/goldenFlag/flag_00016.png",
  "./assets/slot/goldenFlag/flag_00017.png",
  "./assets/slot/goldenFlag/flag_00018.png",
  "./assets/slot/goldenFlag/flag_00019.png",
  "./assets/slot/goldenFlag/flag_00020.png",
  "./assets/slot/goldenFlag/flag_00021.png",
  "./assets/slot/goldenFlag/flag_00022.png",
  "./assets/slot/goldenFlag/flag_00023.png",
  "./assets/slot/goldenFlag/flag_00024.png",
  "./assets/slot/goldenFlag/flag_00025.png",
  "./assets/slot/goldenFlag/flag_00026.png",
  "./assets/slot/goldenFlag/flag_00027.png",
  "./assets/slot/goldenFlag/flag_00028.png",
  "./assets/slot/goldenFlag/flag_00029.png",
  "./assets/slot/goldenFlag/flag_00030.png",
];

/**
 * Function to start the game
 */
function start() {
  if (spinCount === 0) return;


  handlePullAudio.play();
  const startSpinner = document.getElementById("startSpinner");
  animateSpinner(startSpinner);
}

/**
 * Function to restart the game
 */
function restartGame() {
  clearTimeout(restartGameId);

  handlePullAudio.pause();
  handlePullAudio.currentTime = 0;
  applauseAudio.pause();
  applauseAudio.currentTime = 0;
  fireworksAudio.pause();
  fireworksAudio.currentTime = 0;
  letterAudio.pause();
  letterAudio.currentTime = 0;
  rollFinishAudio.pause();
  rollFinishAudio.currentTime = 0;
  scoreAudio.currentTime = 0

  clearTimeout(soundTimeOutId);
  setUserName();

  document.querySelector(".slot-game-machine-column-container").remove();

  drawContents();

  const startSpinner = document.getElementById("startSpinner");
  startSpinner.addEventListener("click", start);

  victoryPosition();
  setPrize(2300); // NEXT TWO PLACEHOLDER
}

/**
 * Function to create a new HTML element
 * @param {string} tag - The tag name for the new element
 * @param {string} className - The class name for the new element
 * @param {string} text - The text content for the new element
 * @returns {HTMLElement} - The new HTML element
 */
function createElem(tag, className, text = "") {
  const elem = document.createElement(tag);
  elem.className = className;
  if (text) elem.textContent = text;
  return elem;
}

let count = 0;

/**
 * Function to draw the contents of the game
 * This function creates the initial state of the slot machine game.
 * It creates a grid of characters with 12 columns and 120 rows.
 * The characters are randomly selected from the `characters` array.
 * The first and last row of each column are filled with the characters from the `START_TEXT` array.
 */
function drawContents() {
  const numColumns = 12;
  const numRows = 120;
  count++;

  const container = document.getElementById("slotGameMachineContainer");

  const columnContainer = createElem(
    "div",
    `slot-game-machine-column-container`
  );
  const columnContainer1 = createElem(
    "div",
    `slot-game-machine-column-container1`
  );

  columnContainer.appendChild(columnContainer1);

  for (let column = 0; column < numColumns; column++) {
    const columnElem = createElem(
      "div",
      `slot-game-machine-column1 col${column}`
    );

    for (let row = 0; row < numRows; row++) {
      let char = characters[Math.floor(Math.random() * characters.length)];

      if (column % 2 === 0 && row === 1) {
        char = START_TEXT[column];
      }

      if (column % 2 !== 0 && row === 118) {
        char = START_TEXT[column];
      }

      const charElem = createElem(
        "h2",
        `slot-game-machine-row number-${row}`,
        char
      );

      if (column % 2 === 0 && row === 1) {
        charElem.style.color = "black";
      }

      if (column % 2 !== 0 && row === 118) {
        charElem.style.color = "black";
      }

      columnElem.appendChild(charElem);
    }

    columnContainer1.appendChild(columnElem);
  }

  container.appendChild(columnContainer);
}

/**
 * Function to create the spinner
 * This function creates an image element and appends it to the spinner container.
 * The image source is set to the first image in the spinner animation sequence.
 */
function createSpinner() {
  const spinnerContainer = document.getElementById(
    "slotGameMachineSpinnerContainer"
  );

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
});

/**
 * Function to animate the spinner
 * This function changes the source of the spinner image in a loop to create an animation effect.
 * The animation stops when all images in the spinner animation sequence have been shown.
 * After the animation stops, a fetch request is made to get the winner and email.
 * Then the spin function is called to start the slot machine animation.
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
      fetch().then((res) => {
        winCondition = res.winner.toUpperCase(); //PLACEHOLDER We need to get the win condition from the server response and set it here
        email = res.email; //PLACEHOLDER
      });

      spin();
    }
  }

  animate();
  startSpinner.removeEventListener("click", start);
}

/**
 * Function to load images
 * This function takes an array of image paths, creates new Image objects for each path, and returns an array of the created Image objects.
 * @param {Array} paths - An array of image paths
 * @returns {Array} - An array of Image objects
 */
function loadImages(paths) {
  return paths.map((path) => {
    const img = new Image();
    img.src = path;
    return img;
  });
}

// Load images for the flags
const silverFlagImages = loadImages(silverFlagImagesPaths);
const bronzeFlagImages = loadImages(bronzeFlagImagesPaths);
const goldFlagImages = loadImages(goldFlagImagesPaths);

/**
 * Function to animate the flag
 * This function takes an array of Image objects and animates the flag by changing its source in a loop.
 * @param {Array} flagImages - An array of Image objects
 */
function animateFlag(flagImages) {
  let index = 0;
  const animate = () => {
    flag.style.pointerEvents = "none";
    flag.src = flagImages[index].src;
    index = (index + 1) % flagImages.length;
    flagAnimationId = requestAnimationFrame(animate);
  };
  cancelAnimationFrame(flagAnimationId);

  animate();
}

/**
 * Function to determine the winner
 * This function checks the spinCount and calls the animateFlag function with the corresponding flag images.
 * It also decreases the spinCount and sets a timeout to restart the game.
 */
function winner() {
  if (spinCount === 3) {
    animateFlag(bronzeFlagImages);
  } else if (spinCount === 2) {
    animateFlag(silverFlagImages);
  } else if (spinCount === 1) {
    animateFlag(goldFlagImages);
  }


  restartId = setTimeout(() => {
    resetAnimGoToStart();
    spinCount--
  }, 5000);
}


function stopColumnAnim(target) {
  anime({
    targets: target,
    top: `${2050}px`,
    duration: 700,
    easing: "cubicBezier(0.140, 0.435, 0.780, 1.385)",
    complete: function () {
      letterAudio.currentTime = 0;
      letterAudio.play();
      if (createdColumns === 11) {
        setTimeout(() => {
          scoreAudio.pause()
          rollFinishAudio.play();
          fireworksAudio.play();
          bgAudio.pause();
          update = 1;
          flag.style.opacity = 1;
          applauseAudio.play();
          setUserName(email);
          userName.style.opacity = 1;
          firework.style.opacity = 1;
          winner();
        }, 1200);
      }
    },
  });
}

function winAnim() {
  let winAnimTimeOut = 0
  if (winAnimTimeOut) {
    clearTimeout(winAnimTimeOut);
  }

  winAnimTimeOut = setTimeout(() => {
    const columnContainer1 = document.querySelector(
      ".slot-game-machine-column-container1"
    );
    if (createdColumns < 12) {
      const numRows = 60;

      const column2 = createElem(
        "div",
        `slot-game-machine-column2 colNum${createdColumns}`
      );
      createdColumns++;

      for (let j = 0; j < numRows; j++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const row = createElem("h2", `slot-game-machine-row number-${j}`, char);
        column2.appendChild(row);
      }
      if (document.querySelector(".col0")) {
        columnContainer1.insertBefore(column2, document.querySelector(".col0"));
        document.querySelector(".col0").remove();
        stopColumnAnim(column2);
        document.querySelectorAll(".number-40")[currentIndex].textContent =
          winCondition[currentIndex];
        document.querySelectorAll(".number-40")[currentIndex].style.color =
          "black";

        winAnim();
      } else {
        document.querySelector(`.col${prevIndex}`).remove();
        document.querySelector(`.colNum${currentIndex}`).after(column2);

        prevIndex++;
        currentIndex++;

        document.querySelectorAll(".number-40")[currentIndex].textContent =
          winCondition[currentIndex];
        document.querySelectorAll(".number-40")[currentIndex].style.color =
          "black";

        if (currentIndex > 0) {
          timeoutWin = 500;
        }

        stopColumnAnim(column2);
        winAnim();
      }
    }
  }, timeoutWin);
}

/**
 * Function to update the animation
 * This function checks the progress of the animation and performs various actions based on the progress.
 * @param {Object} anim - The anime.js animation object
 */
function updateAnim1(anim) {
  if (colorBlocker === 0) {
    backToStartInterval = setTimeout(() => {
      document.querySelectorAll(".number-118").forEach((el) => {
        el.style.color = "rgba(0, 0, 0, 23%)";
      });
      document.querySelectorAll(".number-1").forEach((el) => {
        el.style.color = "rgba(0, 0, 0, 23%)";
      });
    }, 500);

  }

  colorBlocker++;


  let loops1 = 0;

  if (anim.progress >= 40) {

    clearAnimTimeouts();

    document.querySelectorAll(".slot-game-machine-column1").forEach((el) => {
      anime.remove(el);
    });

    anime({
      targets: ".even",
      top: [
        {value: "0px", duration: 0, delay: 0},
        {value: "-2200px", duration: 500, delay: 0},
      ],
      easing: "linear",
      loop: true,
      loopComplete: function () {
        loops1++;
      },
    });

    anime({
      targets: ".odd",
      top: [
        {value: "0px", duration: 0, delay: 0},
        {value: "2200px", duration: 500, delay: 0},
      ],
      easing: "linear",
      loop: true,
      loopComplete: function () {
        loops1++;
      },
      update: function () {
        if (winCondition && loops1 === 6 && block === 0) {
          block++;
          winAnim();
        }
      },
    });
  }
}

/**
 * Function to spin the slot machine
 * This function takes a target element and a callback function, and animates the target element by changing its top position.
 * @param {HTMLElement} target - The target element to animate
 * @param {Function} func - The callback function to call during the animation update
 */
function spin1(target, func) {
  anime({
    targets: target,
    top: "-13650px",
    easing: "easeInQuad",
    duration: 4000,
    update: function (anim) {
      if (func) {
        func(anim);
      }
    },
  });
}

/**
 * Function to spin the slot machine in the opposite direction
 * This function takes a target element and animates the target element by changing its top position.
 * @param {HTMLElement} target - The target element to animate
 */
function spin2(target) {
  anime({
    targets: target,
    top: "13650px",
    easing: "easeInQuad",
    duration: 4000,
  });
}

/**
 * Function to start the spinning of the slot machine
 * This function checks if the spinCount is 0 and if there are any columns in the slot machine, and then starts the spinning animation for each column.
 */
function spin() {
  scoreAudio.play()
  del = 1200;

  let columns = document.getElementsByClassName("slot-game-machine-column1");

  if (columns.length === 0) return;

  for (let i = 0; i <= columns.length - 1; i++) {
    if (i === 0) {
      columns[i].classList.add("even");
      anim1Time1 = setTimeout(() => {
        spin1(columns[i], updateAnim1);
      }, del);
    }
    del -= 100;
    if (i % 2 === 0 && i !== 0) {
      columns[i].classList.add("even");
      anim1Time2 = setTimeout(() => {
        spin1(columns[i]);
      }, del);
    }

    if (i % 2 !== 0) {
      columns[i].classList.add("odd");
      anim1Time3 = setTimeout(() => {
        spin2(columns[i]);
      }, del);
    }
  }
}

function beckToStartText() {
  const numColumns = 12;
  const numRows = 120;
  const row22 = document.getElementsByClassName("number-22");
  const row58 = document.getElementsByClassName("number-58");

  for (let i = 0; i < numColumns; i++) {
    for (let j = 0; j < numRows; j++) {
      if (i % 2 === 0 && j === 22) {
        row22[i].textContent = START_TEXT[i];
        row22[i].style.color = "black";
      }

      if (i % 2 !== 0 && j === 58) {
        row58[i].textContent = START_TEXT[i];
        row58[i].style.color = "black";
      }
    }
  }
}

function resetSpine(position, target, func) {
  anime({
    targets: target,
    top: position,
    easing: "easeInOutCubic",
    duration: 7000,
    update: function (anim) {
      if (anim.progress >= 10 && callBeckToStartText1Time) {
        callBeckToStartText1Time = false;
        beckToStartText();
      }
      if (func) {
        func(anim);
      }
    },
    complete: function (anim) {
      flag.style.opacity = "0";
      userName.style.opacity = "0";
      firework.style.opacity = "0";
      if (callResetGame1Time) {
        callResetGame1Time = false;
        fireworksAudio.pause();
        bgAudio.play();
        const restartGameId = setTimeout(() => {
          restartGame();
        }, 2000);
      }
    },
  });
}

function resetAnimGoToStart() {
  let columns = document.getElementsByClassName("slot-game-machine-column2");

  for (let i = 0; i <= columns.length - 1; i++) {
    if (i === 0) {
      anim1Time4 = setTimeout(() => {
        resetSpine(4100, columns[i]);
      }, del);
      del -= 100;
    }

    if (i % 2 === 0 && i !== 0) {
      anim1Time4 = setTimeout(() => {
        resetSpine(4100, columns[i]);
      }, del);
    }
    del -= 100;

    if (i % 2 !== 0) {
      anim1Time4 = setTimeout(() => {
        resetSpine(0, columns[i]);
      }, del);
    }
  }
}

// Create the spinner
createSpinner();

/**
 * Function to run the game
 * This function sets up the initial state of the game, draws the contents of the slot machine, and adds event listeners for the start button and the volume button.
 */
function runGame() {
  victoryPosition();
  setUserName();
  drawContents();
  setPrize(2000); //FIRST PRIZE PLACEHOLDER

  const startSpinner = document.getElementById("startSpinner");

  startSpinner.addEventListener("click", start);

  volumeButton.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false;
      volumeIcon.src = "assets/icons/volumeOn.svg";
    } else {
      video.muted = true;
      volumeIcon.src = "assets/icons/volumeOff.svg";
    }
  });

  bgVolumeButton.addEventListener("click", () => {
    if (bgAudio.muted) {
      bgAudio.play()
      bgAudio.volume = 0.4;
      bgAudio.muted = false;
    } else {
      bgAudio.muted = true;
    }
  });
}

// Run the game
runGame();

// BG ANIMATION
function bG() {
  const container = document.getElementById("container");

  function createAndAnimateImage() {
    // Создаем элемент изображения
    const img = document.createElement("img");
    img.src = "./assets/slot/symbol.svg";

    const x = container.offsetWidth / 2;
    const y = container.offsetHeight / 2;

    img.style.position = "absolute";
    img.style.opacity = "0.6";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    container.appendChild(img);

    const dx = Math.random() * 10 - 5;
    const dy = Math.random() * 10 - 5;

    function moveImage() {
      let currentX = parseFloat(img.style.left);
      let currentY = parseFloat(img.style.top);

      currentX += dx;
      currentY += dy;

      img.style.left = `${currentX}px`;
      img.style.top = `${currentY}px`;

      if (
        currentX < -img.width ||
        currentX > container.offsetWidth ||
        currentY < -img.height ||
        currentY > container.offsetHeight
      ) {
        container.removeChild(img);
        createAndAnimateImage();
      } else {
        requestAnimationFrame(moveImage);
      }
    }

    requestAnimationFrame(moveImage);
  }

  // BG SYMBOLS ANIMATION COUNT
  for (let i = 0; i < 30; i++) {
    createAndAnimateImage();
  }
}

bG();
