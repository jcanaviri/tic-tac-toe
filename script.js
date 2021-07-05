// Selecting all the elements required
const selectBox = document.querySelector('.select-box');
const selectXBtn = document.querySelector('.playerX');
const selectOBtn = document.querySelector('.playerO');
const playerBoard = document.querySelector('.play-board');
const players = document.querySelector('.players');

const allBox = document.querySelectorAll('section span');

let playerXIcon = '<ion-icon name="close-outline"></ion-icon>';
let playerOIcon = '<ion-icon name="radio-button-off-outline"></ion-icon>';
let playerSign = 'X';

const bot = () => {
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
  }
  allBox[randomBox].style.pointerEvents = 'none';
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
  item.style.pointerEvents = 'none';
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot();
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
    players.setAttribute('class', 'players active player');
  };
};
