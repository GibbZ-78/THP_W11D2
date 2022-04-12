/****************************
 *                          *
 *  Coded with love by JBV  *
 *         for the          *
 *    THP W22 Developer     *
 *       curriculum         *
 *                          *
 ****************************/

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

my_tab_entrepreneurs = entrepreneurs.map(({ first, last, year }) => ({ first_name: first, last_name: last }));
console.log("Sélection des seuls prénoms et noms dans un nouveau tableau, indexé sur 'first_name' et 'last_name', au lieu de 'first' et 'last'.");
console.log(my_tab_entrepreneurs);

let maintenant = new Date;
let annee = maintenant.getFullYear();
my_tab_ages_entrepreneurs = entrepreneurs.map(x => ({ first_name: x.first, last_name: x.last, age: annee - x.year }));
console.log("Même chose que précédemment mais enrichi du calcul de l'âge de chaque entrepreneur.");
console.log(`Maintenant: ${maintenant} - Année courante: ${annee}.`)
console.log(my_tab_ages_entrepreneurs);

console.log("Maintenant on ne garde que les entrepreneurs nés dans les 70's.");
console.log(entrepreneurs.filter(({ first, last, year }) => (year >= 1970 && year < 1980)));

/*****************
 *  End of code  *
 *****************/