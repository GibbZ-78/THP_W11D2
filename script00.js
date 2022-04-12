/****************************
 *                          *
 *  Coded with love by JBV  *
 *         for the          *
 *    THP W22 Developer     *
 *       curriculum         *
 *                          *
 ****************************/

let myDropDownList = document.getElementById("myDDL");

function loadAdequateJS() {
  let myValue = myDropDownList.options[myDropDownList.selectedIndex].value;
  console.log(`***>${myValue}<***`);
  switch (myValue) {
    case "1":
      window.location = "./index01.html";
      break;
    case "2":
      window.location = "./index02.html";
      break;
    case "3":
      window.location = "./index03.html";
      break;
    case "4":
      window.location = "./index04.html";
      break;
    default:
      console.log("No valid selection (yet)...");
      break;
  }
}

// For an unknown reason, the "addEventListener" method gave nothing...
// I hence (re)switched to the f***ing ol' "onchange:javascript" trick directly inserted into the HTML file.
// myDropDownList.addEventListener("change", loadAdequateJS());

/*****************
 *  End of code  *
 *****************/