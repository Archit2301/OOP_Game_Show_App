/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

   constructor() {
     this.missed = 0;
     //5 new phrase objects simply added to the phrases property
     this.phrases = [
                     new Phrase('May the Force be with you'),
                     new Phrase('Love means never having to say that you are sorry'),
                     new Phrase('After all tomorrow is another day'),
                     new Phrase('I feel the need the need for speed'),
                     new Phrase('Bravo six going dark'),
                   ];
     this.activePhrase = null;
   }

   /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

   getRandomPhrase() {
     const randomNumber = Math.floor(Math.random() * this.phrases.length);
     return this.phrases[randomNumber];
   }

   /**
    * Begins game by selecting a random phrase and displaying it to user
    */

   startGame() {
     document.getElementById('overlay').style.display = "none";
     const randomPhrase = this.getRandomPhrase();
     this.activePhrase = randomPhrase;
     randomPhrase.addPhraseToDisplay();
   }

   /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

   checkForWin() {
     const activePhraseLength = this.activePhrase.phrase.length;
     const spacesLength = document.getElementsByClassName('space').length;
     const displayedLettersLength = document.getElementsByClassName('show').length;
     if ( activePhraseLength === (displayedLettersLength + spacesLength) ) {
       return true;
     } else {
       return false;
     }
   }

   /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

   removeLife() {
     const livesList = document.querySelectorAll('.tries img');
     for ( let i = 0; i < livesList.length; i++ ) {
       if ( livesList[i].getAttribute("src") === "images/liveHeart.png") {
         livesList[i].removeAttribute("src");
         livesList[i].setAttribute("src", "images/lostHeart.png");
         break;
       }
     }
     this.missed += 1;
     if (this.missed === 5) {
       this.gameOver(false);
     }
   }

   /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

   gameOver(gameWon) {
     const overlay = document.getElementById('overlay');
     const gameOverMessage = document.getElementById('game-over-message');
     overlay.style.display = "block";
     if ( gameWon === true ) {
       overlay.classList.remove("lose");
       overlay.classList.add("win");
       gameOverMessage.textContent = "Great Job!";
       this.resetGame();
     } else if ( gameWon === false ) {
       overlay.classList.remove("win");
       overlay.classList.add("lose");
       gameOverMessage.textContent = "Sorry, better luck next time!";
       this.resetGame();
     }
   }

   /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */

   handelInteraction(button) {
     console.log(button);
     button.disabled = true;
     if (!this.activePhrase.phrase.includes(button.textContent)) {
       button.classList.add('wrong');
       this.removeLife();
     } else if (this.activePhrase.phrase.includes(button.textContent)) {
       button.classList.add('chosen');
       const phrase = new Phrase(this.activePhrase.phrase);
       phrase.showMatchedLetter(button.textContent);
       if( this.checkForWin() ) {
         this.gameOver(true);
       }
     }
   }

   /**
    * Reset gameboard between games
    */

   resetGame() {
     console.log('Game reset!');
     const ulDiv = document.querySelector('#phrase ul');
     while( ulDiv.firstChild ) {              //Removes all li elements from Phrase 'ul'
       ulDiv.firstChild.remove();
       const keys = document.getElementsByClassName('key');
       for( let i = 0; i < keys.length; i++ ) {
         keys[i].disabled = false;
         keys[i].classList.remove('wrong');
         keys[i].classList.remove('chosen');
         keys[i].classList.add('key');
      }
       const images = document.querySelectorAll('.tries img')
       for( let i = 0; i < images.length; i++ ) {     //Resets all heart images
         images[i].setAttribute("src", "images/liveHeart.png");
       }
     }
   }
 }
