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

   gameOver(gameWon) {
     document.getElementById('overlay').style.display = "block";
     if ( gameWon === true ) {
       document.getElementById('overlay').classList.remove("lose");
       document.getElementById('overlay').classList.add("win");
       document.getElementById('game-over-message').textContent = "Great Job!";
     } else if ( gameWon === false ) {
       document.getElementById('overlay').classList.remove("win");
       document.getElementById('overlay').classList.add("lose");
       document.getElementById('game-over-message').textContent = "Sorry, better luck next time!";
     }
   }

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
 }
