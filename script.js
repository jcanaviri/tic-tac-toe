// Selecting all the elements required
const selectBox = document.querySelector('.select-box');
const selectXBtn = document.querySelector('.playerX');
const selectOBtn = document.querySelector('.playerO');
const playerBoard = document.querySelector('.play-board');
const players = document.querySelector('.players');

const allBoxes = document.querySelectorAll('section span');

let playerXIcon = '<ion-icon name="close-outline"></ion-icon>';
let playerOIcon = '<ion-icon name="radio-button-off-outline"></ion-icon>';

// User click function
const clickedBox = (item) => {
  if (players.classList.contains('player')) {
    item.innerHTML = playerOIcon;
    players.classList.add('active');
  } else {
    item.innerHTML = playerXIcon;
    players.classList.add('active');
  }
  item.style.pointerEvents = 'none';
};

window.onload = () => {
  allBoxes.forEach((box) => {
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
