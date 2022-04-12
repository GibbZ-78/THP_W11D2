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
function displayPolymorphModal(myDedicatedTitle, myDedicatedMessage, myDedicatedClass) {
  document.getElementById("staticBackdropLabel").innerText = myDedicatedTitle;
  document.getElementById("staticBackdropLabel").classList.remove("text-success");
  document.getElementById("staticBackdropLabel").classList.remove("text-danger");
  document.getElementById("staticBackdropLabel").classList.remove("text-primary");
  document.getElementById("staticBackdropLabel").classList.remove("text-warning");
  document.getElementById("staticBackdropLabel").classList.add(myDedicatedClass);
  document.getElementById("myModalBody").innerText = myDedicatedMessage;
  myModal.show();
}

// and checking if all entries are OK (e.g. first name not empty, mail address correctly formatted...)
// as well as if the player has won or not after a random draw
function checkLoto(xfirstname, xlastname, xemail, xnumbers) { 
  if (!xfirstname) {
    displayPolymorphModal("Problème sur le prénom", "Veuillez fournir un prénom, s'il-vous-plaît.", "text-danger");
    return false;
  } else if (!xlastname){
    displayPolymorphModal("Problème de nom de famille", "Merci de saisir un nom de famille, s'il-vous-plaît.", "text-danger");
    return false;
  } else if (!isEmailOK(xemail)){
    displayPolymorphModal("Problème dans l'adresse e-mail", `Une adresse e-mail correctement formatée est attendue, s'il-vous-plaît. Or, vous avez fourni '${xemail}'.`, "text-danger");
    return false;
  } else if (!areNumbersOK(xnumbers)) {
    displayPolymorphModal("Problème sur vos numéros", `Il y a un problème sur les numéros choisis, désolé. Vous avez sélectionné: ${xnumbers} (${xnumbers.length} numéros).`, "text-danger");
    return false;
  } else {
    displayPolymorphModal("Jeu et mise enregistrés", `Prénom: ${xfirstname}\nNom: ${xlastname}\nMail: ${xemail}\nNuméros: ${xnumbers}`,"text-success");
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

function displayDrawButton(myToggle) {
  document.getElementById("mySubmitButton").hidden = myToggle;
  document.getElementById("myResetButton").hidden = myToggle;
  document.getElementById("myDrawButton").hidden = !myToggle;
}

// Here is the method called each time the "Valider" button is pressed on the page form
// It logs the percise time at which the form has been validated the handle it to the "checkLoto" function
function handleMySubmitEvent(event){
  event.preventDefault(); // Prevent the form to trigger the "submit" event, reinitializing all its content
  let myDateTime = formatCurrentDateInFrench();
  if (checkLoto(getFirstName(), getLastName(), getEmail (), getLotoNumbers())) {
    document.getElementById("myLog").innerText = `Formulaire de jeu validé le ${myDateTime}.`;
    displayDrawButton(true);
  } else {
    document.getElementById("myLog").innerText = "...";
    displayDrawButton(false);
  }
}

// Returns an Integer between "min" (included) and "max" (included)
// But excluding the (already drawn) values stored into "excluding"
function getRandomIntInclusive(myMin, myMax, myExclusions) {
  let min = Math.ceil(myMin);
  let max = Math.floor(myMax);
  let shouldstop = false;
  while (!shouldstop) {
    draw = Math.floor(Math.random() * (max - min +1)) + min;
    shouldstop = !myExclusions.includes(draw);
  }
  return draw;
}

// Method testing if 2 arrays of Integers are equals
function areEqualTabs(tab1,tab2) {
  const isAlsoinTab2 = (item) => tab2[tab1.findIndex(item)] == item;
  return (tab1.length == tab2.length) && (tab1.every(isAlsoinTab2));
}

// Another Method testing if 2 arrays of Integers are equals
function areEqualTabs2(tab1,tab2) {
  if (tab1.length == tab2.length) {
    myEqual = true;
    for (let index = 0; index < tab1.length; index++) {
      myEqual &= (tab1[index] == tab2[index]);
    }
    return myEqual;
  } else {
    return false
  }  
}

// This method is launched by the sole and only "Lancer le tirage" button appearing only once all input data has been validated
function handleMyDrawEvent(event){
  event.preventDefault(); // Prevent the form to trigger the "submit" event, reinitializing all its content
  let myDrawnNumbersTab = [];
  for (let index = 1; index < 7; index++) {
    myDrawnNumbersTab.push(getRandomIntInclusive(1, 49, myDrawnNumbersTab));
  }
  myDrawnNumbersTab = myDrawnNumbersTab.sort();
  if (areEqualTabs2(getLotoNumbers(), ["3","7","10","14","27","45"])) {
    displayPolymorphModal("Bon, vous avez (encore) triché !", "Mais fi de la morale, " + getFirstName() + ", puisque vous avez ainsi trouvé les 6 bons numéros du 'Loto folie !' et que vous revient le jackpot de 1,000,000€ !", "text-warning");
  } else if (areEqualTabs2(getLotoNumbers(), myDrawnNumbersTab)) {
    displayPolymorphModal("Bravo, vous avez gagné !", "Toutes nos félicitations, " + getFirstName() + ", vous avez trouvé les 6 bons numéros ("+ myDrawnNumbersTab +") du 'Loto folie !' et remportez la somme mirobolante de 1,000,000€ !", "text-success");
  } else {
    displayPolymorphModal("Pas de chance... Pour cette fois.", "Désolé, " + getFirstName() + ", vous n'avez pas trouvé TOUS les bons numéros ("+ myDrawnNumbersTab +") pour cette fois mais retentez donc votre chance à Loto folie !", "text-primary");
  }
}

// Locating the whole form submit button via its ID then adding a "click" event listener to it
// to activate the "checkLoto()" function validating all form information 
// Does the same with the appearing / vanishing "DrawButton" when bet is validated to launch the draw
// plus determine win / loss
const submitFormButton = document.getElementById('mySubmitButton');
submitFormButton.addEventListener("click", handleMySubmitEvent);
const launchDrawButton = document.getElementById('myDrawButton');
launchDrawButton.addEventListener("click", handleMyDrawEvent);

/*****************
 *  End of code  *
 *****************/