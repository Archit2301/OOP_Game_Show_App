/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   /**
    * Display phrase on game board
    */

   addPhraseToDisplay() {
     const ulDiv = document.querySelector('#phrase ul');
     const letters = this.phrase.split("");
     for( let i = 0; i < letters.length; i++ ) {
       const list = document.createElement('LI');
       const listText = document.createTextNode(letters[i]);
       list.appendChild(listText);
       if ( letters[i].match(/^[a-z]$/) ) {               //regex to match all lowercase letters
         list.className = `hide letter ${letters[i]}`;
       } else if ( letters[i] === " " ) {
         list.className = "space";
       }
       ulDiv.appendChild(list);
     }
   }

   /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */

   checkLetter(letter) {
     if ( this.phrase.includes(letter) ) {
       return true;
     } else {
       return false;
     }
   }

   /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

   showMatchedLetter(letter) {
     const lettersList = document.getElementsByClassName(`${letter}`);
     for ( let i = 0; i < lettersList.length; i++ ) {
       lettersList[i].classList.remove('hide');
       lettersList[i].classList.add('show');
     }
   }
 }
