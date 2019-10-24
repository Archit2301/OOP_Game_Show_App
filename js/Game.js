/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = [
                     new Phrase('May the Force be with you'),
                     new Phrase('Love means never having to say that you are sorry'),
                     new Phrase('After all tomorrow is another day'),
                     new Phrase('I feel the need the need for speed'),
                     new Phrase('Bravo six going dark'),
                   ];
     this.activePhrase = null;
   }

   getRandomPhrase() {
     const randomNumber = Math.floor(Math.random() * this.phrases.length);

       return this.phrases[randomNumber];
       this.getRandomPhrase();
   }

   startGame() {
     document.getElementById('overlay').style.display = "none";
     const randomPhrase = this.getRandomPhrase();
     this.activePhrase = randomPhrase;
     randomPhrase.addPhraseToDisplay();
   }

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

   removeLife() {
     this.missed += 1;
     const livesList = document.getElementsByClassName('tries');
     for ( let i = 0; i < livesList.length; i++ ) {
       if ( livesList[i].getAttribute("src") === "images/liveHeart.png" ) {
         livesList[i].removeAttribute("src");
         livesList[i].setAttribute("src", "images/lostHeart.png");
       }
     }
     if( this.missed === 5 ) {
       this.gameOver();
     }
   }

   gameOver(gameWon) {
     document.getElementById('overlay').style.display = "block";
     if ( this.checkForWin === true ) {
       document.getElementById('game-over-message').textContent('You Won');
     } else {
       document.getElementById('game-over-message').textContent('You Lost');
     }
   }
 }
