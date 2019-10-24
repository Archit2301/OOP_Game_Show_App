/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay() {
     const ulDiv = document.querySelector('#phrase ul');
     const letters = this.phrase.split("");
     for( let i = 0; i < letters.length; i++ ) {
       const list = document.createElement('LI');
       const listText = document.createTextNode(letters[i]);
       list.appendChild(listText);
       if ( letters[i].match(/^[a-z]$/) ) {
         list.className = `hide letter ${letters[i]}`;
       } else if ( letters[i] === " " ) {
         list.className = "hide space";
       }
       ulDiv.appendChild(list);
     }
   }
 }
