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
 }
