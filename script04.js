/****************************
 *                          *
 *  Coded with love by JBV  *
 *         for the          *
 *    THP W22 Developer     *
 *       curriculum         *
 *                          *
 ****************************/

// Defining a new Bootstrap Modal object and linking it with the (initially) hidden "myModal" modal
// so as to be able to have it loaded with the adequate error message then popping whenever something goes wrong
let myModal = new bootstrap.Modal(document.getElementById("myModal"), {
  backdrop: "static", keyboard: false, focus: true
});

// Method locating the "first name" input and getting its value
function getFirstName() {
  return document.getElementById("myFirstName").value;
}

// Method locating the "last name" input and getting its value
function getLastName () {
  return document.getElementById("myLastName").value;
}

// Method locating the "e-mail" input and getting its value
function getEmail () {
  return document.getElementById("myEmail").value;
}

// Method locating the checked "chkbx**" checkboxes and returning a table with the related values
function getLotoNumbers() {
  let myLotoTab = [];
  for (let index = 1; index < 50; index++) {
    let myCheckBoxId = `chkbx${index}`;
    if (document.getElementById(myCheckBoxId).checked) {
      myLotoTab.push(document.getElementById(myCheckBoxId).value);
    }    
  }
  return myLotoTab;
}

// Check if the provided e-mail address is neither "undefined", nor "null", nor empty, and correctly formatted
function isEmailOK(testMailAddress) {
  let myTest = !!testMailAddress && testMailAddress.length > 8 && testMailAddress.length < 30;
  myTest &= testMailAddress.match(/^[a-z0-9]+[.]?[a-z0-9]*[@][a-z0-9]{3,63}[.][a-z]{2,}$/) !== null;
  return myTest;
}

// Check if the provided array of numbers is neither "undefined", nor "null", nor empty, and effectively contains 6 numbers
function areNumbersOK(testNbrsTab) {
  let myTest = !!testNbrsTab && testNbrsTab.length == 6;
  return myTest;
}

// Display a parametered modal to warn on an error OR announce a win / lose !
function displayPolymorphModal(myDedicatedTitle, myDedicatedMessage) {
  document.getElementById("staticBackdropLabel").innerText = myDedicatedTitle;
  document.getElementById("myModalBody").innerText = myDedicatedMessage;
  myModal.show();
}

// and checking if all entries are OK (e.g. first name not empty, mail address correctly formatted...)
// as well as if the player has won or not after a random draw
function checkLoto(xfirstname, xlastname, xemail, xnumbers) { 
  if (!xfirstname) {
    displayPolymorphModal("Problème sur le prénom", "Veuillez fournir un prénom, s'il-vous-plaît.");
    return false;
  } else if (!xlastname){
    displayPolymorphModal("Problème de nom de famille", "Merci de saisir un nom de famille, s'il-vous-plaît.");
    return false;
  } else if (!isEmailOK(xemail)){
    displayPolymorphModal("Problème dans l'adresse e-mail", `Une adresse e-mail correctement formatée est attendue, s'il-vous-plaît. Or, vous avez fourni '${xemail}'.`);
    return false;
  } else if (!areNumbersOK(xnumbers)) {
    displayPolymorphModal("Problème de nom de famille", `Il y a un problème sur les numéros choisis, désolé. Vous avez sélectionné: ${xnumbers} (${xnumbers.length} numéros).`);
    return false;
  } else {
    window.alert(`Prénom: ${xfirstname} - Nom: ${xlastname} - Mail: ${xemail} - Numéros: ${xnumbers}`);
    return true;
  }
};

// Cette fonction fait ce qu'elle dit et dit ce qu'elle fait... CQFD
function formatCurrentDateInFrench(){
  let myDT = new Date();
  let myDate = myDT.getDate();
  let myDayTab = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  let myDay = myDayTab[myDT.getDay()];
  let myMonthTab = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  let myMonth = myMonthTab[myDT.getMonth()];
  let myYear = myDT.getFullYear();
  let myHours = myDT.getHours();
  let myMinutes = myDT.getMinutes();
  let myFinalDateInFrenchString = `${myDay} ${myDate} ${myMonth} ${myYear} à ${myHours} heure(s) ${myMinutes} minute(s)`;
  return myFinalDateInFrenchString;
}

// Here is the method called each time the "Valider" button is pressed on the page form
// It logs the percise time at which the form has been validated the handle it to the "checkLoto" function
function handleMyFormEvent(event){
  let myDateTime = formatCurrentDateInFrench();
  event.preventDefault(); // Prevent the form to trigger the "submit" event, reinitializing all its conten
  if (checkLoto(getFirstName(), getLastName(), getEmail (), getLotoNumbers())) {
    document.getElementById('myLog').innerText = `Formulaire de jeu validé le ${myDateTime}.`;
  }
}

// Locating the whole form submit button via its ID then adding a "click" event listener to it
// to activate the "checkLoto()" function validating all form information + won / lost status
const myButton = document.getElementById('mySubmitButton');
myButton.addEventListener("click", handleMyFormEvent);

/*****************
 *  End of code  *
 *****************/