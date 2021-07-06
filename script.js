// Selecting all the elements required
const selectBox = document.querySelector('.select-box');
const selectXBtn = document.querySelector('.playerX');
const selectOBtn = document.querySelector('.playerO');
const playerBoard = document.querySelector('.play-board');
const players = document.querySelector('.players');
const resultBox = document.querySelector('.result-box');
let wonText = resultBox.querySelector('.won-text');
const replayBtn = document.querySelector('button');

const allBox = document.querySelectorAll('section span');

let playerXIcon = '<ion-icon name="close-outline"></ion-icon>';
let playerOIcon = '<ion-icon name="radio-button-off-outline"></ion-icon>';
let playerSign = 'X';
let runBot = true;

// selecting the winner
const getClass = (idName) => {
  return document.querySelector('.box' + idName).id;
};
const checkClass = (val1, val2, val3, sign) => {
  if (
    getClass(val1) == sign &&
    getClass(val2) == sign &&
    getClass(val3) == sign
  ) {
    return true;
  }
};
const selectWinner = () => {
  if (
    checkClass(1, 2, 3, playerSign) ||
    checkClass(4, 5, 6, playerSign) ||
    checkClass(7, 8, 9, playerSign) ||
    checkClass(1, 4, 7, playerSign) ||
    checkClass(2, 5, 8, playerSign) ||
    checkClass(3, 6, 9, playerSign) ||
    checkClass(1, 5, 9, playerSign) ||
    checkClass(3, 5, 7, playerSign)
  ) {
    runBot = false;
    bot(runBot);
    setTimeout(() => {
      playerBoard.classList.remove('show');
      resultBox.classList.add('show');
    }, 700);
    wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
  }
};

// BOT functionality
const bot = (runBot) => {
  if (runBot) {
    playerSign = 'O';
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        //if the box/span has no children means <i> tag
        array.push(i); //inserting unclicked boxes number/index inside array
      }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]; //getting random index from array so bot will select random unselected box
    if (array.length > 0) {
      //if array length is greater than 0
      if (players.classList.contains('player')) {
        allBox[randomBox].innerHTML = playerXIcon; //adding cross icon tag inside bot selected element
        players.classList.remove('active');
        playerSign = 'X';
        allBox[randomBox].setAttribute('id', playerSign);
      } else {
        allBox[randomBox].innerHTML = playerOIcon; //adding circle icon tag inside bot selected element
        players.classList.remove('active');
        allBox[randomBox].setAttribute('id', playerSign);
      }
      selectWinner();
    }
    allBox[randomBox].style.pointerEvents = 'none';
    players.style.pointerEvents = 'auto';
    playerSign = 'X';
  }
};

// User click function
const clickedBox = (item) => {
  if (players.classList.contains('player')) {
    item.innerHTML = playerOIcon;
    players.classList.add('active');
    playerSign = 'O';
    item.setAttribute('id', playerSign);
  } else {
    item.innerHTML = playerXIcon;
    players.classList.add('active');
    item.setAttribute('id', playerSign);
  }
  selectWinner();
  players.style.pointerEvents = 'none';
  item.style.pointerEvents = 'none';
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot(runBot);
  }, randomDelayTime);
};

window.onload = () => {
  allBox.forEach((box) => {
    box.setAttribute('onclick', 'clickedBox(this)');
  });

  selectXBtn.onclick = () => {
    selectBox.classList.add('hide');
    playerBoard.classList.add('show');
  };

  selectOBtn.onclick = () => {
    selectBox.classList.add('hide');
    playerBoard.classList.add('show');
    playerBoard.setAttribute('class', 'players active player');
  };
};
