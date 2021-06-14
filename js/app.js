let game;

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

/**
  * Event handler on onscreen keyboard
  */

const keys = document.getElementsByClassName('key');
for ( let i = 0; i < keys.length; i++ ) {
  keys[i].addEventListener('click', (event) => {
    //console.log(event.target.textContent);
    game.handelInteraction(event.target);
  });
}
