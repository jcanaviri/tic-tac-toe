// Selecting all the elements required
const selectBox = document.querySelector('.select-box');
const selectXBtn = document.querySelector('.playerX');
const selectOBtn = document.querySelector('.playerO');
const playerBoard = document.querySelector('.play-board');

window.onload = () => {
  selectXBtn.onclick = () => {
    selectBox.classList.add('hide');
    playerBoard.classList.add('show');
  };

  selectOBtn.onclick = () => {
    selectBox.classList.add('hide');
    playerBoard.classList.add('show');
  };
};
